'use client'
import img from "@/public/svg/contact-doc.svg"
import Image from "next/image"
import Link from "next/link"
import { useFormik, FormikErrors, FormikTouched } from "formik"
import { z } from "zod"
import { toFormikValidationSchema } from "zod-formik-adapter"
// Import toast
import { toast } from 'react-toastify'

const stringRequired = (msg: string, minLength: number = 1) => 
  z.preprocess(
    (val) => (val === undefined || val === null ? "" : val),
    z.string().min(minLength, msg)
  );

const contactSchema = z.object({
  firstName: stringRequired("First name is required", 2),
  lastName: stringRequired("Last name is required", 2),
  email: z.preprocess(
    (val) => (val === undefined || val === null ? "" : val),
    z.string().min(1, "Email is required").email("Invalid email address")
  ),
  phone: stringRequired("Phone number is required", 10),
  message: stringRequired("Please enter a message of a least 10 characters", 10),
  privacyPolicy: z.boolean().refine((val) => val === true, {
    message: "You must accept the privacy policy",
  }),
});

type FormValues = z.infer<typeof contactSchema>;

const ErrorMsg = ({ 
  name, 
  touched, 
  errors 
}: { 
  name: keyof FormValues; 
  touched: FormikTouched<FormValues>; 
  errors: FormikErrors<FormValues> 
}) => {
  const error = errors[name];
  const isTouched = touched[name];

  if (isTouched && error) {
    return <span className="text-red-500 text-xs mt-1">{error as string}</span>;
  }
  return null;
};

export default function ContactUs() {
  const formik = useFormik<FormValues>({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: '',
      privacyPolicy: false as unknown as true, 
    },
    validationSchema: toFormikValidationSchema(contactSchema),
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      const apiUrl = process.env.NEXT_PUBLIC_BASE_URL;

      if (!apiUrl) {
        console.error("API URL is not defined in environment variables.");
        toast.error("Configuration error. Please try again later.");
        setSubmitting(false);
        return;
      }

      try {
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Submission successful:", data);
        
        // Trigger Success Toast
        toast.success("Message sent successfully! We'll be in touch soon.");
        resetForm();
      } catch (error) {
        console.error("Error sending message:", error);
        // Trigger Error Toast
        toast.error("Failed to send message. Please check your connection and try again.");
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <section className="w-full px-7 flex justify-between py-12 bg-white">
      <div className="flex flex-col w-9/10 lg:w-1/2 gap-4">
        <h1>Get In Touch</h1>
        <p>Our friendly team would love to hear from you.</p>
        
        <form onSubmit={formik.handleSubmit} className="flex flex-col gap-5 w-full mt-3">
          <div className="flex gap-4">
            <div className="inputDiv flex-1 flex flex-col">
              <label htmlFor="firstName">First Name</label>
              <input type="text" {...formik.getFieldProps('firstName')} id="firstName" />
              <ErrorMsg name="firstName" touched={formik.touched} errors={formik.errors} />
            </div>

            <div className="inputDiv flex-1 flex flex-col">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" {...formik.getFieldProps('lastName')} id="lastName" />
              <ErrorMsg name="lastName" touched={formik.touched} errors={formik.errors} />
            </div>
          </div>

          <div className="inputDiv flex flex-col">
            <label htmlFor="email">Email</label>
            <input type="email" {...formik.getFieldProps('email')} id="email" />
            <ErrorMsg name="email" touched={formik.touched} errors={formik.errors} />
          </div>

          <div className="inputDiv flex flex-col">
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" {...formik.getFieldProps('phone')} id="phone" />
            <ErrorMsg name="phone" touched={formik.touched} errors={formik.errors} />
          </div>

          <div className="inputDiv flex flex-col">
            <label htmlFor="message">Message</label>
            <textarea {...formik.getFieldProps('message')} className="text-text" rows={5} id="message" />
            <ErrorMsg name="message" touched={formik.touched} errors={formik.errors} />
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex w-full gap-3">
              <input
                type="checkbox"
                className="w-auto"
                id="privacyPolicy"
                name="privacyPolicy"
                checked={!!formik.values.privacyPolicy}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              /> 
              <p>you agree to our friendly <Link href={'/privacy-policy'} className="font-inter underline">privacy policy.</Link></p>
            </div>
            <ErrorMsg name="privacyPolicy" touched={formik.touched} errors={formik.errors} />
          </div>

          <button
            type="submit"
            disabled={formik.isSubmitting}
            className={`px-6 py-2 rounded-lg text-white ${
              formik.isSubmitting || !formik.isValid || !formik.dirty 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-primary-green'
            }`}
          >
            {formik.isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
      <Image src={img} alt="blood-pressure" width={20} height={20} className="hidden lg:inline w-28 lg:w-2/5" />
    </section>
  )
}
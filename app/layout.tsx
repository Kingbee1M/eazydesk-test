import type { Metadata } from "next";
import { Geist, Noto_Sans_Georgian, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./UI/nav";
import FooterSection from "./UI/footer";
import { cn } from "@/lib/utils";
import { ToastContainer } from 'react-toastify';
const geist = Geist({subsets:['latin'],variable:'--font-sans'});


const dmSans = DM_Sans({
  subsets: ['latin'],
  display: 'auto',
  variable: '--font-dmSans',
});

const georgian = Noto_Sans_Georgian({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-georgian',
});

export const metadata: Metadata = {
  title: "eezyhealth",
  description: "An all-in-one healthcare management system designed to streamline operations, enhance patient care, and empower healthcare professionals with innovative technology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body
        className={`${dmSans.variable} ${georgian.variable} antialiased w-full flex flex-col justify-between items-center max-w-screen min-h-screen overflow-x-hidden`}
      >
        <Navbar/>
        <main className="w-full max-w-360 mt-9 md:mt-12 flex-1 flex-col items-center justify-center grow">
          <ToastContainer 
          position="top-right"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
          {children}
        </main>
        
        <FooterSection/>
      </body>
    </html>
  );
}

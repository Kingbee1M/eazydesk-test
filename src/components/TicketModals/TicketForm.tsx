import { useState, useEffect, useRef } from "react";
import ToSelect from "./ToSelect";
import ReactQuillWrapper from "./ReactQuillWrapper";
import { useAppDispatch, useAppSelector } from "../../store/useStore";
import { createTicket, reset } from "../../features/Ticket/ticketSlice";
import { SVGLoader } from "../SVGLoader";
import { toast } from "react-toastify";
import { customId } from "../Options";
import { ITgetallReguser } from "../../features/Registration/registrationSlice";



const TicketForm = ({ type, setShow, currentState, proposedChange }: any) => {
  const form: any = useRef()
  const { createisLoading, createisSuccess } = useAppSelector((state: any) => state.ticket)
  const dispatch = useAppDispatch();
  const { ITgetallReguserdata, ITgetallReguserisLoading } = useAppSelector((state: any) => state.reg);
  const user = ITgetallReguserdata?.data?.users?.filter((person: { role: string; }) =>
    person?.role === 'IT_SUPPORT' || person?.role === 'Admin'
  );




  useEffect(() => {
    // Fetch data when the component is mounted or dispatch changes 
    dispatch(ITgetallReguser());
  }, [dispatch]);


  const [file, setFile] = useState<File[]>([]);
  const [input, setInput] = useState<any>({
    file: [],
    ticketType: type,
    affectedUsers: "",
    severity: "",
    emails: "",
    description: "",
    currentState: "",
    proposedChange: ""
  });
  const [value, setValue] = useState('');

  // Fetch data on component mount
  useEffect(() => {
    dispatch(ITgetallReguser());
  }, [dispatch]);




  useEffect(() => {
    if (createisSuccess) {
      setFile([])
      toast.success("Ticket Created!", { toastId: customId });
      setShow(false); // Assuming setShow is used to control modal visibility
    }
    dispatch(reset()); // Reset createSuccess state in Redux after handling success
  }, [createisSuccess, dispatch, setShow]);

  // Handle description input change
  useEffect(() => {
    setInput((prevState: any) => ({
      ...prevState,
      description: value,
    }));
  }, [value]);



  // Handle file input change
  const InputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files); // Convert FileList to an array
      setFile(selectedFiles);
    }
  };


  // Handle form submission
  const handleCreateTicket = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData: any = new FormData();

    file.forEach(file => formData.append('file', file));
    formData.append('ticketType', input.ticketType);
    formData.append('affectedUsers', input.affectedUsers);
    formData.append('severity', input.severity);
    formData.append('emails', JSON.stringify(Array.isArray(input.emails) ? input.emails.map((item: any) => item?.value) : []));
    formData.append('description', input.description);
    formData.append('currentState', input.currentState);
    formData.append('proposedChange', input.proposedChange);

    // @ts-ignore 
    dispatch(createTicket(formData));
  };




  useEffect(() => {
    if (createisSuccess) {
      toast.success("Ticket Created!", { toastId: customId });
      setShow(false)
    }

    dispatch(reset());
  }, [createisSuccess, dispatch, setShow]);
  const [severityStyle, setSeverityStyle] = useState<any>({
    background: "transparent",
    width: "0%",
  });



  useEffect(() => {
    setInput((prevState: any) => {
      return ({
        ...prevState,
        description: value,
      });
    });
  }, [value]);


  useEffect(() => {
    if (input.affectedUsers >= 1 && input.affectedUsers <= 5) {
      handleOnChange("severity", "Low");
      setSeverityStyle(() => ({
        background: "green",
        width: "25%",
      }));
    } else if (input.affectedUsers >= 6 && input.affectedUsers <= 10) {
      handleOnChange("severity", "Medium");
      setSeverityStyle(() => ({
        background: "yellow",
        width: "50%",
      }));
    } else if (input.affectedUsers >= 11 && input.affectedUsers <= 19) {
      handleOnChange("severity", "High");
      setSeverityStyle(() => ({
        background: "#E48888",
        width: "75%",
      }));
    } else if (input.affectedUsers >= 20) {
      handleOnChange("severity", "Critical");
      setSeverityStyle(() => ({
        background: "red",
        width: "100%",
      }));
    } else {
      handleOnChange("severity", "");
      setSeverityStyle(() => ({
        background: "transparent",
        width: "0%",
      }));
    }
  }, [input.affectedUsers]);

  const handleOnChange = (input: string, value: string) => {
    setInput((prevState: any) => ({
      ...prevState,
      [input]: value,
    }));
  };





  return (
    <div>
      <form id="ticket-form" onSubmit={handleCreateTicket} ref={form}>
        <div className="form-grp">
          <label htmlFor="contact-details">To Email</label>
          <ToSelect user={user} isLoading={ITgetallReguserisLoading} handleOnChange={handleOnChange} input={input} />
        </div>
        {/* <div className="form-grp">
          <label htmlFor="contact-details">Cc</label>
          <CcSelect user={user} isLoading={ITgetallReguserisLoading} />
        </div> */}
        <div className="form-grp">
          <label htmlFor="contact-details">Ticket Type</label>
          <input
            type="text"
            id="contact-details"
            value={input.ticketType}
            disabled={true}
            required
            onChange={(e) => handleOnChange("ticketType", e.target.value)}
          />
        </div>
        {currentState && (
          <div className="form-grp">
            <label htmlFor="contact-details">Current State</label>
            <input
              type="text"
              id="contact-details"
              value={input.currentState}
              required
              onChange={(e) => handleOnChange("currentState", e.target.value)}
            />
          </div>
        )}

        {proposedChange && (<div className="form-grp">
          <label htmlFor="contact-details">Proposed Change</label>
          <input
            type="text"
            id="contact-details"
            value={input.proposedChange}
            required
            onChange={(e) => handleOnChange("proposedChange", e.target.value)}
          />
        </div>)}


        {/* <div className="form-grp">
          <label htmlFor="category">Issue Category</label>
          <select
            // placeholder="subject"
            id="category"
            required
            value={input.issueCategory}
            onChange={(e) => handleOnChange("issueCategory", e.target.value)}>
            <option></option>
            {issueCategories.map((item: any, i: any) => (
              <option key={i} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div> */}
        <div className="form-grp">
          <label htmlFor="description">Issue Description</label>
          <ReactQuillWrapper setValue={setValue} value={value} />
        </div>
        <div className="form-grp_row">
          <div className="form-grp">
            <label htmlFor="affected">Number of Users affected</label>
            <input
              type="number"
              id="affected"
              value={input.affectedUsers}
              required={
                input.issueCategory === "Total DOWNTIME" ? false : true
              }
              onChange={(e) => handleOnChange("affectedUsers", e.target.value)}
            />
          </div>
          <div className="form-grp">
            <label htmlFor="severity" style={{ display: "flex" }}>
              Severity
              <span
                style={{
                  backgroundColor: severityStyle.background,
                  width: severityStyle.width,
                  height: 7,
                  marginLeft: 7.5,
                  borderRadius: 5,
                  alignSelf: "center",
                  transition: "all .75s",
                }}
              />
            </label>
            <select id="severity" value={input.severity} disabled>
              <option></option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
              <option value="Critical">Critical</option>
            </select>
          </div>
        </div>

        <div className="form-grp">
          <label htmlFor="attach-image">Attach Screen</label>
          <input
            type="file"
            accept="image,pdf"
            multiple
            // @ts-ignore 
            onChange={InputChange}
            id="attach-image"
          />
        </div>
        <div className="form-grp_btn">
          <button type="submit" id="custom-btn" disabled={createisLoading}>
            {createisLoading ? <SVGLoader width={"35px"} height={"35px"} color={"#fff"} /> : "Submit"}
          </button>

        </div>
      </form>
    </div>
  );
};

export default TicketForm;

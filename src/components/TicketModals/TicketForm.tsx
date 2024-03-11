import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../../shared/baseUrl";
import ToSelect from "./ToSelect";
import CcSelect from "./CcSelect";
import ReactQuillWrapper from "./ReactQuillWrapper";
// import {
//   getTicketsAction,
//   createTicketAction,
// } from "../store/actions/ticketingActions";
// import { CREATE_TICKET_RESET } from "../store/constants/ticketingConstants";
// import { getRegisteredUserAction } from "../store/actions/registeredUsersAction";
// import emailjs from "@emailjs/browser";



const TicketForm = ({ handleCloseModal, type }: any) => {

  const form: any = useRef();
  const navigate = useNavigate();

  // const userLogin = useSelector((state: any) => state.userLogin);
  // const { userInfo } = userLogin;

  // const createsTicket = useSelector((state: any) => state.createsTicket);
  // const { success, error, loading } = createsTicket;

  // const getRegisteredUsers = useSelector((state) => state.getRegisteredUsers);
  // const { data } = getRegisteredUsers;

  // useEffect(() => {
  //   if (userInfo) {
  //     dispatch(getRegisteredUserAction());
  //   }
  // }, [dispatch, navigate, userInfo]);

  const [value, setValue] = useState('');

  const [issueCategories, setIssueCategories] = useState<any>([]);
  const [severityStyle, setSeverityStyle] = useState<any>({
    background: "transparent",
    width: "0%",
  });
  // const [loading, setLoading] = useState(false)
  // const [success,setSuccess] =useState(false)
  const [isLoadingImg, setIsLoadingImg] = useState<any>(false);
  // const [error,setError]=useState(true)

  const [inputs, setInputs] = useState<any>({
    ticketType: type,
    ticketId: "",
    issueCategory: "",
    issueDescription: "",
    affectedUsers: "",
    severity: "",
    images: []
  })


  useEffect(() => {
    if (type === "INCIDENT") {
      setIssueCategories([
        "Access Creation",
        "Calling Issue",
        "Application Issue",
        "Product Issue",
        "IVR Issue",
        "Email Delivery Issue",
        "Prompt",
        "Total DOWNTIME",
        "Bad Laptop Battery",
        "Power Outage/Network",
        "Loss Of Internet",
        "VPN Not Connecting",
        "System Issue",
        "No Internet",
        "Network Issue",
        "Calls Not Recording",
        "Agents Access Deactivation",
        "Agent's Access Reactivation",
        "Laptop Not Booting",
        "Request For Calls",
        "System Issue",
        "Password Issue",
        "Inability to access .12",
        "Account reference locked out"

      ])
    }
    else if (type === "SERVICE") {
      setIssueCategories([
        "Password Issue",
        "License Issue",
        "Email Issue ",
        "Global Protect",
        "Inability To Access SIEBEL",
        "Issue  Case Management Issue",
        "AAUIActivation",
        "Call processing",
        "Flash Calls As Abandoned Calls",
        "Call processing at intervals",
        "Cracked Calls",
        "Calling Through GLO E1",
        "Call processing and Tascr error 500",
        "AURA BASE",
        "Agents Assigned On CCMA",
        "AMEYO ISSUE",
        "Inabilty To Login To CS Portal",
        "High Inactivity on NGUCC",
        "Inability to save calls on CS Portal",
        " Cases Management Issue",
        "Unable to Access CRM",
        "Fluctuating CRM Issue",
        "Inability To Login To CS Portal",
        "Flashed Calls",
        "TASCR site can't be reached",
        "Inability to sign in to LYNC",
        "FONALITY SET-UP",
        "Call Processing On TASCR",
        "Technically Unreachable calls on TASCR",
        "Office Network Downtime",
        "CRM Application is Slow/Not Saving",
      ])
    }
    else if (type === "CHANGE") {
      setIssueCategories([
        "New Prompt",
        "Modify Existing Prompt",
        "New IVR Flow ",
        "Modify Existing IVR",
        "New Report Feature",
        "Modify Existing Report"
      ])
    }
  }, [type])

  useEffect(() => {
    if (inputs.affectedUsers >= 1 && inputs.affectedUsers <= 5) {
      handleOnChange("severity", "Low");
      setSeverityStyle(() => ({
        background: "green",
        width: "25%",
      }));
    } else if (inputs.affectedUsers >= 6 && inputs.affectedUsers <= 10) {
      handleOnChange("severity", "Medium");
      setSeverityStyle(() => ({
        background: "yellow",
        width: "50%",
      }));
    } else if (inputs.affectedUsers >= 11) {
      handleOnChange("severity", "High");
      setSeverityStyle(() => ({
        background: "red",
        width: "100%",
      }));
    } else if (inputs.issueCategory === "Total DOWNTIME") {
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
  }, [inputs.affectedUsers, inputs.issueCategory]);

  const handleOnChange = (input: string, value: string) => {
    setInputs((prevState: any) => ({
      ...prevState,
      [input]: value,
    }));
  };
  const handleCreateTicket = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // dispatch(createTicketAction(inputs));
  };

  // useEffect(() => {
  //   if (success) {
  //     dispatch(getTicketsAction());
  //     handleCloseModal();
  //     toast.success("Ticket Created Succesfully");
  //     dispatch({
  //       type: CREATE_TICKET_RESET,
  //     });
  //     emailjs
  //       .sendForm(
  //         "service_3c8qetx",
  //         "template_01epnxn",
  //         form?.current,
  //         "6phhK1l5rjAVFUMio"
  //       )
  //       .then(
  //         (result) => console.log(result?.text),
  //         (error) => console.log(error?.text)
  //       );
  //   } else if (error) {
  //     toast.error(error);
  //     dispatch({
  //       type: CREATE_TICKET_RESET,
  //     });
  //   }
  // }, [success, dispatch, error, handleCloseModal]);

  const [message, setMessage] = useState<any>([]);
  const [to_name, setTo_name] = useState<any>("");
  const [from_name, setFrom_name] = useState<any>("");

  useEffect(() => {
    setTo_name("IT Support");
    // Created By Firstname: ${ userInfo.firstname }
    // setFrom_name(userInfo.firstname);
    setMessage([
      ` Ticket Type: ${inputs.ticketType}
        Issue Category: ${inputs.issueCategory}
        Issue Description: ${inputs.issueDescription}
        Affected Users: ${inputs.affectedUsers}
        severity: ${inputs.severity}
        
      `,
    ]);
  }, [
    // userInfo.firstname,
    inputs.ticketType,
    inputs.issueCategory,
    inputs.issueDescription,
    inputs.affectedUsers,
    inputs.severity,
  ]);

  const handleUploadMultiImg = async (e: { target: { files: any; }; }) => {
    const files = e.target.files;
    let formData = new FormData();

    for (const file of files) {
      formData.append("image", file);
    }

    try {
      setIsLoadingImg(true);
      const data = await axios.post(
        baseUrl + "/api/v1/imageupload/multiple",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            // Authorization: `Bearer ${userInfo?.token}`,
          },
        }
      );
      setInputs((prevState: any) => ({
        ...prevState,
        images: data.data.IMAGES,
      }));
      setIsLoadingImg(false);
    } catch (err: any) {
      setIsLoadingImg(false);
      console.log(
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message
      );
    }
  };

  return (
    <div>
      <form id="ticket-form" onSubmit={handleCreateTicket} ref={form}>
        <div className="form-grp">
          <label htmlFor="contact-details">To</label>
          <ToSelect />
        </div>
        <div className="form-grp">
          <label htmlFor="contact-details">Cc</label>
          <CcSelect />
        </div>
        <div className="form-grp">
          <label htmlFor="contact-details">Ticket Type</label>
          <input
            type="text"
            id="contact-details"
            value={inputs.ticketType}
            disabled={true}
            required
            onChange={(e) => handleOnChange("ticketType", e.target.value)}
          />
        </div>

        <div className="form-grp">
          <label htmlFor="category">Issue Category</label>
          <select
            // placeholder="subject"
            id="category"
            required
            value={inputs.issueCategory}
            onChange={(e) => handleOnChange("issueCategory", e.target.value)}>
            <option></option>
            {issueCategories.map((item: any, i: any) => (
              <option key={i} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div className="form-grp">
          <label htmlFor="description">Issue Description</label>
          {/* <textarea
            id="description"
            rows={3}
            required
            value={inputs.issueDescription}
            onChange={(e) => handleOnChange("issueDescription", e.target.value)}
          /> */}


          <ReactQuillWrapper />
        </div>
        <div className="form-grp_row">
          <div className="form-grp">
            <label htmlFor="affected">Number of Users affected</label>
            <input
              type="number"
              id="affected"
              value={inputs.affectedUsers}
              required={
                inputs.issueCategory === "Total DOWNTIME" ? false : true
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
            <select id="severity" value={inputs.severity} disabled>
              <option></option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
              <option value="Critical">Critical</option>
            </select>
          </div>
        </div>

        <div className="form-grp">
          <label htmlFor="attach-image">Attach Error Screen</label>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleUploadMultiImg}
            id="attach-image"
          />
          {isLoadingImg && <p style={{ color: "red" }}>Please wait...</p>}
        </div>
        <div className="form-grp_btn">
          <button type="submit" id="custom-btn">
            Submit
          </button>
          {/* <button type="submit" disabled={loading}>
            {loading ? "Submitting..." : "Submit"}
          </button> */}
        </div>

        {/* <div className="question-container" style={{ display: "none" }}>
          <input
            name="from_name"
            id="from_name"
            className="row-input"
            type="text"
            placeholder="Enter your name"
            defaultValue={from_name}
            onChange={(e) => setFrom_name(e.target.value)}
          />
          <input
            name="to_name"
            id="to_name"
            className="row-input"
            type="text"
            placeholder="Enter your name"
            defaultValue={to_name}
            onChange={(e) => setTo_name(e.target.value)}
          />

          <textarea
            name="message"
            id="message"
            className="row-input"
            rows={5}
            required
            defaultValue={message} />


        </div> */}
      </form>
    </div>
  );
};

export default TicketForm;

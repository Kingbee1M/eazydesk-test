import { useState, useEffect, useRef } from "react";
import moment from "moment";
import axios from "axios";
import { FaRegUserCircle, FaCamera } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";
import { baseUrl } from "../../shared/baseUrl";
import { useAppDispatch, useAppSelector } from "../../store/useStore";
import { getTicket, viewTicket } from "../../features/Ticket/ticketSlice";
import { useParams } from "react-router-dom";
import { createComment } from "../../features/Comment/commentSlice";
import { SVGLoader } from "../SVGLoader";
import { RiMailSendLine } from "react-icons/ri";
import { ToastContainer } from "react-toastify";
import TableLoader from "../TableLoader";
import { BsChatRightText } from "react-icons/bs";
import Skelenton from "../Skelenton/Skelenton";
import { customId } from "../Options";

const ProgressChat = ({ viewdata, id, input, setInputs }: any) => {

 const dispatch = useAppDispatch();
 const { data, isLoading, isSuccess, getTicketID } = useAppSelector((state: any) => state.comment)
 const { createdata, createisLoading, createisSuccess } = useAppSelector((state: any) => state.comment)




 const formData = new FormData();
 const form: any = useRef();




 const formFields = [
  { key: 'ticketId', value: id },
  { key: 'comment', value: input.comment },
  { key: 'file', value: input.images },
 ];

 formFields.forEach(field => {
  formData.append(field.key, field.value);
 });

 const [imgsLocalURL, setImgsLocalURL] = useState<any>([]);
 const [isLoadingImg, setIsLoadingImg] = useState(false);


 const handleChangeInput = (input: any, value: any) => {
  setInputs((prevState: any) => ({
   ...prevState,
   [input]: value,
  }));
 };

 const handleSubmitComment = (e: any) => {
  e.preventDefault();
  // @ts-ignore 
  dispatch(createComment(formData));
 }
 // const handleUploadMultiImg = async (e: any) => {
 //   setImgsLocalURL([]);

 //   const files = e.target.files;
 //   let formData = new FormData();

 //   for (const file of files) {
 //     formData.append("image", file);
 //     setImgsLocalURL((prevState: any) => [
 //       URL?.createObjectURL(file),
 //       ...prevState,
 //     ]);
 //   }

 //   try {
 //     setIsLoadingImg(true);
 //     const data = await axios.post(
 //       baseUrl + "/api/v1/imageupload/multiple",
 //       formData,
 //       {
 //         headers: {
 //           "Content-Type": "multipart/form-data",
 //           Authorization: `Bearer ${userInfo?.token}`,
 //         },
 //       }
 //     );
 //     setInputs((prevState) => ({
 //       ...prevState,
 //       images: data.data.IMAGES,
 //     }));
 //     setIsLoadingImg(false);
 //   } catch (err: any) {
 //     setIsLoadingImg(false);
 //     console.log(
 //       err.response && err.response.data.message
 //         ? err.response.data.message
 //         : err.message
 //     );
 //   }
 // };







 return (
  <>
   <div>
    <ToastContainer position="top-right" containerId={"custom1"} />

    <div className="img-preview">
     {imgsLocalURL?.length > 0 && isLoadingImg ? (
      <p style={{ color: "red" }}>Please wait...</p>
     ) : (
      imgsLocalURL?.map((item: any, i: any) => (
       <img key={i} src={item} alt={`PhotoIMG-${i}`} />
      ))
     )}
    </div>
    <h5 className="page-title">CHAT</h5>
    <div className="chat-container">
     {false ? <Skelenton count={5} /> : viewdata?.Comment?.length === 0 ? (
      <div className="chat-container-icons">
       <BsChatRightText size={80} color="#e5e5e5" />
      </div>
     ) : (
      viewdata?.Comment?.slice().reverse().map((item: any, i: any) => (
       <div key={i}
        className={`msg ${viewdata?.createdById === item?.createdById ? 'outgoing' : 'incoming'}`} >
        <div className="msg-icon">
         <FaRegUserCircle
          size={35}
          color="#e5e5e5" />
        </div>
        <div className="msg-content">
         <h6>
          {item?.createdBy?.firstname} {item?.createdBy?.lastname}{" "}
          <span>
           [{moment(item?.createdAt).format("D-MMM-YYYY, h:mm A")}]
          </span>
         </h6>
         <p>{item?.comment}</p>
         {item?.images?.length > 0 && (
          <div className="msg-img">
           {item?.images?.map((img: any, j: any) => (
            <img
             key={j}
             className="img"
             crossOrigin="anonymous"
             src={`${baseUrl}/${img}`}
             alt={`IMG-${j}`}
            />
           ))}
          </div>
         )}
        </div>
       </div>
      ))
     )}
    </div>
    <div className="btn-area-container">
     <form onSubmit={handleSubmitComment} className="form" ref={form}>

      <input
       id="bottom_input_container"
       required
       placeholder="Comment on this request..."
       value={input?.comment}
       onChange={(e) => handleChangeInput("comment", e.target.value)}
      />
      <button type="submit" disabled={createisLoading}>
       {createisLoading ? <SVGLoader width={"30px"} height={"30px"} color={"#fff"} /> : <RiMailSendLine size={20} color="#0240BC" />}
      </button>
     </form>
     <div className="btn-area">
      <label className="img-pckr">
       <FaCamera size={20} color="#0240BC" />
       <input
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        multiple
       // onChange={handleUploadMultiImg}
       // disabled={loading}
       />
      </label>

     </div>
    </div>
   </div>
  </>
 );
};

export default ProgressChat;

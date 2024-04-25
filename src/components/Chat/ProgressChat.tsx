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



const ProgressChat = ({ ticket, path, viewdata, id }: any) => {

  const dispatch = useAppDispatch();
  const { data, isLoading, isSuccess, getTicketID } = useAppSelector((state: any) => state.comment)
  const { createdata, createisLoading, createisSuccess, creategetTicketID } = useAppSelector((state: any) => state.comment)




  const formData = new FormData();
  const form: any = useRef();


  const [input, setInputs] = useState({
    comment: "",
    images: [],
  });

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
    setInputs((prevState) => ({
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



  // useEffect(() => {
  //   setTo_name("IT Support");
  //   setFrom_name(userInfo.firstname);
  //   setMessage([
  //     ` 
  //       Comment: ${inputs.comment}
  //       Created By Firstname: ${userInfo.firstname}
  //     `,
  //   ]);
  // }, [userInfo.firstname, inputs.comment]);

  return (
    <>
      <div>
        <form onSubmit={handleSubmitComment} className="form" ref={form}>
          <div className="btn-area-container">

            <input
              type="text"
              placeholder="Comment on this request..."
              value={input?.comment}
              onChange={(e) => handleChangeInput("comment", e.target.value)}
            />
          </div>
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
            <button type="submit" disabled={createisLoading}>
              {createisLoading ? <SVGLoader width={"30px"} height={"30px"} color={"#fff"} /> : <IoMdSend size={20} color="#0240BC" />}
            </button>
          </div>


        </form>
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
          {ticket?.Comment?.map((item: any, i: any) => (
            <div
              key={i}
              className={viewdata?._id === item?.createdById?.id
                ? "msg outgoing"
                : "msg incoming"
              }
            >
              <div className="msg-icon">
                <FaRegUserCircle size={35} color="#e5e5e5" />
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
                    {item?.images?.map((item: any, i: any) => (
                      <img
                        className="img"
                        key={i}
                        crossOrigin="anonymous"
                        src={baseUrl + "/" + item}
                        alt={`IMG-${i}`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProgressChat;

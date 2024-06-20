import { useRef, useState } from "react";
import moment from "moment";
import { FaRegUserCircle, FaCamera } from "react-icons/fa";
import { baseUrl } from "../../shared/baseUrl";
import { useAppDispatch, useAppSelector } from "../../store/useStore";
import { createComment } from "../../features/Comment/commentSlice";
import { SVGLoader } from "../SVGLoader";
import { RiMailSendLine } from "react-icons/ri";
import { ToastContainer } from "react-toastify";
import { BsChatRightText } from "react-icons/bs";
import Skelenton from "../Skelenton/Skelenton";
import { ImAttachment } from "react-icons/im";
import FileRenderer from "../FileRenderer";

const ProgressChat = ({ viewdata, id, input, setInput, loadingCount }: any) => {
  const [file, setFile] = useState<File>();

  const dispatch = useAppDispatch();
  const { isLoading, isSuccess, getTicketID } = useAppSelector((state: any) => state.comment)
  const { createdata, createisLoading, createisSuccess } = useAppSelector((state: any) => state.comment)




  const formData = new FormData();
  const form = useRef<HTMLFormElement>(null);


  // console.log('file', file)


  const formFields = [
    { key: 'ticketId', value: id },
    { key: 'comment', value: input.comment },
    { key: 'file', value: file },
  ];

  formFields.forEach(field => {
    formData.append(field.key, field.value);
  });



  const handleChangeInput = (input: any, value: any) => {
    setInput((prevState: any) => ({
      ...prevState,
      [input]: value,
    }));
  };

  const handleSubmitComment = (e: any) => {
    e.preventDefault();
    // @ts-ignore 
    dispatch(createComment(formData));
  }



  // Handle file input change
  const InputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      // const selectedFiles = Array.from(e.target.files);
      // @ts-ignore 
      setFile(e.target.files[0]);
    }
  };


  return (
    <>
      <div>
        <h5 className="page-title">Chat</h5>
        <div className="chat-container">
          {loadingCount === 1 && isLoading ? <Skelenton count={5} /> : viewdata?.Comment?.length === 0 ? (
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

                  {/* {item?.CommentFiles?.length > 0 && (
                    <div className="msg-img">
                      {item?.CommentFiles?.map((img: any, i: any) => (
                        <img
                          key={i}
                          className="img-comment"
                          crossOrigin="anonymous"
                          src={`${baseUrl}/${img?.filePath}`}
                          alt={`IMG-${i}`}
                        />
                      ))}
                    </div>
                  )} */}
                  {item?.CommentFiles?.length > 0 && (
                    <div>
                      {item?.CommentFiles?.map((file: any, i: any) => (
                        <FileRenderer key={i} file={file} />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
        {viewdata?.status === "CLOSED" ? "" : (
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
                <ImAttachment size={20} color="#0240BC" />
                <input
                  type="file"
                  style={{ display: "none" }}
                  multiple
                  onChange={InputChange}

                // onChange={handleUploadMultiImg}
                // disabled={loading}
                />
              </label>

            </div>
          </div>)}
      </div>
    </>
  );
};

export default ProgressChat;

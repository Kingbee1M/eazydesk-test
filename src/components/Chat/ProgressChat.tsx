import { useEffect, useRef, useState } from "react";
import moment from "moment";
import { FaRegUserCircle } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "../../store/useStore";
import { createComment } from "../../features/Comment/commentSlice";
import { SVGLoader } from "../SVGLoader";
import { RiMailSendLine } from "react-icons/ri";

import { BsChatRightText } from "react-icons/bs";
import Skelenton from "../Skelenton/Skelenton";
import { ImAttachment } from "react-icons/im";
import FileRenderer from "../FileRenderer";

const ProgressChat = ({ viewdata, id, input, setInput, loadingCount }: any) => {
  const [file, setFile] = useState<File[]>([]);
  const dispatch = useAppDispatch();
  const { isLoading, createisSuccess, createisLoading } = useAppSelector((state: any) => state.comment)
  const form = useRef<HTMLFormElement>(null);
  useEffect(() => {
    if (createisSuccess) {
      setFile([])
    }
  }, [createisSuccess])


  const handleChangeInput = (input: any, value: any) => {
    setInput((prevState: any) => ({
      ...prevState,
      [input]: value,
    }));
  };

  const handleSubmitComment = (e: any) => {
    e.preventDefault();
    const formData = new FormData();
    file.forEach(file => formData.append('file', file));
    formData.append('ticketId', id); // Replace 'id' with your actual ticketId value
    formData.append('comment', input.comment);
    // @ts-ignore 
    dispatch(createComment(formData));
  }



  // Handle file input change
  const InputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files); // Convert FileList to an array
      setFile(selectedFiles);
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
                <div className="img-lenght">
                  <ImAttachment size={20} color="#0240BC" />
                  {file?.length === 0 ? "" :
                    <span className="img-lenght-sup">{file?.length}</span>}
                </div>

                <input
                  accept="image,pdf"
                  style={{ display: "none" }}
                  multiple
                  onChange={InputChange}
                />
              </label>

            </div>
          </div>)}
      </div>
    </>
  );
};

export default ProgressChat;

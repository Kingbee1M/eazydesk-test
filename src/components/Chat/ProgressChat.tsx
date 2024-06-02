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

const ProgressChat = ({ viewdata, id, input, setInput }: any) => {
  const [files, setFile] = useState<any>([]);
  const dispatch = useAppDispatch();
  const { isLoading, isSuccess, getTicketID } = useAppSelector((state: any) => state.comment)
  const { createdata, createisLoading, createisSuccess } = useAppSelector((state: any) => state.comment)




  const formData = new FormData();
  const form = useRef<HTMLFormElement>(null);

  console.log('files', files)


  const formFields = [
    { key: 'ticketId', value: id },
    { key: 'comment', value: input.comment },
    { key: 'file', value: files },
  ];

  formFields.forEach(field => {
    formData.append(field.key, field.value);
  });


  // console.log('formFields', formFields)
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

  const InputChange = (e: any) => {
    // --For Multiple File Input
    let images = [];
    for (let i = 0; i < e.target.files.length; i++) {
      images.push(e.target.files[i]);
      let reader = new FileReader();
      let file = e.target.files[i];
      reader.onloadend = () => {
        setFile((preValue: any) => {
          return [
            ...preValue,
            {
              file: e.target.files[i],

            }
          ];
        })

      };
      if (e.target.files[i]) {
        reader.readAsDataURL(file);
      }
    }
  };




  return (
    <>
      <div>
        <h5 className="page-title">Chat</h5>
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
                <FaCamera size={20} color="#0240BC" />
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

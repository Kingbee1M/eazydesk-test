import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import TextField from "@material-ui/core/TextField";
import { useDispatch, useSelector } from "react-redux";
import { FaUserCircle } from "react-icons/fa";
import { BsCamera } from "react-icons/bs";
import axios from "axios";
import { baseUrl } from "../../shared/baseUrl";
import ModalHeader from "../../components/Modals/ModalHeader";
import { useAppDispatch } from "../../store/useStore";
import { edituser } from "../../features/Registration/registrationSlice";

const UserProfile = ({ userInfo, userId, lgShow, setLgShow }: any) => {
  // @ts-ignore
  //  Update Current Password State
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [activeTab, setActiveTab] = useState(0);
  const [result, setResult] = useState("Edit Profile");
  const Edit = ["Edit Profile", "Reset Password"];
  const dispatch = useAppDispatch();
  const [errorToastMsg, setErrorToastMgs] = useState(false);
  const [previewImgLoading, setPreviewImgLoading] = useState<any>(false);
  const [imgLocalURL, setImgLocalURL] = useState(null);
  const [input, setInput] = useState<any>({
    firstname: "",
    lastname: "",
    email: "",
    mobileNumber: "",
    role: "",
  });

  const showInfo = (catagory: React.SetStateAction<string>) => {
    setResult(catagory);
  };

  const passwordhandelSubmit = (e: any) => {
    e.preventDefault();
    if (newPassword !== confirmNewPassword) {
      setErrorToastMgs(true);
      setTimeout(() => {
        setErrorToastMgs(false);
      }, 5000);
    } else {
      // dispatch(updatePasswordUser(currentPassword, newPassword));
    }
  };

  useEffect(() => {
    setInput((prevState: any) => {
      return {
        ...prevState,
        firstname: userInfo?.firstname,
        lastname: userInfo?.lastname,
        email: userInfo?.email,
        mobileNumber: userInfo?.mobileNumber,
        role: userInfo?.role,
      };
    });
  }, [
    userInfo?.firstname,
    userInfo?.lastname,
    userInfo?.email,
    userInfo?.mobileNumber,
    userInfo?.role,
    setInput,
  ]);

  const handleOnChange = (input: any, value: any) => {
    setInput((prevState: any) => ({
      ...prevState,
      [input]: value,
    }));
  };

  const handleUpdateUser = (e: { preventDefault: () => void }) => {
    const value = { userId, input };
    e.preventDefault();
    // @ts-ignore
    // dispatch(edituser(value));
  };

  // const profilesubmitHandler = (e: any) => {
  //   e.preventDefault();
  //   //Create Profile Actions
  //   dispatch(
  //     updateProfile(
  //       firstname,
  //       lastname,
  //       email,
  //       phoneNumber,
  //       location,
  //       roleName,
  //       profilePic
  //     )
  //   );
  // };

  // useEffect(() => {
  //   if (success) {
  //     toast.success("Profile Updated!");
  //     dispatch(getUserProfileAction());
  //     dispatch({
  //       type: PROFILE_UPDATE_RESET,
  //     });
  //   } else if (error) {
  //     toast.error(error);
  //     dispatch({
  //       type: PROFILE_UPDATE_RESET,
  //     });
  //   } else if (successChange) {
  //     setCurrentPassword("");
  //     setNewPassword("");
  //     setConfirmNewPassword("");
  //     toast.success("Password Updated!");
  //     dispatch({
  //       type: USER_UPDATE_PASSWORD_RESET,
  //     });
  //   } else if (errorChange) {
  //     toast.error(errorChange);
  //     dispatch({
  //       type: USER_UPDATE_PASSWORD_RESET,
  //     });
  //   } else if (errorToastMsg) {
  //     toast.error("Password do not match");
  //   }
  // }, [dispatch, success, error, successChange, errorChange, errorToastMsg]);

  // const onChange = (e: any) => {
  //   const file = e.target.files[0];
  //   // @ts-ignore
  //   setImgLocalURL(URL?.createObjectURL(e.target.files[0]));
  //   const formData = new FormData();
  //   formData.append("image", file);
  //   const postImg = async () => {
  //     try {
  //       setPreviewImgLoading(true);
  //       const config = {
  //         headers: {
  //           "Content-Type": "multipart/form-data",
  //           Authorization: `Bearer ${userInfo.token}`,
  //         },
  //       };
  //       const { data } = await axios.post(
  //         baseUrl + "/api/v1/imageupload",
  //         formData,
  //         config
  //       );
  //       setProfilePic(data.IMAGE);
  //       setPreviewImgLoading(false);
  //     } catch (error: any) {
  //       console.error(error.message);
  //       setPreviewImgLoading(false);
  //     }
  //   };
  //   postImg();
  // };

  return (
    <div>
      <Modal size='lg' show={lgShow} onHide={() => setLgShow(false)}>
        <ModalHeader setShow={setLgShow} headerTitle={result} />
        <Modal.Body>
          <div className='container'>
            <div className='container-head'>
              <div className='page-btn-title'>
                {Edit.map((catagory, i) => (
                  <button
                    className={activeTab === i ? "btn-case active" : "btn-case"}
                    onClick={() => {
                      showInfo(catagory);
                      setActiveTab(i);
                    }}
                    key={i}
                  >
                    {catagory}
                  </button>
                ))}
              </div>
            </div>
            <div className='container-body'>
              <center>
                <div className='profile-picture'>
                  {!userInfo?.profilePic ? (
                    <div>
                      <FaUserCircle size={120} className='profile-notfound' />
                    </div>
                  ) : (
                    <img
                      crossOrigin='anonymous'
                      src={baseUrl + "/" + userInfo?.profilePic}
                      alt='Profile'
                      className='prifile-pics-full'
                    />
                  )}
                </div>
              </center>

              <div>
                {result === "Edit Profile" && (
                  <form action='' onSubmit={handleUpdateUser} className="profile_container">
                    <h6 className='text-center'>Edit Personal Information</h6>
                    <div className='row'>
                      <div className='col-lg-6 col-md-6 col-sm-6 col-xs-12'>
                        <input
                          className='TextField-Outline'
                          id='outlined-basic'
                          placeholder='First Name'
                          value={input?.firstname}
                          onChange={(e) =>
                            handleOnChange("firstname", e.target.value)
                          }
                        />
                      </div>
                      <div className='col-lg-6 col-md-6 col-sm-6 col-xs-12'>
                        <input
                          className='TextField-Outline'
                          id='outlined-basic'
                          placeholder='Last Name'
                          value={input?.lastname}
                          onChange={(e) =>
                            handleOnChange("lastname", e.target.value)
                          }
                        />
                      </div>
                    </div>

                    <div className='row'>
                      <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                        <input
                          className='TextField-Outline'
                          id='outlined-basic'
                          placeholder='Email Address'
                          readOnly
                          value={input?.email}
                          onChange={(e) =>
                            handleOnChange("email", e.target.value)
                          }
                        />
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col-lg-6 col-md-6 col-sm-6 col-xs-12'>
                        <input
                          className='TextField-Outline'
                          id='outlined-basic'
                          placeholder='Role Name'
                          readOnly
                          value={input?.role}
                          onChange={(e) =>
                            handleOnChange("role", e.target.value)
                          }
                        />
                      </div>
                      <div className='col-lg-6 col-md-6 col-sm-6 col-xs-12'>
                        <input
                          className='TextField-Outline'
                          id='outlined-basic'
                          placeholder='Contact No'
                          value={input?.mobileNumber}
                          onChange={(e) =>
                            handleOnChange("mobileNumber", e.target.value)
                          }
                        />
                      </div>
                    </div>

                    <button
                      className='btn_long'
                      type='submit'
                      value='Submit'
                      disabled={false && true}
                    >
                      {false ? "UPDATING..." : "UPDATE"}
                    </button>
                  </form>
                )}
                {result === "Reset Password" && (
                  <form onSubmit={passwordhandelSubmit} >
                    <h6 className='text-center'>Reset Password</h6>
                    <input
                      className='TextField-Outline'
                      id='outlined-basic'
                      placeholder='Previous Password'
                      required
                      value={currentPassword}
                      onChange={(e) => {
                        setCurrentPassword(e.target.value);
                      }}
                    />

                    <input
                      id='outlined-basic'
                      placeholder='New password'
                      required
                      value={newPassword}
                      onChange={(e) => {
                        setNewPassword(e.target.value);
                      }}
                    />
                    <input
                      id='outlined-basic'
                      placeholder='Confirm New Password'
                      required
                      value={confirmNewPassword}
                      onChange={(e) => {
                        setConfirmNewPassword(e.target.value);
                      }}
                    />

                    <button
                      className='btn_long'
                      type='submit'
                      value='Submit'
                      disabled={false}
                    >
                      {false ? "UPDATING..." : "UPDATE"}
                    </button>
                  </form>
                )}



              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default UserProfile;

import { useEffect, useState } from "react";
import pro_img from "../assets/img/Rectangle.png";
import { toast, ToastContainer } from "react-toastify";
import { Spinner } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../store/useStore";
import { customId } from "./Options";
import { editProfile, reset } from "../features/Registration/registrationSlice";
import { HiUserCircle } from "react-icons/hi";

const GeneralInformation = () => {
  const dispatch = useAppDispatch();
  const { editProfileisSuccess, editProfileisLoading } = useAppSelector(
    (state: any) => state.reg
  );
  // @ts-ignore
  const userInfo = JSON.parse(localStorage.getItem("service_desk"));
  const [isReadOnly, setIsReadOnly] = useState(true);

  const toggleReadOnly = () => {
    setIsReadOnly(!isReadOnly);
  };

  const [input, setInput] = useState<any>({
    firstname: "",
    lastname: "",
    phonenumber: "",
    emailaddress: "",
    role: "",
  });

  useEffect(() => {
    setInput((prevState: any) => {
      return {
        ...prevState,
        firstname: userInfo?.firstname,
        lastname: userInfo?.lastname,
        emailaddress: userInfo?.email,
        phonenumber: userInfo?.mobileNumber,
        role: userInfo?.role,
      };
    });
  }, [
    userInfo?.lastname,
    userInfo?.email,
    userInfo?.firstname,
    userInfo?.mobileNumber,
    userInfo?.role,
    setInput,
  ]);

  const handleChange = (input: any, value: any) => {
    setInput((prevState: any) => ({
      ...prevState,
      [input]: value,
    }));
  };

  const handleUpdateUser = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsReadOnly(!isReadOnly);
    // @ts-ignore
    dispatch(editProfile(input));
  };
  useEffect(() => {
    if (editProfileisSuccess) {
      // setIsReadOnly(true);
      toast.success("Profile Updated!", { toastId: customId });
      // setShowEdit(false);
    }
    setTimeout(() => {
      dispatch(reset());
      // setIsReadOnly(false);
    }, 1000);
  }, [editProfileisSuccess, setIsReadOnly, isReadOnly, dispatch]);

  return (
    <div className='settings_main_after'>
      <ToastContainer position='top-right' containerId={"custom1"} />
      <div className='settings_main_after_sup'>
        <h3>General Information</h3>
        <p>Manage your account settings</p>
      </div>
      <h5 className='settings_main_profile_title'>Profile</h5>

      {/* settings  profile */}
      <div className='settings_profile_title_container'>
        {/* <div className='settings_profile_title'> */}

        <span className='  profile_img'>
          <HiUserCircle size={40} />
        </span>
        {/* </div> */}
        <div className='settings_profile_title_text'>
          <h6>
            {userInfo?.firstname} {userInfo?.lastname}
          </h6>
          <p>{input?.role}</p>
        </div>
        {isReadOnly && (
          <button onClick={toggleReadOnly} className='btn'>
            Edit
          </button>
        )}
      </div>

      {/* form */}
      <div className='container_reg  settings_container_form'>
        <form onSubmit={handleUpdateUser}>
          <div className='user__details'>
            <div className='input__box'>
              <span className='details'>Firstname</span>
              <input
                type='text'
                placeholder='E.g: John '
                value={input?.firstname}
                onChange={(e) => handleChange("firstname", e.target.value)}
                readOnly={isReadOnly}
                required
              />
            </div>
            <div className='input__box'>
              <span className='details'>Lastname</span>
              <input
                type='text'
                placeholder='E.g:  Smith'
                value={input?.lastname}
                onChange={(e) => handleChange("lastname", e.target.value)}
                readOnly={isReadOnly}
                required
              />
            </div>
            <div className='input__box'>
              <span className='details'>Email address</span>
              <input
                type='text'
                placeholder='xyz@gmail.com'
                value={input?.emailaddress}
                onChange={(e) => handleChange("emailaddress", e.target.value)}
                readOnly={isReadOnly}
                required
              />
            </div>
            <div className='input__box'>
              <span className='details'>Phone Number</span>
              <input
                type='phonenumber'
                placeholder='123-098-345-09'
                value={input?.phonenumber}
                onChange={(e) => handleChange("phonenumber", e.target.value)}
                readOnly={isReadOnly}
              />
            </div>
            <div className='input__box'>
              <span className='details'>Role</span>
              <input
                type='text'
                placeholder='012-345-6789'
                value={input?.role}
                onChange={(e) => handleChange("role", e.target.value)}
                required
                readOnly
              />
            </div>
          </div>
          {!isReadOnly && (
            <button className='btn'>
              {editProfileisLoading ? <Spinner size='sm' /> : "Update"}
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default GeneralInformation;

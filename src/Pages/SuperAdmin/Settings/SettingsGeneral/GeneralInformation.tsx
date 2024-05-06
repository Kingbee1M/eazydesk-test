import { useEffect, useState } from "react";
import pro_img from "../../../../assets/img/Rectangle.png";

const GeneralInformation = () => {
  // @ts-ignore
  const userInfo = JSON.parse(localStorage.getItem("service_desk"));
  const [input, setInput] = useState({
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

  return (
    <div className='settings_main_after'>
      <div className='settings_main_after_sup'>
        <h3>General Information</h3>
        <p>Manage your account settings</p>
      </div>
      <h5 className='settings_main_profile_title'>Profile Picture</h5>

      {/* settings  profile */}
      <div className='settings_profile_title_container'>
        <div className='settings_profile_title'>
          <img
            src={pro_img}
            alt='logo'
            crossOrigin='anonymous'
            className='profile_img'
          />
        </div>
        <div className='settings_profile_title_text'>
          <h6>
            {input?.firstname} {input?.lastname}
          </h6>
          <p>{input?.role}</p>
        </div>
        <div className='settings_container_title_btn'>
          <button className='btn'>Change</button>
          {/* <button className='btn_outline'>Delete</button> */}
        </div>
      </div>

      {/* form */}
      <div className='container_reg  settings_container_form'>
        <form>
          <div className='user__details'>
            <div className='input__box'>
              <span className='details'>Firstname</span>
              <input
                type='text'
                placeholder='E.g: John '
                value={input?.firstname}
                onChange={(e) => handleChange("firstname", e.target.value)}
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
                required
                readOnly
              />
            </div>
            <div className='input__box'>
              <span className='details'>Phone Number</span>
              <input
                type='phonenumber'
                placeholder='123-098-345-09'
                value={input?.phonenumber}
                onChange={(e) => handleChange("phonenumber", e.target.value)}
                required
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
        </form>
      </div>
    </div>
  );
};


export default GeneralInformation; 

import { useState } from "react";

const Security = () => {
  const [logInCheck, setLogInCheck] = useState(false);
  const [checkEmailSetUp, setCheckEmailSetUp] = useState(false);
  const [checkMainSms, setcheckMainSms] = useState(false);

  const handleLoginToggle = () => {
    setLogInCheck((prevState) => !prevState);
  };
  const handleEmailSetUpToggle = () => {
    setCheckEmailSetUp((prevState) => !prevState);
  };
  const handleMainSmsSetUpToggle = () => {
    setcheckMainSms((prevState) => !prevState);
  };
  return (
    <div className='settings_main_after'>
      <div className='settings_main_after_sup'>
        <h3>Security</h3>
        <p>Lorem ipsum dolor sit amet consectetur</p>
      </div>

      <div className='settings_main_password_management'></div>
      <h4 className='settings_main_password_management'>Password Management</h4>

      <div className='settings_main_login_verification'>
        <div className='settings_main_login_verification-text'>
          <h5>Login Two-Step Verification</h5>
          <p>Lorem ipsum dolor sit amet consectetur</p>
        </div>
        <div>
          <input
            type='checkbox'
            id='settings_main_login_verification-toggle'
            className='settings_main_login_verification-checkbox'
            checked={logInCheck}
            onChange={handleLoginToggle}
          />
          <label
            htmlFor='settings_main_login_verification-toggle'
            className='settings_main_login_verification-toggle-btn'
          ></label>
        </div>
      </div>

      <div className='settings_main_email_setup'>
        <div className='settings_main_email_setup-text'>
          <h5>Email Setup</h5>
          <p>Lorem ipsum dolor sit amet consectetur</p>
        </div>
        <div>
          <input
            type='checkbox'
            id='settings_main_email_setup-toggle'
            className='settings_main_email_setup-checkbox'
            checked={checkEmailSetUp}
            onChange={handleEmailSetUpToggle}
          />
          <label
            htmlFor='settings_main_email_setup-toggle'
            className='settings_main_email_setup-toggle-btn'
          ></label>
        </div>
      </div>

      <div className='settings_main_sms_setup'>
        <div className='settings_main_sms_setup-text'>
          <h5>SMS Setup</h5>
          <p>Lorem ipsum dolor sit amet consectetur</p>
        </div>
        <div>
          <input
            type='checkbox'
            id='settings_main_sms_setup-toggle'
            className='settings_main_sms_setup-checkbox'
            checked={checkMainSms}
            onChange={handleMainSmsSetUpToggle}
          />
          <label
            htmlFor='settings_main_sms_setup-toggle'
            className='settings_main_sms_setup-toggle-btn'
          ></label>
        </div>
      </div>

      <div className='settings_main_password_security'></div>
      <h5 className='settings_main_password_security'>Password Security</h5>

      <div className='settings_main_password_change'>
        <div className='settings_main_password_change-text'>
          <h6>Password Change</h6>
          <p>Lorem ipsum dolor sit amet consectetur</p>
        </div>

        <div>
          <button className='settings_main_password_change-button'>
            change password
          </button>
        </div>
      </div>
    </div>
  );
};

export default Security;

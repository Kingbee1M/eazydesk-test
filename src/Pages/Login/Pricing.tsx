import Carousels from "../../components/Carousels";
import { ToastContainer } from "react-toastify";
import LoginHeader from "../../components/LoginHeader";

const Pricing = () => {
  return (
    <div id='login-wrapper'>
      <Carousels />
      <div className='login-container'>
        <ToastContainer position='top-right' containerId={"custom1"} />
        <div className='login-content-layout'>
          {/* Login Header */}
          <LoginHeader />
          <div className='login-content-grid'>
            <div className='logo-section'>
              <div className='copyright_login_container'>
                <div className='settings_main_after_login'>
                  <div>
                    <div className='settings_main_after_sup'></div>
                    <section className='pricing-plans'>
                      <div className='pricing-card standard'>
                        <div className='heading'>
                          <h4>STANDARD</h4>
                          <p>for medium-sized businesses</p>
                        </div>
                        <p className='price'>Custom</p>
                        <ul className='features'>
                          <li>
                            <i className='fa-solid fa-check'></i>
                            <strong>1</strong> Admin
                          </li>
                          <li>
                            <i className='fa-solid fa-check'></i>
                            <strong>Unlimited </strong> IT Support
                          </li>
                          <li>
                            <i className='fa-solid fa-check'></i>
                            <strong>Unlimited</strong> Team Lead
                          </li>
                          <li>
                            <i className='fa-solid fa-check'></i>
                            <strong>Unlimited</strong> Supervisor
                          </li>
                          <li>
                            <i className='fa-solid fa-check'></i>
                            <strong>24/7</strong> support
                          </li>
                        </ul>
                        <button className='cta-btn'>SELECT</button>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;

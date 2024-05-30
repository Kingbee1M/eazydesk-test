import { useState } from "react";
import "../../css/Support.css";
import { Accordion } from "react-bootstrap";

const Support = () => {
  const [activeKey, setActiveKey] = useState<any>(null);

  const handleAccordionClick = (eventKey: any) => {
    if (activeKey === eventKey) {
      setActiveKey(null);
    } else {
      setActiveKey(eventKey);
    }
  };
  return (
    <div className='support-page'>
      <div className='support-page-top'>
        <div className="support-page_center">
          <h1>Frequenty Asked Questions</h1>
        </div>
      </div>


      <div className='half-background-container'>
        <div className='half-background'>
          <Accordion activeKey={activeKey} onSelect={handleAccordionClick}  >
            <div>
              <Accordion.Item eventKey='0'>
                <div id='accordion-body-form'>
                  <Accordion.Header>
                    <h4>
                      How do I sign up on Eazy desk
                    </h4>
                  </Accordion.Header>
                  <Accordion.Body >
                      <ul>
                       <li>Once on the sign-in page, take a look at the top right corner of your screen and click on Sign up</li>
                       <li>Next fill out the necessary details which are; name of the company, name of the individual, E-mail etc </li>
                      </ul>
                  </Accordion.Body>
                </div>
              </Accordion.Item>
              <Accordion.Item eventKey='1'>
                <div id='accordion-body-form'>
                  <Accordion.Header>
                    <h4>
                      I forgot my password  
                    </h4>
                  </Accordion.Header>
                  <Accordion.Body>
                      <ul>
                        <li>Once you are on the Sign-in page you will be able to see a "forgot password?" phrase below the sign-in button</li>
                        <li>Go ahead and click on it, after doing so you will be redirected to a different page</li>
                        <li>On that page you will be required to enter your email and then submit.
                            After this a reset password link will be sent to your email</li>
                      </ul>
                  </Accordion.Body>
                </div>
              </Accordion.Item>
              <Accordion.Item eventKey='2'>
                <div id='accordion-body-form'>
                  <Accordion.Header>
                    <h4>
                      Registering various users in a company
                    </h4>
                  </Accordion.Header>
                  <Accordion.Body>
                    <ul>
                      <li>Once you sign up, you are automatically an Admin and that gives you the ability to create
                          users under a company.</li>
                      <li>There are various roles that need to be assigned to any user created such as; IT support, Team Lead etc</li>
                      <li>Once you assign a role to a user and fill in the necessary details, you can go ahead and submit the registration</li>
                    </ul>  
                  </Accordion.Body>
                </div>
              </Accordion.Item>
              <Accordion.Item eventKey='3'>
                <div id='accordion-body-form'>
                  <Accordion.Header>
                    <h4>
                      Create a ticket
                    </h4>
                  </Accordion.Header>
                  <Accordion.Body>
                      <ul>
                        <li>Only the Team lead of a company is allowed to create a ticket</li>
                      </ul>
                  </Accordion.Body>
                </div>
              </Accordion.Item>
              <Accordion.Item eventKey='4'>
                <div id='accordion-body-form'>
                  <Accordion.Header>
                    <h4>
                      How to create a ticket
                    </h4>
                  </Accordion.Header>
                  <Accordion.Body>
                      <ul>
                       <li>There are different types of tickets that can be created such as; incident, service and change ticket</li> 
                       <li>Once the Team lead of the company signs-in on the platform, he/she will be able to raise the type of ticket needed</li>
                      </ul>
                  </Accordion.Body>
                </div>
              </Accordion.Item>
              <Accordion.Item eventKey='5'>
                <div id='accordion-body-form'>
                  <Accordion.Header>
                    <h4>
                      How to assign a ticket
                    </h4>
                  </Accordion.Header>
                  <Accordion.Body>
                      <ul>
                       <li>Once the team lead of a company raises a ticket no matter the type, an Admin or IT support user would be able to assign the ticket raised</li>
                       <li>Once the ticket has been assigned, the users with the authorization can decide to leave comments and also update the status of the ticket</li>
                      </ul>
                  </Accordion.Body>
                </div>
              </Accordion.Item>
              <Accordion.Item eventKey='6'>
                <div id='accordion-body-form'>
                  <Accordion.Header>
                    <h4>
                      How to view all tickets created and assigned
                    </h4>
                  </Accordion.Header>
                  <Accordion.Body>
                      <ul>
                       <li>Only an Admin and IT support user has the authorization to view the tickets that have been created and assigned</li>
                       <li>Once any of the users sign-in on the platform, a list of all the tickets will be located on the left side of the screen</li>
                      </ul>
                  </Accordion.Body>
                </div>
                </Accordion.Item>
            </div>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Support;

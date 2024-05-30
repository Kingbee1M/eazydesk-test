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
                       <li>Once on the sign-in page, take a look at the top right corner of your screen and click on Sign up.</li>
                       <li>Next fill out the necessary details which are; name of the company, name of the individual, E-mail etc.</li>
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
                        <li>Once you are on the Sign-in page you will be able to see a "forgot password?" phrase below the sign-in button.</li>
                        <li>Go ahead and click on it, after doing so you will be redirected to a different page.</li>
                        <li>On that page you will be required to enter your email and then submit the request,
                            after this a reset password link will be sent to your email.</li>
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
                      <li>Once you sign up, you are automatically an Admin and that gives you the authorization to be able to create
                          users under a company.</li>
                      <li>There are various roles that need to be assigned to any new user being created under a company such as; IT support, Team Lead etc.</li>
                      <li>When signed-in as an Admin, take a look at the left side of your screen on the sidebar, among the list of options there you will see the option of 'Register' click on it and follow the due process.</li>
                      <li>Once you fill in the necessary details and assign the specific role to the user being created you can go ahead and submit the registration.</li>
                      <li>Also, you can edit any of the users being created incase changes need to be made.</li>
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
                       <li>There are various types of tickets that can be created such as; incident, service and change ticket.</li> 
                       <li>Once the Team lead of the company signs-in on the platform, he/she will be able to raise the type of ticket intended.</li>
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
                       <li>Once the team lead of a company raises a ticket, a notification will be sent to the Admin or IT Support official.</li>
                       <li>Only an Admin or IT support user would be able to view and assign the ticket raised.</li>
                       <li>After the ticket has been raised, either of the users should sign-in then take a look at the sidebar at the left part of their screen in which among the options there
                        will be an option titled "All Tickets".</li>
                       <li>Click on it, after that a list of the various types of tickets will come out, then you go ahead to choose the type of ticket that was created.</li>
                       <li>After selecting the ticket, an Assign option is located within the section which you will then go ahead and click on in order to assign the ticket to the desired user.</li>
                       <li>Once the ticket has been assigned, the users with authorization can decide to leave comments, attach files and also update the status of the ticket.</li>
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
                       <li>Only an Admin or IT support user has the authorization to view the tickets that have been created and assigned.</li>
                       <li>Once any of these users sign-in on the platform, a list of all the tickets will be located by the sidebar on the left side of your screen.</li>
                       <li>You can then go ahead to select the ticket you wish to view.</li>
                      </ul>
                  </Accordion.Body>
                </div>
                </Accordion.Item>
               <Accordion.Item eventKey='7'>
                <div id='accordion-body-form'>
                  <Accordion.Header>
                    <h4>
                      Update my profile
                    </h4>
                  </Accordion.Header>
                  <Accordion.Body>
                      <ul>
                       <li>When you are signed-in, take a look at the sidebar at the left part of your screen.</li>
                       <li>Click on the settings option.</li>
                       <li>After the list of options come out, go ahead and click on Personal Information and make the changes required then submit.</li>
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

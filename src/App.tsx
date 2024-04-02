import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminDashboard from './Pages/Admin/Dashboard/AdminDashboard';
import OpenTicket from "./Pages/Admin/Ticket/OpenTicket";
import TicketProgress from "./Pages/Admin/Ticket/TicketProgress";
import ClosedTicket from "./Pages/Admin/Ticket/ClosedTicket";
import Settings from "./Pages/Admin/Settings/Settings";
import TicketReport from "./Pages/Admin/Report/TicketReport";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Admin/ Register/ Register";
import Vendors from "./Pages/Admin/Vendors/Vendors";
import VendorsMembers from "./Pages/Admin/Vendors/VendorsMembers";
import IncidentRequest from "./Pages/Admin/Ticket/IncidentRequest";
import ServiceRequest from "./Pages/Admin/Ticket/ServiceRequest";
import ChangeRequest from "./Pages/Admin/Ticket/ChangeRequest";
import ITDashboard from "./Pages/IT/Dashboard/ITDashboard";
import ITOpenTicket from "./Pages/IT/Ticket/ITOpenTicket";
import ITTicketProgress from "./Pages/IT/Ticket/ITTicketProgress";
import ITClosedTicket from "./Pages/IT/Ticket/ITClosedTicket";
import ITIncidentRequest from "./Pages/IT/Ticket/ITIncidentRequest";
import ITChangeRequest from "./Pages/IT/Ticket/ITChangeRequest";
import ITServiceRequest from "./Pages/IT/Ticket/ITServiceRequest";
import ITSettings from "./Pages/IT/Settings/ITSettings";
import SupervisorDashboard from "./Pages/Supervisor/Dashboard/SupervisorDashboard";
import LeadsDashboard from "./Pages/Leads/LeadsDashboard";
import LeadsIncidentRequest from "./Pages/Leads/LeadsIncidentRequest";
import LeadsServiceRequest from "./Pages/Leads/LeadsServiceRequest";
import LeadsChangeRequest from "./Pages/Leads/LeadsChangeRequest";
import Chat from "./components/Chat/Chat";
import SignUp from "./Pages/Login/SignUp";
import Pricing from "./Pages/Login/Pricing";
import Help from "./Pages/Login/Help";



function App() {



  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/help" element={<Help />} />
        <Route path="/admindashboard" element={<AdminDashboard />} />
        <Route path="/openticket" element={<OpenTicket />} />
        <Route path="/ticketprogress" element={<TicketProgress />} />
        <Route path="/closedticket" element={<ClosedTicket />} />
        <Route path="/incidentrequest" element={<IncidentRequest />} />
        <Route path="/servicerequest" element={<ServiceRequest />} />
        <Route path="/changerequest" element={<ChangeRequest />} />
        <Route path="/vendors" element={<Vendors />} />
        <Route path="/vendorsmembers" element={<VendorsMembers />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/report" element={<TicketReport />} />
        <Route path="/register" element={<Register />} />
        <Route path="/ticket-progress/:id" element={<Chat />} />
        {/* IT Screens */}
        <Route path="/itdashboard" element={<ITDashboard />} />
        <Route path="/itopenticket" element={<ITOpenTicket />} />
        <Route path="/itticketprogress" element={<ITTicketProgress />} />
        <Route path="/itclosedticket" element={<ITClosedTicket />} />
        <Route path="/itincidentrequest" element={<ITIncidentRequest />} />
        <Route path="/itservicerequest" element={<ITServiceRequest />} />
        <Route path="/itchangerequest" element={<ITChangeRequest />} />
        <Route path="/itsettings" element={<ITSettings />} />
        {/* IT Screens */}
        <Route path="/supervisordashboard" element={<SupervisorDashboard />} />
        <Route path="/itopenticket" element={<ITOpenTicket />} />
        <Route path="/itticketprogress" element={<ITTicketProgress />} />
        <Route path="/itclosedticket" element={<ITClosedTicket />} />
        <Route path="/itincidentrequest" element={<ITIncidentRequest />} />
        <Route path="/itservicerequest" element={<ITServiceRequest />} />
        <Route path="/itchangerequest" element={<ITChangeRequest />} />
        <Route path="/itsettings" element={<ITSettings />} />
        {/* Leads Screen */}
        <Route path="/leadsdashboard" element={<LeadsDashboard />} />
        <Route path="/incident-request" element={<LeadsIncidentRequest />} />
        <Route path="/service-request" element={<LeadsServiceRequest />} />
        <Route path="/change-request" element={<LeadsChangeRequest />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
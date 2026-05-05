import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminDashboard from './Pages/Admin/Dashboard/AdminDashboard';
import OpenTicket from "./Pages/Admin/Ticket/OpenTicket";
import ClosedTicket from "./Pages/Admin/Ticket/ClosedTicket";
import Settings from "./Pages/Admin/Settings/Settings";
import TicketReport from "./Pages/Admin/Report/TicketReport";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Admin/ Register/ Register";
import Company from "./Pages/Admin/Company/Company";
import CompanyMembers from "./Pages/Admin/Company/CompanysMembers";
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
import SignUp from "./Pages/Login/SignUp";
import Pricing from "./Pages/Login/Pricing";
import Help from "./Pages/Login/Help";
import SuccessPage from "./components/SuccessPage/SuccessPage";
import VerifyEmail from "./Pages/Login/VerifyEmail";
import DashboardHUB from "./Pages/DashboardHub/DashboardHub";
import ForgotPassword from "./Pages/Login/ForgotPassword";
import ResetPassword from "./Pages/Login/ResetPassword";
import TicketProgress from "./components/Chat/TicketProgress";
import InProgress from "./Pages/Admin/Ticket/InProgress";
import Support from "./Pages/Support/Support";
import SuperDashboard from "./Pages/SuperAdmin/Dashboard/SuperDashboard";
import SuperCompany from "./Pages/SuperAdmin/Company/SuperCompany";
import SuperCompanysMembers from "./Pages/SuperAdmin/Company/SuperCompanysMembers";
import SuperRegister from "./Pages/SuperAdmin/ Register/SuperRegister";
import Subscription from "./Pages/SuperAdmin/Subscription/Subscription";
import SuperTicketReport from "./Pages/SuperAdmin/Report/SuperTicketReport";
import SuperOpenTicket from "./Pages/SuperAdmin/Ticket/SuperOpenTicket";
import SuperClosedTicket from "./Pages/SuperAdmin/Ticket/SuperClosedTicket";
import SuperIncidentRequest from "./Pages/SuperAdmin/Ticket/SuperIncidentRequest";
import SuperServiceRequest from "./Pages/SuperAdmin/Ticket/SuperServiceRequest";
import SuperChangeRequest from "./Pages/SuperAdmin/Ticket/SuperChangeRequest";
import SuperInProgress from "./Pages/SuperAdmin/Ticket/SuperInProgress";
import SuperSettings from "./Pages/SuperAdmin/Settings/SuperSettings";
import PageNotFound from "./Pages/Login/PageNotFound";
import TicketCategoryView from "./components/NewUI/TicketCategoryView";
import AllTickets from "./components/NewUI/AllTickets";

function App() {



  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/help" element={<Help />} />
        <Route path="/support" element={<Support />} />
        <Route path="/successpage/:email" element={<SuccessPage />} />
        <Route path="/verifyemail/:id/:token" element={<VerifyEmail />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/passwordreset/:id" element={<ResetPassword />} />
        <Route path="/ticket-progress/:id" element={<TicketProgress />} />
        <Route path="/dashboard" element={<DashboardHUB />} />


        <Route path="/admindashboard" element={<AdminDashboard />} />
        <Route path="/openticket" element={<OpenTicket />} />
        <Route path="/closedticket" element={<ClosedTicket />} />
        <Route path="/incidentrequest" element={<IncidentRequest />} />
        <Route path="/servicerequest" element={<ServiceRequest />} />
        <Route path="/changerequest" element={<ChangeRequest />} />
        <Route path="/ticketprogress" element={<InProgress />} />
        <Route path="/company" element={<Company />} />
        <Route path="/companymembers/:id" element={<CompanyMembers />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/report" element={<TicketReport />} />
        <Route path="/register" element={<Register />} />


        <Route path="/superopenticket" element={<SuperOpenTicket />} />
        <Route path="/superclosedticket" element={<SuperClosedTicket />} />
        <Route path="/superincidentrequest" element={<SuperIncidentRequest />} />
        <Route path="/superservicerequest" element={<SuperServiceRequest />} />
        <Route path="/superchangerequest" element={<SuperChangeRequest />} />
        <Route path="/superticketprogress" element={<SuperInProgress />} />
        <Route path="/superdashboard" element={<SuperDashboard />} />
        <Route path="/supercompany" element={<SuperCompany />} />
        <Route path="/supercompanymembers/:id" element={<SuperCompanysMembers />} />
        <Route path="/superregister" element={<SuperRegister />} />
        <Route path="/supersubscription" element={<Subscription />} />
        <Route path="/superticketreport" element={<SuperTicketReport />} />
        <Route path="/supersettings" element={<SuperSettings />} />


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
        <Route path="/supervisorsettings" element={<ITSettings />} />
        <Route path="/supervisordashboard" element={<SupervisorDashboard />} />


        {/* Leads Screen */}
        <Route path="/leadsdashboard" element={<LeadsDashboard />} />
        <Route path="/incident-request" element={<LeadsIncidentRequest />} />
        <Route path="/service-request" element={<LeadsServiceRequest />} />
        <Route path="/change-request" element={<LeadsChangeRequest />} />
        <Route path="*" element={<PageNotFound />} />

        {/* New screens */}


        {/* Leads Screen */}
        <Route 
          path="/leadsdashboard" 
          element={<LeadsDashboard />} // The layout stays mounted for ALL sub-routes
        >
          {/* 
            We don't need an 'index' route here because your LeadsDashboard 
            component already handles the default view with the {isDashboardHome} check! 
          */}
          <Route path="all-tickets" element={<AllTickets />} />
          <Route path="incident" element={<TicketCategoryView type="Incident" />} />
          <Route path="service" element={<TicketCategoryView type="Service" />} />
          <Route path="change" element={<TicketCategoryView type="Change" />} />
        </Route>

        {/* Do the same for Admin if you want /admindashboard/incident to work */}
        <Route path="/admindashboard" element={<AdminDashboard />}>
  {/* No 'index' route needed because AdminDashboard handles the home view via {isDashboardHome} */}
  <Route path="all-tickets" element={<AllTickets />} />
  <Route path="incident" element={<TicketCategoryView type="Incident" />} />
  <Route path="service" element={<TicketCategoryView type="Service" />} />
  <Route path="change" element={<TicketCategoryView type="Change" />} />
</Route>

{/* 3. IT - Fixed */}
<Route path="/itdashboard" element={<ITDashboard />}>
  <Route path="all-tickets" element={<AllTickets />} />
  <Route path="incident" element={<TicketCategoryView type="Incident" />} />
  <Route path="service" element={<TicketCategoryView type="Service" />} />
  <Route path="change" element={<TicketCategoryView type="Change" />} />
</Route>


      </Routes>
    </BrowserRouter>
  );
}

export default App;
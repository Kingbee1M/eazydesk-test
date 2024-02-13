import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminDashboard from './Pages/Dashboard/AdminDashboard';
import OpenTicket from "./Pages/Ticket/OpenTicket";
import TicketProgress from "./Pages/Ticket/TicketProgress";
import ClosedTicket from "./Pages/Ticket/ClosedTicket";
import Customers from "./Pages/Customers/Customers";
import Settings from "./Pages/Settings/Settings";
import TicketReport from "./Pages/Report/TicketReport";
import Login from "./Pages/Login/Login";








function App() {



  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Dashboard  */}
          <Route path="/login" element={<Login />} />
          {/* Dashboard  */}
          <Route path="/admindashboard" element={<AdminDashboard />} />
          {/* Ticket  */}
          <Route path="/openticket" element={<OpenTicket />} />
          <Route path="/ticketprogress" element={<TicketProgress />} />
          <Route path="/closedticket" element={<ClosedTicket />} />
          {/* Customers */}
          <Route path="/customers" element={<Customers />} />
          {/* Settings */}
          <Route path="/settings" element={<Settings />} />
          {/* Report */}
          <Route path="/report" element={<TicketReport />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
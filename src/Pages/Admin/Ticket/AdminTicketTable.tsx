import { useEffect, useState } from "react";
import moment from "moment";
import { OverlayTrigger, Image, Tooltip, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { baseUrl } from "../../../shared/baseUrl";
import ViewTicketDetailsModal from "../../../components/Modals/ViewTicketDetailsModal";
import { customId, NoRecordFound, TableFetch } from "../../../components/Options";
import AssignTask from "../../../components/Modals/AssignTask";
import { admingetTicket } from "../../../features/Ticket/ticketSlice";
import { useAppDispatch, useAppSelector } from "../../../store/useStore";
import { toast } from "react-toastify";
import TicketStatusCell from "./TicketStatusCell";

const AdminTicketTable = ({
 switchs,
 data,
 Requester,
 isLoading
}: any) => {





 return (
  <div id="table-container">
   <div className="table-responsive-vertical ">
    <div className="table-container">
     <table id="table" className={switchs ? "table" : " table-hover table-mc-light-blue"}>
      <thead>
       <tr>
        <th>Reference</th>
        <th>Ticket Type</th>
        {/* <th>Location</th> */}
        <th>Severity</th>
        {/* <th>Issue Category</th> */}
        <th>Issue Description</th>
        <th>Affected Users</th>
        {/* <th>Requester</th> */}
        <th>Time Stamp</th>
        <th>Assign To</th>
        <th>
         {data?.status === "PENDING"
          ? ""
          : "Ticket Status"}
        </th>
       </tr>
      </thead>
      <tbody>
       {isLoading ? (
        <TableFetch colSpan={11} />
       ) : data?.length === 0 || data?.length === undefined ? (
        <NoRecordFound
         colSpan={11}
         children={"No Tickets record found!"}
        />
       ) : (
        data?.map((user: any) => (
         <tr key={user?._id}>
          <td className="Reference" data-title="Reference">
           {user?.ticketType === "INCIDENT REQUEST"
            ? "INC - " + user?.ticketId
            : user?.ticketType === "SERVICE REQUEST"
             ? "SRV - " + user?.ticketId
             : "CHG - " + user?.ticketId}
          </td>
          <td data-title="ticket type">{user?.ticketType}</td>
          {/* <td data-title="ticket type">{user?.location}</td> */}
          <td data-title="severity">
           {user?.severity === "High" ? (
            <button className="severity-high">
             {user?.severity}
            </button>
           ) : user?.severity === "Medium" ? (
            <button className="severity-medium">
             {user?.severity}
            </button>
           ) : user?.severity === "Critical" ? (
            <button className="severity-Critical">
             {user?.severity}
            </button>
           ) : user?.severity === "Low" ? (
            <button className="severity-low">
             {user?.severity}
            </button>
           ) : (
            <button className="severity-low">Low</button>
           )}
          </td>
          {/* <td data-title="issue">{user?.issueCategory}</td> */}
          <td data-title="description">
           <ViewTicketDetailsModal text={"View"} data={user} />
          </td>
          <td data-title="affected users">
           {user?.affectedUsers === null ? 0 : user?.affectedUsers}
          </td>
          {Requester && <td data-title="Requester">
           <OverlayTrigger
            placement="bottom"
            overlay={
             <Tooltip>
              {user?.createdBy?.firstname}{" "}
              {user?.createdBy?.lastname}
             </Tooltip>
            }>
            {({ ref, ...triggerHandler }) => (
             <Button
              style={{ padding: "6px" }}
              variant="light"
              {...triggerHandler}
              className="d-inline-flex align-items-center btn_outline">
              {!user?.createdBy?.profilePic ? (
               " "
              ) : (
               <Image
                key={user?._id}
                crossOrigin="anonymous"
                style={{ width: "25px", height: "25px" }}
                ref={ref}
                roundedCircle
                src={
                 baseUrl + "/" + user?.createdBy?.profilePic
                }
               />
              )}

              <span className="ms-1">
               {user?.createdBy?.firstname}
              </span>
             </Button>
            )}
           </OverlayTrigger>
          </td>}

          <td data-title="createdAt">
           {moment(user?.createdAt)?.format("DD-MMM-YY H:mm:ss")}
          </td>

          <td data-title="Assign To">
           {user?.finalStatus === "Closed" ? (
            <button className="ticket-Closed">Closed</button>
           ) : (

            <AssignTask id={user?.id} Assigned={"Assigned"} />
           )}
          </td>

          <td>
           <TicketStatusCell user={user} customId={user?.id} />
          </td>
         </tr>
        ))
       )}
      </tbody>
     </table>
    </div>

   </div>
  </div>
 );
};

export default AdminTicketTable;



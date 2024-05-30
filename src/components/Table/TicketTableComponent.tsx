import moment from "moment";
// import { OverlayTrigger, Image, Tooltip, Button } from "react-bootstrap";
import { NoRecordFound, TableFetch } from "../Options";
import ViewTicketDetailsModal from "../Modals/ViewTicketDetailsModal";
import GiveApproval from "../Modals/GiveApproval";
import AssignTask from "../Modals/AssignTask";
import TicketStatusCell from "../../Pages/Admin/Ticket/TicketStatusCell";
import RealPagination from "../RealPagination";
import { ToastContainer } from "react-toastify";
import TableLoader from "../TableLoader";
import { Key } from "react";


const TicketTableComponent = ({
  TYPE,
  data,
  switchs,
  isLoading,
  handlePagination,
  pagination,
  colSpan,
  Requester,
  assignto
}: any) => {



  return (
    <>
      <div id="table-container">
        <ToastContainer />
        <div className="table-responsive-vertical">
          <div className="table-container">
            <TableLoader isLoading={isLoading} />
            <table id="table" className={switchs ? "table" : " table-hover table-mc-light-blue"}>
              <thead>
                <tr>
                  <th>Ticket Type</th>
                  <th>Severity</th>
                  <th>Issue Description</th>
                  <th>Affected Users</th>
                  {Requester && <th>Requester</th>}
                  <th>Time Stamp</th>
                  {TYPE && <th>Approval</th>}
                  {assignto && <th>Assign To</th>}
                  <th>Ticket Status</th>
                </tr>
              </thead>
              <tbody>
                {isLoading ? (
                  <TableFetch colSpan={colSpan} />
                ) : data?.length === 0 || data?.length === undefined ? (
                  <NoRecordFound colSpan={colSpan} />
                ) : (
                  data?.map((item: any, i: Key | null | undefined) => (
                    <tr key={i}>

                      <td data-title="ticket type">{item?.ticketType}</td>
                      <td data-title="severity">
                        {item?.severity === "High" ? (
                          <button className="severity-high">
                            {item?.severity}
                          </button>
                        ) : item?.severity === "Medium" ? (
                          <button className="severity-medium">
                            {item?.severity}
                          </button>
                        ) : item?.severity === "Critical" ? (
                          <button className="severity-Critical">
                            {item?.severity}
                          </button>
                        ) : item?.severity === "Low" ? (
                          <button className="severity-low">
                            {item?.severity}
                          </button>
                        ) : (
                          <button className="severity-low">Low</button>
                        )}
                      </td>
                      <td data-title="description">
                        <ViewTicketDetailsModal text={"View"} data={item} />
                      </td>
                      <td data-title="affected users">
                        {item?.affectedUsers === null ? 0 : item?.affectedUsers}
                      </td>
                      {Requester &&
                        <td data-title="Requester">
                          {item?.createdBy?.firstname}
                        </td>}
                      <td data-title="createdAt">
                        {moment(item?.createdAt)?.format("DD-MMM-YY H:mm:ss")}
                      </td>
                      {TYPE &&
                        <td data-title="createdAt">
                          {
                            TYPE && item?.status === "DISAPPROVED" ? "" :
                              TYPE && item?.status === "APPROVED" ? "" :
                                TYPE && item?.status === "INPROGRESS" ? "" :
                                  TYPE && <GiveApproval id={item?.id} />
                          }
                        </td>
                      }
                      {assignto &&
                        <td data-title="Assign To">
                          {item?.status === "CLOSED" ? (
                            <button className="ticket-Closed">Closed</button>
                          ) : (

                            <AssignTask
                              id={item?.id}
                              Assigned={"Assigned"}
                              needsApproval={item?.needsApproval}
                              data={item} />

                          )}
                        </td>}
                      <td>
                        <TicketStatusCell
                          user={item}
                          customId={item?.id} />
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
          {pagination?.pagination?.totalTickets > 1 && <div className="totalResponses">
            <h3>Total of {pagination?.pagination?.totalTickets} Tickets - <span>Page {pagination?.pagination?.page} of {pagination?.pagination?.totalPages}</span></h3>
            <RealPagination handlePagination={handlePagination} pagination={pagination?.pagination} />
          </div>}
        </div>
      </div>
    </>
  );
};

export default TicketTableComponent;






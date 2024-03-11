import React, { useState, useEffect } from "react";
import moment from "moment";
import { VscCloudDownload } from "react-icons/vsc";
import { MdOutlineErrorOutline } from "react-icons/md";
import { FcHighPriority, FcDoughnutChart, FcServices } from "react-icons/fc";
import { OverlayTrigger, Image, Tooltip, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { baseUrl } from "../../shared/baseUrl";
import Pagination from "../Pagination";
import ViewTicketDetailsModal from "../Modals/ViewTicketDetailsModal";
import { NoRecordFound, TableFetch } from "../TableOptions";
import { data } from "../StateData";
import AssignTask from "../Modals/AssignTask";

const TicketTableComponent = ({
  pageheader,
  TYPE,
  Request,
  request,
  TicketData,
  setShowTable,
  showTable,
  switchs,
  data,
  Requester
}: any) => {
  const [datas, setDatas] = useState([]);
  const [find, setFind] = useState<any>();
  const [sortData, setSortData] = useState<any>([]);
  const [searchItem, setSearchItem] = useState("");
  const [Unassigned, setUnassigned] = useState(false);

  // ---Entries Per Page --- //
  const [entriesPerPage, setEntriesPerPage] = useState(() => {
    return "7";
  });


  // -- End Pagination

  // const UnassignedTickets = data?.filter((data: any) =>
  //   data?.finalStatus?.includes("Unassigned")
  // );

  useEffect(() => {
    const user = data?.filter((object: any) => {
      return JSON?.stringify(object)?.toString()?.includes(TYPE);
    });
    setSortData(user);
  }, [data, TYPE]);



  useEffect(() => {
    // const assigned = find?.filter((object) => {
    //   return JSON?.stringify(object)?.toString()?.includes(searchItem);
    // });
    const assigned = sortData?.filter(
      (data: any) =>
        data?.ticketId?.toLowerCase().includes(searchItem) ||
        data?.location?.toLowerCase().includes(searchItem) ||
        data?.ticketType?.toLowerCase().includes(searchItem) ||
        data?.severity?.toLowerCase().includes(searchItem) ||
        data?.createdBy?.email?.toLowerCase().includes(searchItem) ||
        data?.createdBy?.firstname?.toLowerCase().includes(searchItem)
    );
    setDatas(assigned);

  }, [searchItem, sortData]);


  const [displayData, setDisplayData] = useState([]);
  return (
    <div id="table-container">
      <div className="table-responsive-vertical ">
        <div className="table-container">
          <table id="table" className={switchs ? "table" : " table-hover table-mc-light-blue"}>
            <thead>
              <tr>
                <th>Reference</th>
                <th>Ticket Type</th>
                <th>Location</th>
                <th>Severity</th>
                <th>Issue Category</th>
                <th>Issue Description</th>
                <th>Affected Users</th>
                {Requester && <th>Requester</th>}

                <th>Time Stamp</th>
                <th>Assign To</th>
                <th>
                  {sortData?.finalStatus === "Unassigned"
                    ? ""
                    : "Ticket Status"}
                </th>
              </tr>
            </thead>
            <tbody>
              {data?.length === 0 ? (
                <TableFetch colSpan={11} />
              ) : displayData?.length === 0 || displayData?.length === undefined ? (
                <NoRecordFound
                  colSpan={11}
                  children={"No Tickets record found!"}
                />
              ) : (
                displayData?.map((user: any) => (
                  <tr key={user?._id}>

                    <td className="Reference" data-title="Reference">
                      {user?.ticketType === "INCIDENT"
                        ? "INC - " + user?.ticketId
                        : user?.ticketType === "SERVICE"
                          ? "SRV - " + user?.ticketId
                          : "CHG - " + user?.ticketId}
                    </td>
                    <td data-title="ticket type">{user?.ticketType}</td>
                    <td data-title="ticket type">{user?.location}</td>
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
                    <td data-title="issue">{user?.issueCategory}</td>
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
                        // <button className="ticket-Closed">Closed</button>
                        ""
                      ) : (

                        < AssignTask
                        // TicketID={user?._id}
                        // TYPE={TYPE}
                        // assignToName={assignToName}
                        // assignerName={userInfo?.firstname}
                        // ticketId={user?.ticketId}
                        // ticketType={user.ticketType}
                        // issueCategory={user?.issueCategory}
                        // affectedUsers={user?.affectedUsers}
                        // ticketStatus={user?.finalStatus}
                        // timeStamp={moment(user?.createdAt)?.format("DD-MMM-YY H:mm:ss")}
                        // severity={user?.severity}
                        // createdByFirstname={user?.createdBy?.firstname}
                        // data={user}
                        />
                      )}
                    </td>
                    <td>
                      {user?.finalStatus === "Assigned" && (
                        <Link
                          to={`/ticket-progress/${user?._id}`}
                          className="admin-btn-progresss">
                          IN-PROGRESS
                        </Link>
                      )}
                      {user?.finalStatus === "Unassigned" && (
                        <button
                          className="admin-btn-Unassigned"
                          onClick={() => {
                            setUnassigned(true);
                          }}>
                          {user?.finalStatus}
                        </button>
                      )}
                      {user?.finalStatus === "Reopen" && (
                        <Link
                          to={`/ticket-progress/${user?._id}`}
                          className="admin-btn-reopen">
                          Reopened
                        </Link>
                      )}
                      {user?.finalStatus === "Completed" && (
                        <Link
                          to={`/ticket-progress/${user?._id}`}
                          className="admin-btn-resolved">
                          Resolved
                        </Link>
                      )}
                      {user?.finalStatus === "Closed" && (
                        <Link
                          to={`/ticket-progress/${user?._id}`}
                          className="admin-btn-closed">
                          Closed
                        </Link>
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        <Pagination
          setDisplayData={setDisplayData}
          data={datas}
          entriesPerPage={entriesPerPage}
          Total={Request}
        />
      </div>
    </div>
  );
};

export default TicketTableComponent;

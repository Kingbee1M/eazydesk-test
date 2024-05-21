import { useState, useEffect } from "react";
import moment from "moment";
import {
  // EntriesPerPage,
  NoRecordFound,
  TableFetch,
} from "../../../components/Options";
// import Pagination from "../../../components/Pagination";
import { data } from "../../../components/StateData";
import SideNav from "../../../components/SideNav/SideNav";
import Header from "../../../components/Header";
import SearchConponent from "../../../components/SearchConponent";
// import ImageLightbox from "../../../components/ImageLightbox";
import ViewTicketDetailsModal from "../../../components/Modals/ViewTicketDetailsModal";
import { useAppDispatch, useAppSelector } from "../../../store/useStore";
import { admingetTicket } from "../../../features/Ticket/ticketSlice";
// import { dashBoardInfo } from "../../../features/Ticket/ticketSlice";
import ViewEmailDetailsModal from "../../../components/Modals/ViewEmailDetailsModal";

const TicketReport = ({ switchs }: any) => {
  const dispatch = useAppDispatch();
  let [endDates, setEndDates] = useState<any>([]);
  const [show, setShow] = useState(false);
  const [searchItem, setSearchItem] = useState("");
  // const [datas, setDatas] = useState([]);
  // const [limit, setLimit] = useState<any>(10);

  endDates = new Date();
  const formattedEndDate = endDates.toISOString().split("T")[0]; // Extracting date part and removing time
  const [startDate1] = useState(formattedEndDate);
  const [endDate1] = useState(formattedEndDate);
  const { giveApprovalisSuccess } = useAppSelector(
    (state: any) => state.ticket
  );
  const { admingetticketdata } = useAppSelector((state: any) => state.ticket);

  // useEffect(() => {
  //   const result: any = data?.filter(
  //     (data: any) =>
  //       data?.ticketId?.toLowerCase().includes(searchItem) ||
  //       data?.location?.toLowerCase().includes(searchItem) ||
  //       data?.ticketType?.toLowerCase().includes(searchItem) ||
  //       data?.severity?.toLowerCase().includes(searchItem) ||
  //       data?.createdBy?.email?.toLowerCase().includes(searchItem) ||
  //       data?.createdBy?.firstname?.toLowerCase().includes(searchItem)
  //   );
  //   setDatas(result);
  // }, [setDatas, searchItem]);

  // const handleCustomFilters = (e: { preventDefault: () => void }) => {
  //   e.preventDefault();
  //   const datas = { startDates, endDates };
  //   setShow(false);
  // };

  const [entriesPerPage, setEntriesPerPage] = useState(() => {
    return "6";
  });

  useEffect(() => {
    const dispatchDatas = { ticketType: "CHANGE" };
    // @ts-ignore
    dispatch(admingetTicket(dispatchDatas));
    if (giveApprovalisSuccess) {
      // @ts-ignore
      dispatch(admingetTicket(dispatchDatas));
    }
  }, [dispatch, endDate1, giveApprovalisSuccess, startDate1]);

  // const totalTickets = admingetticketdata?.tickets.length;

  return (
    <div id='page-wrapper'>
      <SideNav />
      <Header />
      <main>
        <div className='dashboard-first-card-boards  mt-2'>
          <div>
            <h5 className='dashboard-first-card-h'>Report</h5>
            <p className='dashboard-first-card-p'>
              {admingetticketdata?.tickets?.length} Total Report are added
            </p>
          </div>
        </div>
        <SearchConponent
          placeholder={"search ticket report"}
          setSearchItem={setSearchItem}
          searchItem={searchItem}
          data={admingetticketdata?.tickets}
          entriesPerPage={entriesPerPage}
          setEntriesPerPage={setEntriesPerPage}
          filter={true}
          // setStartDates={setStartDates}
          setEndDates={setEndDates}
          setShow={setShow}
          show={show}
        // handleCustomFilters={handleCustomFilters}
        />

        <div id='table-container'>
          <div className='table-responsive-vertical '>
            <div className='table-container'>
              <table
                id='table'
                className={
                  switchs ? "table" : "table-hover table-mc-light-blue"
                }
              >
                <thead>
                  <tr>
                    <th>Reference</th>
                    <th>Affected Users</th>
                    {/* <th>Location</th> */}
                    {/* <th>Created By</th> */}
                    <th className='red_effect'>Created At</th>
                    <th className='green_effect'>Closed At</th>
                    <th>Email</th>
                    {/* <th>Phone Number</th> */}
                    <th>Issue Description</th>
                    {/* <th>Issue Category</th> */}
                    <th>Status</th>
                    <th>Severity</th>
                    <th>Ticket Type</th>
                  </tr>
                </thead>
                <tbody>
                  {false && data?.length === 0 ? (
                    <TableFetch colSpan={20} />
                  ) : admingetticketdata?.tickets?.length === 0 ? (
                    <NoRecordFound
                      colSpan={20}
                      children={"No Tickets record found!"}
                    />
                  ) : (
                    admingetticketdata?.tickets?.map((user: any, i: any) => (
                      <tr key={i}>
                        <td data-title='Reference'>
                          {user?.ticketType === "INCIDENT"
                            ? "INC - " + user?.id
                            : user?.ticketType === "SERVICE"
                              ? "SRV - " + user?.id
                              : "CHG - " + user?.id}
                        </td>
                        <td data-title='affected Users'>
                          {!user?.affectedUsers ? (
                            <span className='blue_effect'>ALL</span>
                          ) : (
                            user?.affectedUsers
                          )}
                        </td>
                        {/* <td data-title='firstName'>{user?.location}</td> */}
                        {/* <td data-title='firstName'>
                          {user?.createdBy?.firstname}
                          {user?.createdBy?.lastname}
                        </td> */}
                        <td data-title='created at' className='red_effect'>
                          {moment(user?.createdAt).format(
                            "YYYY-MM-DD HH:mm:ss"
                          )}
                        </td>
                        <td data-title='created at' className='green_effect'>
                          {!user?.closedAt ? (
                            <span className='blue_effect'>Not Yet Closed</span>
                          ) : (
                            moment(user?.closedAt).format("YYYY-MM-DD HH:mm:ss")
                          )}
                        </td>
                        {/* <td data-title='email'>{user?.createdBy?.email}</td> */}
                        <td data-title='email'>
                          <ViewEmailDetailsModal text={"View"} data={user} />
                        </td>
                        {/* <td data-title='phone number'>
                          {user?.createdBy?.phoneNumber}
                        </td> */}
                        <td data-title='issue description'>
                          <ViewTicketDetailsModal data={user} />
                        </td>
                        {/* <td data-title='Issue Category'>
                          {user?.issueCategory}
                        </td> */}
                        <td data-title='Status'>{user?.status}</td>
                        <td data-title='severity'>
                          {user?.severity === "High" ? (
                            <button className='severity-high'>
                              {user?.severity}
                            </button>
                          ) : user?.severity === "Medium" ? (
                            <button className='severity-medium'>
                              {user?.severity}
                            </button>
                          ) : user?.severity === "Critical" ? (
                            <button className='severity-Critical'>
                              {user?.severity}
                            </button>
                          ) : user?.severity === "Low" ? (
                            <button className='severity-low'>
                              {user?.severity}
                            </button>
                          ) : (
                            <button className='severity-low'>Low</button>
                          )}
                        </td>
                        <td data-title='ticket type'>{user?.ticketType}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
            {/* <Pagination
              setDisplayData={setDisplayData}
              data={admingetticketdata?.tickets}
              entriesPerPage={entriesPerPage}
              Total={"Ticket Report"}
            /> */}
          </div>
        </div>
      </main>
    </div>
  );
};

export default TicketReport;

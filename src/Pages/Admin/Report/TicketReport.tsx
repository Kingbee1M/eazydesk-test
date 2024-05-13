import { useState, useEffect } from "react";
import moment from "moment";
import {
  EntriesPerPage,
  NoRecordFound,
  TableFetch,
} from "../../../components/Options";
import Pagination from "../../../components/Pagination";
import { data } from "../../../components/StateData";
import SideNav from "../../../components/SideNav/SideNav";
import Header from "../../../components/Header";
import SearchConponent from "../../../components/SearchConponent";
import ImageLightbox from "../../../components/ImageLightbox";
import ViewTicketDetailsModal from "../../../components/Modals/ViewTicketDetailsModal";
import { useAppDispatch, useAppSelector } from "../../../store/useStore";
import { admingetTicket } from "../../../features/Ticket/ticketSlice";
import TicketTableComponent from "../../../components/Table/TicketTableComponent";

const TicketReport = ({ switchs }: any) => {
  const dispatch = useAppDispatch();
  const { giveApprovalisSuccess } = useAppSelector(
    (state: any) => state.ticket
  );

  const [startDates, setStartDates] = useState([]);
  let [endDates, setEndDates] = useState<any>([]);
  const [show, setShow] = useState(false);
  const [searchItem, setSearchItem] = useState("");
  const [datas, setDatas] = useState([]);
  const { admingetticketdata, admingetticketisLoading } = useAppSelector(
    (state: any) => state.ticket
  );
  const [limit, setLimit] = useState<any>(10);
  endDates = new Date();
  const formattedEndDate = endDates.toISOString().split("T")[0]; // Extracting date part and removing time
  const [startDate1] = useState(formattedEndDate);
  const [endDate1] = useState(formattedEndDate);

  useEffect(() => {
    const result: any = data?.filter(
      (data: any) =>
        data?.ticketId?.toLowerCase().includes(searchItem) ||
        data?.location?.toLowerCase().includes(searchItem) ||
        data?.ticketType?.toLowerCase().includes(searchItem) ||
        data?.severity?.toLowerCase().includes(searchItem) ||
        data?.createdBy?.email?.toLowerCase().includes(searchItem) ||
        data?.createdBy?.firstname?.toLowerCase().includes(searchItem)
    );
    setDatas(result);
  }, [data, searchItem]);

  const [displayData, setDisplayData] = useState([]);

  const handleCustomFilters = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const datas = { startDates, endDates };
    setShow(false);
  };
  const [entriesPerPage, setEntriesPerPage] = useState(() => {
    return "6";
  });

  useEffect(() => {
    const datas = { status: "" };
    // @ts-ignore
    dispatch(admingetTicket(datas));
    if (giveApprovalisSuccess) {
      // @ts-ignore
      dispatch(admingetTicket(datas));
    }
  }, [dispatch, endDate1, giveApprovalisSuccess, startDate1]);

  console.log(admingetticketdata);

  //   const handlePagination = (
  //     type: string,
  //     data?: React.ChangeEvent<HTMLSelectElement> | undefined
  //   ) => {
  //     switch (type) {
  //       // @ts-ignore
  //       case "prev":
  //         // @ts-ignore
  //         dispatch(admingetTicket({ page: pagination?.page - 1, limit: limit }));
  //         break;
  //       // @ts-ignore
  //       case "next":
  //         // @ts-ignore
  //         dispatch(admingetTicket({ page: pagination?.page + 1, limit: limit }));
  //         break;
  //       case "limit":
  //         if (data) {
  //           setLimit(data.target.value);
  //           // @ts-ignore
  //           dispatch(admingetTicket({ limit: data.target.value }));
  //         }
  //         break;
  //       default:
  //         // For page numbers or any other custom actions
  //         const pageNumber = parseInt(type);
  //         if (!isNaN(pageNumber)) {
  //           // @ts-ignore
  //           dispatch(admingetTicket({ page: pageNumber, limit: limit }));
  //         }
  //         break;
  //     }
  //   };
  return (
    <div id='page-wrapper'>
      <SideNav />
      <Header />
      <main>
        <div className='dashboard-first-card-boards  mt-2'>
          <div>
            <h5 className='dashboard-first-card-h'>Report</h5>
            <p className='dashboard-first-card-p'>102 Total Report are added</p>
          </div>
        </div>
        <SearchConponent
          placeholder={"search ticket report"}
          setSearchItem={setSearchItem}
          searchItem={searchItem}
          data={datas}
          entriesPerPage={entriesPerPage}
          setEntriesPerPage={setEntriesPerPage}
          filter={true}
          setStartDates={setStartDates}
          setEndDates={setEndDates}
          setShow={setShow}
          show={show}
          handleCustomFilters={handleCustomFilters}
        />

        {/* <div id='table-container'>
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
                    <th>Location</th>
                    <th>Created By</th>
                    <th className='red_effect'>Created At</th>
                    <th className='green_effect'>Closed At</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                    <th>Issue Description</th>
                    <th>Issue Category</th>
                    <th>Severity</th>
                    <th>Ticket Type</th>
                  </tr>
                </thead>
                <tbody>
                  {false && data?.length === 0 ? (
                    <TableFetch colSpan={20} />
                  ) : displayData?.length === 0 ? (
                    <NoRecordFound
                      colSpan={20}
                      children={"No Tickets record found!"}
                    />
                  ) : (
                    displayData?.map((user: any, i) => (
                      <tr key={i}>
                        <td data-title='Reference'>
                          {user?.ticketType === "INCIDENT"
                            ? "INC - " + user?.ticketId
                            : user?.ticketType === "SERVICE"
                            ? "SRV - " + user?.ticketId
                            : "CHG - " + user?.ticketId}
                        </td>
                        <td data-title='affected Users'>
                          {!user?.affectedUsers ? (
                            <span className='blue_effect'>ALL</span>
                          ) : (
                            user?.affectedUsers
                          )}
                        </td>
                        <td data-title='firstName'>{user?.location}</td>
                        <td data-title='firstName'>
                          {user?.createdBy?.firstname}
                          {user?.createdBy?.lastname}
                        </td>
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
                        <td data-title='email'>{user?.createdBy?.email}</td>
                        <td data-title='phone number'>
                          {user?.createdBy?.phoneNumber}
                        </td>
                        <td data-title='issue description'>
                          <ViewTicketDetailsModal text={"View"} data={user} />
                        </td>
                        <td data-title='issue Category'>
                          {user?.issueCategory}
                        </td>
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
            <Pagination
              setDisplayData={setDisplayData}
              data={datas}
              entriesPerPage={entriesPerPage}
              Total={"Ticket Report"}
            />
          </div>
        </div> */}

        {/* <div className='mt-4'>
          <TicketTableComponent
            TYPE={true}
            pagination={admingetticketdata}
            data={admingetticketdata?.tickets}
            isLoading={admingetticketisLoading}
            handlePagination={handlePagination}
            colSpan={8}
          />
        </div> */}
      </main>
    </div>
  );
};

export default TicketReport;

import { useEffect, useState } from "react";
import SideNav from "../../../components/SideNav/SideNav";
import SearchConponent from "../../../components/SearchConponent";
import { useAppDispatch, useAppSelector } from "../../../store/useStore";
import { admingetTicket } from "../../../features/Ticket/ticketSlice";
import TicketTableComponent from "../../../components/Table/TicketTableComponent";
import AdminBottomNavigation from "../../../components/BottomNavigation/AdminBottomNavigation";
import AdminHeader from "../../../components/Headers/AdminHeader";
import AdminTicketHeader from "../../../components/TicketHeaders/AdminTicketHeader";

const ChangeRequest = () => {
  const dispatch = useAppDispatch();
  const { giveApprovalisSuccess } = useAppSelector(
    (state: any) => state.ticket
  );
  const { admingetticketdata, admingetticketisLoading } = useAppSelector(
    (state: any) => state.ticket
  );
  const [entriesPerPage, setEntriesPerPage] = useState(() => {
    return "6";
  });
  const [startDates, setStartDates] = useState([]);
  let [endDates, setEndDates] = useState<any>([]);
  const [show, setShow] = useState(false);
  const [searchItem, setSearchItem] = useState("");
  const [limit, setLimit] = useState<any>(10);
  endDates = new Date();
  const formattedEndDate = endDates.toISOString().split("T")[0]; // Extracting date part and removing time
  const [startDate1] = useState(formattedEndDate);
  const [endDate1] = useState(formattedEndDate);

  useEffect(() => {
    const datas = { ticketType: "CHANGE" };
    // @ts-ignore
    dispatch(admingetTicket(datas));
    if (giveApprovalisSuccess) {
      // @ts-ignore
      dispatch(admingetTicket(datas));
    }
  }, [dispatch, endDate1, giveApprovalisSuccess, startDate1]);

  const handlePagination = (
    type: string,
    data?: React.ChangeEvent<HTMLSelectElement> | undefined
  ) => {
    switch (type) {
      // @ts-ignore
      case "prev":
        // @ts-ignore
        dispatch(admingetTicket({ page: pagination?.page - 1, limit: limit }));
        break;
      // @ts-ignore
      case "next":
        // @ts-ignore
        dispatch(admingetTicket({ page: pagination?.page + 1, limit: limit }));
        break;
      case "limit":
        if (data) {
          setLimit(data.target.value);
          // @ts-ignore
          dispatch(admingetTicket({ limit: data.target.value }));
        }
        break;
      default:
        // For page numbers or any other custom actions
        const pageNumber = parseInt(type);
        if (!isNaN(pageNumber)) {
          // @ts-ignore
          dispatch(admingetTicket({ page: pageNumber, limit: limit }));
        }
        break;
    }
  };

  return (
    <div id='page-wrapper'>
      <SideNav />
      <AdminHeader />
      <AdminBottomNavigation />
      <main>
        <div className='dashboard-first-card-boards '>
          <AdminTicketHeader text="Change Request<" />
        </div>
        <SearchConponent
          placeholder={"search ticket"}
          setSearchItem={setSearchItem}
          searchItem={searchItem}
          data={admingetticketdata?.tickets}
          pagination={admingetticketdata}
          entriesPerPage={entriesPerPage}
          setEntriesPerPage={setEntriesPerPage}
          filter={true}
          setStartDates={setStartDates}
          setEndDates={setEndDates}
          setShow={setShow}
          show={show}
          handlePagination={handlePagination}
        // handleCustomFilters={handleCustomFilters}
        />

        <div className='mt-4'>
          <TicketTableComponent
            TYPE={true}
            pagination={admingetticketdata}
            data={admingetticketdata?.tickets}
            isLoading={admingetticketisLoading}
            handlePagination={handlePagination}
            colSpan={8}
          />
        </div>
      </main>
    </div>
  );
};

export default ChangeRequest;

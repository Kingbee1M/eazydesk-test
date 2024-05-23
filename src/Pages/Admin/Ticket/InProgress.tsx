import { useEffect, useState } from "react";
import Header from "../../../components/Header";
import BottomNavigation from "../../../components/BottomNavigation";
import SearchConponent from "../../../components/SearchConponent";
import SideNav from "../../../components/SideNav/SideNav";
import AdminTicketTable from "./AdminTicketTable";
import { useAppDispatch, useAppSelector } from "../../../store/useStore";
import moment from "moment";
import { admingetTicket } from "../../../features/Ticket/ticketSlice";
import TicketTableComponent from "../../../components/Table/TicketTableComponent";
import AdminHeader from "../../../components/Headers/AdminHeader";
import AdminBottomNavigation from "../../../components/BottomNavigation/AdminBottomNavigation";
import AdminTicketHeader from "../../../components/TicketHeaders/AdminTicketHeader";

const InProgress = () => {
  const dispatch = useAppDispatch();
  const { itassignisSuccess } = useAppSelector((state: any) => state.ticket);
  const [entriesPerPage, setEntriesPerPage] = useState(() => {
    return "6";
  });

  const [startDates, setStartDates] = useState([]);
  let [endDates, setEndDates] = useState<any>([]);
  const [show, setShow] = useState(false);
  const [datas, setDatas] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  const { admingetticketdata, admingetticketisLoading } = useAppSelector(
    (state: any) => state.ticket
  );
  endDates = new Date();
  const formattedEndDate = endDates.toISOString().split("T")[0];
  const [startDate1] = useState(formattedEndDate);
  const [endDate1] = useState(formattedEndDate);

  useEffect(() => {
    const datas = { status: "INPROGRESS" };
    // @ts-ignore
    dispatch(admingetTicket(datas));
  }, [dispatch, endDate1, startDate1, itassignisSuccess]);

  return (
    <div id='page-wrapper'>
      <SideNav />
      <AdminHeader />
      <AdminBottomNavigation />
      <main>
        <div className='dashboard-first-card-boards'>
          <AdminTicketHeader text="Ticket Progress" />
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
        // handleCustomFilters={handleCustomFilters}
        />

        <div className='mt-4'>
          <TicketTableComponent
            TYPE={false}
            data={admingetticketdata?.tickets}
            isLoading={admingetticketisLoading}
            colSpan={8}
          />
        </div>
      </main>
    </div>
  );
};

export default InProgress;

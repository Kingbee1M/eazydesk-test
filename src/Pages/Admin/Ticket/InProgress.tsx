import { useEffect, useState } from "react";
import SearchConponent from "../../../components/SearchConponent";
import SideNav from "../../../components/SideNav/SideNav";
import { useAppDispatch, useAppSelector } from "../../../store/useStore";
import { admingetTicket } from "../../../features/Ticket/ticketSlice";
import TicketTableComponent from "../../../components/Table/TicketTableComponent";
import AdminHeader from "../../../components/Headers/AdminHeader";
import AdminBottomNavigation from "../../../components/BottomNavigation/AdminBottomNavigation";
import AdminTicketHeader from "../../../components/TicketHeaders/AdminTicketHeader";
import { ToastContainer } from "react-toastify";

const InProgress = () => {
  const dispatch = useAppDispatch();
  const [limit, setLimit] = useState<any>(8);
  const { itassignisSuccess, admingetticketdata, admingetticketisLoading } = useAppSelector((state: any) => state.ticket);
  const [show, setShow] = useState(false);
  const [startDate, setStartDates] = useState([]);
  const [endDate, setEndDates] = useState<any>([]);
  const [status, setStatus] = useState("");
  const [ticketType, setTicketType] = useState("");
  const [data, setData] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  const pagination = admingetticketdata?.pagination



  useEffect(() => {
    const datas = { status: "INPROGRESS" };
    // @ts-ignore
    dispatch(admingetTicket(datas));
  }, [dispatch, itassignisSuccess]);

  const handlePagination = (type: string, data?: React.ChangeEvent<HTMLSelectElement> | undefined) => {
    setShow(false)
    switch (type) {
      // @ts-ignore
      case 'prev': dispatch(admingetTicket({ status: "INPROGRESS", page: pagination?.page - 1, limit: limit }));
        break;
      // @ts-ignore
      case 'next': dispatch(admingetTicket({ status: "INPROGRESS", page: pagination?.page + 1, limit: limit }));
        break;
      case 'limit':
        if (data) {
          setLimit(data.target.value);
          // @ts-ignore
          dispatch(admingetTicket({ status: "INPROGRESS", limit: data.target.value }));
        };
        break;
      case 'ticketType':
        // @ts-ignore
        dispatch(admingetTicket({ status: "INPROGRESS", ticketType: ticketType }));
        break;
      case 'status':
        // @ts-ignore
        dispatch(admingetTicket({ status: status }));
        break;
      case 'date':
        // @ts-ignore
        dispatch(admingetTicket({ status: "INPROGRESS", startDate: startDate, endDate: endDate }));
        break;
      default:
        // For page numbers or any other custom actions
        const pageNumber = parseInt(type);
        if (!isNaN(pageNumber)) {
          // @ts-ignore
          dispatch(admingetTicket({ status: "INPROGRESS", page: pageNumber, limit: limit }));
        }
        break;
    }
  }

  useEffect(() => {
    const result: any = admingetticketdata?.tickets?.filter(
      (data: any) =>
        data?.status?.toLowerCase().includes(searchItem) ||
        data?.ticketType?.toLowerCase().includes(searchItem) ||
        data?.severity?.toLowerCase().includes(searchItem)
    );
    setData(result)
  }, [admingetticketdata?.tickets, searchItem]);

  return (
    <div id='page-wrapper'>
      <SideNav />
      <AdminHeader />
      <AdminBottomNavigation />
      <ToastContainer />
      <main>
        <div className='dashboard-first-card-boards'>
          <AdminTicketHeader text="Ticket Progress" />
        </div>
        <SearchConponent
          placeholder={"search ticket report"}
          setSearchItem={setSearchItem}
          searchItem={searchItem}
          data={data}
          filter={true}
          setStartDates={setStartDates}
          setEndDates={setEndDates}
          setShow={setShow}
          show={show}
          handlePagination={handlePagination}
          report={false}
          setTicketType={setTicketType}
          ticketType={ticketType}
          setStatus={setStatus}
          status={status}
          statusFilter={false}
        />

        <div >
          <TicketTableComponent
            TYPE={false}
            data={data}
            handlePagination={handlePagination}
            isLoading={admingetticketisLoading}
            colSpan={8}
          />
        </div>
      </main>
    </div>
  );
};

export default InProgress;

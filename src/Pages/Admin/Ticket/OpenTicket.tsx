import { useEffect, useState } from "react";
import SideNav from "../../../components/SideNav/SideNav";
import Header from "../../../components/Header";
import BottomNavigation from "../../../components/BottomNavigation";
import SearchConponent from "../../../components/SearchConponent";
import { useAppDispatch, useAppSelector } from "../../../store/useStore";
import {
  admingetTicket,
  getItTicketParameter,
} from "../../../features/Ticket/ticketSlice";
import TicketTableComponent from "../../../components/Table/TicketTableComponent";

const OpenTicket = () => {
  const [limit, setLimit] = useState<any>(10);
  const dispatch = useAppDispatch();
  const { itassignisSuccess } = useAppSelector((state: any) => state.ticket);
  const [startDates, setStartDates] = useState([]);
  let [endDates, setEndDates] = useState<any>([]);
  const [show, setShow] = useState(false);
  const [datas, setDatas] = useState([]);
  const [searchItem, setSearchItem] = useState("");

  const { admingetticketdata, admingetticketisLoading } = useAppSelector(
    (state: any) => state.ticket
  );
  endDates = new Date();
  const formattedEndDate = endDates.toISOString().split("T")[0]; // Extracting date part and removing time
  const [startDate1] = useState(formattedEndDate);
  const [endDate1] = useState(formattedEndDate);

  useEffect(() => {
    const datas = { status: "COMPLETED" };
    // @ts-ignore
    dispatch(admingetTicket(datas));
  }, [dispatch, endDate1, startDate1, itassignisSuccess]);

  const handlePagination = (
    type: string,
    data?: React.ChangeEvent<HTMLSelectElement> | undefined
  ) => {
    switch (type) {
      // @ts-ignore
      case "prev":
        dispatch(
          // @ts-ignore
          getItTicketParameter({ page: pagination?.page - 1, limit: limit })
        );
        break;
      // @ts-ignore
      case "next":
        dispatch(
          // @ts-ignore
          getItTicketParameter({ page: pagination?.page + 1, limit: limit })
        );
        break;
      case "limit":
        if (data) {
          setLimit(data.target.value);
          // @ts-ignore
          dispatch(getItTicketParameter({ limit: data.target.value }));
        }
        break;
      default:
        // For page numbers or any other custom actions
        const pageNumber = parseInt(type);
        if (!isNaN(pageNumber)) {
          // @ts-ignore
          dispatch(getItTicketParameter({ page: pageNumber, limit: limit }));
        }
        break;
    }
  };

  return (
    <div id='page-wrapper'>
      <SideNav />
      <Header />
      <BottomNavigation />
      <main>
        <div className='dashboard-first-card-boards  mt-2'>
          <div>
            <h5 className='dashboard-first-card-h'>Completed Ticket</h5>
          </div>
        </div>
        <SearchConponent
          placeholder={"search ticket report"}
          setSearchItem={setSearchItem}
          searchItem={searchItem}
          data={datas}
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
            TYPE={false}
            isLoading={admingetticketisLoading}
            data={admingetticketdata?.tickets}
            colSpan={8}
          />
        </div>
      </main>
    </div>
  );
};

export default OpenTicket;

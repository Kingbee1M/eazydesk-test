import { useState, useEffect } from "react";
import moment from "moment";
import {
  NoRecordFound,
  TableFetch,
} from "../../../components/Options";
import SideNav from "../../../components/SideNav/SideNav";
import SearchConponent from "../../../components/SearchConponent";
// import ImageLightbox from "../../../components/ImageLightbox";
import ViewTicketDetailsModal from "../../../components/Modals/ViewTicketDetailsModal";
import { useAppDispatch, useAppSelector } from "../../../store/useStore";
import { admingetTicket } from "../../../features/Ticket/ticketSlice";
import ViewEmailDetailsModal from "../../../components/Modals/ViewEmailDetailsModal";
import AdminHeader from "../../../components/Headers/AdminHeader";
import AdminBottomNavigation from "../../../components/BottomNavigation/AdminBottomNavigation";
import RealPagination from "../../../components/RealPagination";
import TableLoader from "../../../components/TableLoader";
import TicketStatusCell from "../Ticket/TicketStatusCell";
import { ToastContainer } from "react-toastify";

const TicketReport = () => {
  const dispatch = useAppDispatch();
  const [limit, setLimit] = useState<any>(8);
  const [startDate, setStartDates] = useState([]);
  const [endDate, setEndDates] = useState([]);
  const [show, setShow] = useState(false);
  const [searchItem, setSearchItem] = useState("");
  const [ticketType, setTicketType] = useState("");
  const [status, setStatus] = useState("");
  const [data, setData] = useState([]);

  const { admingetticketdata, admingetticketisLoading } = useAppSelector(
    (state: any) => state.ticket
  );
  const pagination = admingetticketdata?.pagination

  const toPlainText = (value: any) => {
    if (typeof value !== "string") return "";
    return value.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
  };

  const csvEscape = (value: any) => {
    const normalized = value === null || value === undefined ? "" : String(value);
    const escaped = normalized.replace(/"/g, '""');
    return `"${escaped}"`;
  };

  const buildTicketCsv = (rows: any[]) => {
    const headers = [
      "Ticket ID",
      "Ticket Type",
      "Severity",
      "Issue Description",
      "Created At",
      "Closed At",
      "Resolution Minutes",
      "Affected Users",
      "Email",
      "Time Stamp",
      "Approval",
      "Ticket Status",
    ];

    const csvRows = rows.map((item: any) => {
      const issueDescription = item?.issueDescription ?? toPlainText(item?.description);
      const createdAt = moment(item?.createdAt).format("YYYY-MM-DD HH:mm:ss");
      const closedAt =
        item?.status !== "CLOSED"
          ? "Not Yet Closed"
          : moment(item?.updatedAt).format("YYYY-MM-DD HH:mm:ss");
      const resolutionMinutes =
        item?.status === "CLOSED" && item?.createdAt && item?.updatedAt
          ? moment(item?.updatedAt).diff(moment(item?.createdAt), "minutes")
          : "";
      const affectedUsers = item?.affectedUsers === null ? 0 : item?.affectedUsers;
      const emails = Array.isArray(item?.emails) ? item?.emails.join("; ") : "";
      const timeStamp = moment(item?.createdAt)?.format("DD-MMM-YY H:mm:ss");
      const approval = "";

      return [
        item?.id ?? "",
        item?.ticketType ?? "",
        item?.severity ?? "",
        issueDescription ?? "",
        createdAt,
        closedAt,
        resolutionMinutes,
        affectedUsers,
        emails,
        timeStamp,
        approval,
        item?.status ?? "",
      ].map(csvEscape).join(",");
    });

    return [headers.map(csvEscape).join(","), ...csvRows].join("\n");
  };

  const handleExportCsv = () => {
    if (!data || data.length === 0) return;
    const csv = buildTicketCsv(data);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `ticket-report-${moment().format("YYYY-MM-DD-HHmmss")}.csv`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  };

  useEffect(() => {
    const datas = { status: undefined };
    // @ts-ignore
    dispatch(admingetTicket(datas));
  }, [dispatch]);



  const handlePagination = (type: string, data?: React.ChangeEvent<HTMLSelectElement> | undefined) => {
    setShow(false)
    switch (type) {
      // @ts-ignore
      case 'prev': dispatch(admingetTicket({ page: pagination?.page - 1, limit: limit }));
        break;
      // @ts-ignore
      case 'next': dispatch(admingetTicket({ page: pagination?.page + 1, limit: limit }));
        break;
      case 'limit':
        if (data) {
          setLimit(data.target.value);
          // @ts-ignore
          dispatch(admingetTicket({ limit: data.target.value }));
        };
        break;
      case 'ticketType':
        // @ts-ignore
        dispatch(admingetTicket({ ticketType: ticketType }));
        break;
      case 'status':
        // @ts-ignore
        dispatch(admingetTicket({ status: status }));
        break;
      case 'date':
        // @ts-ignore
        dispatch(admingetTicket({ startDate: startDate, endDate: endDate }));
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
      <main>
        <div className='dashboard-first-card-boards   '>
          <div>
            <h5 className='dashboard-first-card-h'>Report</h5>
            <p className='dashboard-first-card-p'>
              {admingetticketdata?.tickets?.length} Total Report are added
            </p>
            <button
              className="btn"
              onClick={handleExportCsv}
              disabled={admingetticketisLoading || !data || data.length === 0}
            >
              Export CSV
            </button>
          </div>
        </div>
        <SearchConponent
          placeholder={"search ticket report"}
          setSearchItem={setSearchItem}
          searchItem={searchItem}
          data={admingetticketdata?.tickets}
          filter={true}
          setStartDates={setStartDates}
          setEndDates={setEndDates}
          setShow={setShow}
          show={show}
          handlePagination={handlePagination}
          report={true}
          setTicketType={setTicketType}
          ticketType={ticketType}
          setStatus={setStatus}
          status={status}
          statusFilter={true}
        />

        <div id='table-container'>
          <div className='table-responsive-vertical '>
            <div className='table-container'>
              <TableLoader isLoading={admingetticketisLoading} />
              <table id="table" className={" table-hover table-mc-light-blue"}>
                <thead>
                  <tr>
                    <th>Ticket ID</th>
                    <th>Ticket Type</th>
                    <th>Severity</th>
                    <th>Issue Description</th>
                    <th className="red_effect">
                      Created At
                    </th>
                    <th className="green_effect">
                      Closed At
                    </th>
                    <th>Resolution Minutes</th>
                    <th>Affected Users</th>
                    <th>Email</th>
                    <th>Time Stamp</th>
                    <th>Approval</th>
                    <th>Ticket Status</th>
                  </tr>
                </thead>
                <tbody>
                  {admingetticketisLoading ? (
                    <TableFetch colSpan={9} />
                  ) : data?.length === 0 || !data ? (
                    <NoRecordFound colSpan={9} />
                  ) : (
                    data?.map((item: any, i: any) => (
                      <tr key={i}>
                        <td data-title="ticket id">{item?.id}</td>
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
                        <td
                          data-title="created at"
                          className="red_effect">
                          {moment(item?.createdAt).format(
                            "YYYY-MM-DD HH:mm:ss"
                          )}
                        </td>
                        <td
                          data-title="created at"
                          className="green_effect">
                          {item?.status !== "CLOSED" ? (
                            <span
                              className="blue_effect">
                              Not Yet Closed
                            </span>
                          ) : (
                            moment(item?.updatedAt).format("YYYY-MM-DD HH:mm:ss")
                          )}
                        </td>
                        <td data-title="resolution minutes">
                          {item?.status === "CLOSED" && item?.createdAt && item?.updatedAt
                            ? moment(item?.updatedAt).diff(moment(item?.createdAt), "minutes")
                            : "-"}
                        </td>
                        <td data-title="affected users">
                          {item?.affectedUsers === null ? 0 : item?.affectedUsers}
                        </td>
                        <td data-title='email'>
                          <ViewEmailDetailsModal text={"View"} data={item} />
                        </td>
                        <td data-title="createdAt">
                          {moment(item?.createdAt)?.format("DD-MMM-YY H:mm:ss")}
                        </td>
                        <td data-title="Approval">
                        </td>
                        <td>
                          <TicketStatusCell
                            user={item}
                            // @ts-ignore
                            customId={item?.id} />
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
            {admingetticketdata?.pagination?.totalTickets > 1 && <div className="totalResponses">
              <h3>Total of {admingetticketdata?.pagination?.totalTickets} Tickets - <span>Page {admingetticketdata?.pagination?.page} of {admingetticketdata?.pagination?.totalPages}</span></h3>
              <RealPagination handlePagination={handlePagination} pagination={admingetticketdata?.pagination} />
            </div>}
          </div>
        </div>
      </main>
  );
};

export default TicketReport;

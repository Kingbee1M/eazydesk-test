import moment from "moment";
import { NoRecordFound, TableFetch } from "../Options";
import ViewTicketDetailsModal from "../Modals/ViewTicketDetailsModal";
import GiveApproval from "../Modals/GiveApproval";
import AssignTask from "../Modals/AssignTask";
import TicketStatusCell from "../../Pages/Admin/Ticket/TicketStatusCell";
import RealPagination from "../RealPagination";
import TableLoader from "../TableLoader";
import { Key, SetStateAction, useState } from "react";
import { ToastContainer } from "react-toastify";
import { FaFilePdf, FaFileCsv, FaFileImage, FaFile } from 'react-icons/fa';
import PdfViewer from "../Modals/PdfViewer";
import ImageLightbox from "../ImageLightbox";

const TicketTableComponent = ({
  TYPE,
  data,
  isLoading,
  handlePagination,
  pagination,
  colSpan,
  Requester,
  assignto
}: any) => {
  const [show, setShow] = useState(false);
  const [isPDF, setIsPDF] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const openModal = (fileUrl: SetStateAction<null>, fileType: string, file: any) => {
    setSelectedFile(file);
    setIsPDF(fileType === 'pdf');
    setShow(true);
  };

  console.log('setSelectedFile', selectedFile)

  const getFileIcon = (fileType: any) => {
    switch (fileType) {
      case 'pdf':
        return <FaFilePdf color={"red"} size={25} />;
      case 'csv':
        return <FaFileCsv size={25} color={"green"} />;
      case 'jpeg':
      case 'jpg':
      case 'png':
        return <FaFileImage size={25} color={"gray"} />;
      default:
        return <FaFile size={25} />;
    }
  };
  return (
    <>
      <ToastContainer containerId={"custom1"} />
      <div id="table-container">
        <div className="table-responsive-vertical">
          <div className="table-container">
            <TableLoader isLoading={isLoading} />
            <table id="table" className={" table-hover table-mc-light-blue"}>
              <thead>
                <tr>
                  <th>Ticket Type</th>
                  <th>Severity</th>
                  <th>Issue Description</th>
                  <th>File</th>
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
                      {/* <td data-title="file">
                        {item?.TicketFiles?.length > 0
                          ? item?.TicketFiles?.map((file: any, index: any) => {
                            const fileExtension = file?.filePath?.split('.').pop().toLowerCase();
                            return (
                              <span key={index} style={{ marginRight: '5px', cursor: 'pointer' }} onClick={() => openModal(file.filePath)}>
                                {getFileIcon(fileExtension)}
                              </span>
                            );
                          })
                          : '-'}
                      </td> */}
                      <td data-title="file">
                        {item?.TicketFiles?.length > 0
                          ? item?.TicketFiles.map((file: any, index: any) => {
                            const fileExtension = file?.filePath.split('.').pop().toLowerCase();
                            return (
                              <span
                                key={index}
                                style={{ marginRight: '5px', cursor: 'pointer' }}
                                onClick={() => openModal(file?.filePath, fileExtension, file)} // Pass fileType as the second argument
                              >
                                {getFileIcon(fileExtension)}
                              </span>
                            );
                          })
                          : '-'}
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
                                  TYPE && item?.status === "CLOSED" ? "" :
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
            {isPDF ? (
              <PdfViewer fileUrl={selectedFile} setShow={setShow} show={show} />
            ) : (
              <ImageLightbox images={selectedFile} setShow={setShow} show={show} />
            )}

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






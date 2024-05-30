import moment from "moment";
import { NoRecordFound, TableFetch } from "../../../components/Options";
import RealPagination from "../../../components/RealPagination";

const SubscriptionTable = ({
   data,
   isLoading,
   handlePagination,
   pagination
}: any) => {



   return (
      <div id="table-container">
         <div className="table-responsive-vertical">
            <div className="table-container">
               <table id="table" className={" table-hover table-mc-light-blue"}>
                  <thead>
                     <tr>
                        <th>Reference</th>
                        <th>Subscription Type</th>
                        <th>Subscription Price</th>
                        <th>Subscribed Users</th>
                        <th>Subscription Confirmed</th>
                        <th>Subscription Start date</th>
                        <th>Subscription End date</th>
                     </tr>
                  </thead>
                  <tbody>
                     {isLoading ? (
                        <TableFetch colSpan={9} />
                     ) : data?.length === 0 || data?.length === undefined ? (
                        <NoRecordFound
                           colSpan={9}
                           children={"No Tickets record found!"}
                        />
                     ) : (
                        data?.map((user: any) => (
                           <tr key={user?._id}>
                              <td className="Reference" data-title="Reference">
                                 {user?.id}
                              </td>
                              <td data-title="ticket type">{user?.ticketType}</td>

                              <td data-title="description">$10000</td>
                              <td data-title="affected users">
                                 {user?.affectedUsers === null ? 0 : user?.affectedUsers}
                              </td>
                              <td data-title="Requester">Yes</td>
                              <td data-title="createdAt">
                                 {moment(user?.createdAt)?.format("DD-MMM-YY H:mm:ss")}
                              </td>
                              <td data-title="createdAt">
                                 {moment(user?.createdAt)?.format("DD-MMM-YY H:mm:ss")}
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
   );
};

export default SubscriptionTable;



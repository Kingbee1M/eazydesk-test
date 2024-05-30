import { EntriesLimit } from './Options';
import FilterModal from './FilterModal';
import Search from './Search';
import SubscriptionModal from '../Pages/SuperAdmin/Subscription/SubscriptionModal';
import { ToastContainer } from 'react-toastify';
import RegisterModal from '../Pages/SuperAdmin/ Register/RegisterModal';


const SearchConponent = ({ ID, setEndDates, setStartDates, searchItem, setSearchItem, placeholder, data, filter, show, setShow, limit, handlePagination, subscription, RegModal, report, setTicketType, ticketType,
	setStatus, status, statusFilter
}: any) => {




	return (
		<div id='reports'>
			<ToastContainer position="top-right" containerId={"custom1345"} />

			<div className="search-area">
				<Search
					placeholder={placeholder}
					setSearchItem={setSearchItem}
					searchItem={searchItem}
				/>

				<form>
					{ID && <div className="form-grp">
						<input id="input-search-colunm-two" type="text" placeholder={placeholder}
							value={searchItem}
							onChange={(e) => setSearchItem(e.target.value)}
						/>
					</div>}


					{filter && <FilterModal
						setStartDates={setStartDates}
						setEndDates={setEndDates}
						setShow={setShow}
						show={show}
						handlePagination={handlePagination}
						report={report}
						setTicketType={setTicketType}
						ticketType={ticketType}
						setStatus={setStatus}
						status={status}
						statusFilter={statusFilter}
					/>}

					<EntriesLimit
						limit={limit}
						data={data}
						handlePagination={handlePagination}
						filterLimit={data?.totalTickets}
					/>
				</form>
				{subscription && <SubscriptionModal />}
				{RegModal && <RegisterModal />}
			</div>
		</div>
	)
}

export default SearchConponent
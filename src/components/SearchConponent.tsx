import { EntriesLimit } from './Options';
import FilterModal from './FilterModal';
// import { useIsMobile } from '../hooks/resize';
import Search from './Search';
import SubscriptionModal from '../Pages/SuperAdmin/Subscription/SubscriptionModal';

import { ToastContainer } from 'react-toastify';
import RegisterModal from '../Pages/SuperAdmin/ Register/RegisterModal';


const SearchConponent = ({ ID, handleCustomFilters, setEndDates, setStartDates, searchItem, setSearchItem, placeholder, data, filter, show, setShow, limit, handlePagination, subscription, RegModal }: any) => {


	// const handleChangeFilter = (e: { target: { value: React.SetStateAction<string>; }; }) => {
	// 	setResult(e.target.value);
	// };



	return (
		<div id='reports'  >
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


					{filter && <FilterModal handleCustomFilters={handleCustomFilters} setStartDates={setStartDates} setEndDates={setEndDates} setShow={setShow} show={show} handlePagination={handlePagination} />}

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
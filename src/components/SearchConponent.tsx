import { EntriesLimit, EntriesPerPage, } from './Options';
import FilterModal from './FilterModal';
// import { useIsMobile } from '../hooks/resize';
import Search from './Search';
import { useState } from 'react';

const SearchConponent = ({ ID, setEntriesPerPage, entriesPerPage, handleCustomFilters, setEndDates, setStartDates, searchItem, setSearchItem, placeholder, data, filter, show, setShow, rolePerPage, setRolePerPage, limit, handlePagination }: any) => {


	// const handleChangeFilter = (e: { target: { value: React.SetStateAction<string>; }; }) => {
	// 	setResult(e.target.value);
	// };



	return (
		<div id='reports'  >
			<div className="search-area">
				<Search
					placeholder={placeholder}
					setSearchItem={setSearchItem}
					searchItem={searchItem}

				/>
				<form >
					{ID && <div className="form-grp">
						<input id="input-search-colunm-two" type="text" placeholder={placeholder}
							value={searchItem}
							onChange={(e) => setSearchItem(e.target.value)}
						/>
					</div>}


					{filter && <FilterModal handleCustomFilters={handleCustomFilters} setStartDates={setStartDates} setEndDates={setEndDates} setShow={setShow} show={show} />}
					{/* 
					<EntriesPerPage
						data={data}
						entriesPerPage={entriesPerPage}
						setEntriesPerPage={setEntriesPerPage}
					/> */}
					<EntriesLimit
						limit={limit}
						data={data}
						handlePagination={handlePagination}
						filterLimit={data?.totalTickets}
					/>
				</form>

			</div>
		</div>
	)
}

export default SearchConponent
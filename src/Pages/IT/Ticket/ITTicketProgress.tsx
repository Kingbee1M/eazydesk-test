import { useState } from 'react'
import Header from '../../../components/Header'
import BottomNavigation from '../../../components/BottomNavigation'
import TicketTableComponent from '../../../components/Table/TicketTableComponent'
import SearchConponent from '../../../components/SearchConponent'
import ITSideNav from '../../../components/SideNav/ITSideNav'

const ITTicketProgress = () => {

	const [startDates, setStartDates] = useState([]);
	const [endDates, setEndDates] = useState([]);
	const [show, setShow] = useState(false);
	const [searchItem, setSearchItem] = useState("");
	const [datas, setDatas] = useState([]);

	const [entriesPerPage, setEntriesPerPage] = useState(() => {
		return "6";
	});


	return (
		<div id="page-wrapper">
			<ITSideNav />
			<Header />
			<BottomNavigation />
			<main>
				<div className='dashboard-first-card-boards  mt-2'>
					<div>
						<h5 className='dashboard-first-card-h'>Ticket Progress</h5>
					</div>
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

				<div  >
					<TicketTableComponent
						pageheader={"SERVICE REQUEST"}
						Request={"Service Request"}
						TYPE={"SERVICE"} />
				</div>
			</main>
		</div>
	)
}

export default ITTicketProgress


import { useState } from 'react'
import BottomNavigation from '../../../components/BottomNavigation'
import Header from '../../../components/Header'
import SearchConponent from '../../../components/SearchConponent'
import TicketTableComponent from '../../../components/Table/TicketTableComponent'
import { data } from '../../../components/StateData'
import ITSideNav from '../../../components/SideNav/ITSideNav'

const ITChangeRequest = () => {
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
				<div className='dashboard-first-card-boards '>
					<div>
						<h5 className='dashboard-first-card-h'>Incident Request</h5>
						{/* <p className='dashboard-first-card-p'>15 incident request ticket</p> */}
					</div>
				</div>
				<SearchConponent
					placeholder={"search ticket"}
					setSearchItem={setSearchItem}
					searchItem={searchItem}
					data={data}
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
						pageheader={"CHANGE REQUEST"}
						Request={"Change Request"}
						TYPE={"CHANGE"}
						data={data} />
				</div>
			</main>
		</div>
	)
}

export default ITChangeRequest

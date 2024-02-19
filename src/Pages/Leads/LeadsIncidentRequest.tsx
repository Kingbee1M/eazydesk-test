import React, { useState, useEffect } from 'react';
// import Header from '../components/Header';
// import Table from '../components/Table';
import { HiOutlineSearch } from 'react-icons/hi';
import { RiAlarmWarningFill } from 'react-icons/ri';
import { Modal } from 'react-bootstrap';
// import TicketForm from '../components/TicketForm';
import { useNavigate } from "react-router-dom";
import LeadsHeader from '../../components/LeadsHeader';
import SearchConponent from '../../components/SearchConponent';
import TicketTableComponent from '../../components/Table/TicketTableComponent';
import { data } from '../../components/StateData';
import { EntriesPerPage } from '../../components/TableOptions';


const LeadsIncidentRequest = () => {
	const [startDates, setStartDates] = useState([]);
	const [endDates, setEndDates] = useState([]);
	const [show, setShow] = useState(false);
	const [searchItem, setSearchItem] = useState("");
	const [datas, setDatas] = useState([]);
	const [entriesPerPage, setEntriesPerPage] = useState(() => {
		return "6";
	});

	const handleClose = () => setShow(false)
	const handleShow = () => setShow(true)
	// --- End Modal 
	const [result, setResult] = useState("")



	useEffect(() => {
		// setDisplayData(data?.slice(pagesVisited, pagesVisited + usersPerPage));
		localStorage.setItem("rowsPerPage", entriesPerPage);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [entriesPerPage]);

	return (
		<div id="dashboard">
			<div className="hero-section2">
				<LeadsHeader />
				<div className="hero-search container">
					<div className="hero-search-container">
						<input
							type="text"
							value={result}
							onChange={(e) => setResult(e.target.value)}
						/>
						<span>
							<HiOutlineSearch size={30} color="#fff" />
						</span>
					</div>
				</div>
			</div>
			<main>
				<div className="container-items">
					<h5 className='dashboard-first-card-h'>Incident Request</h5>


					<div className="entries-perpage">
						{data && (
							<EntriesPerPage
								data={data}
								entriesPerPage={entriesPerPage}
								setEntriesPerPage={setEntriesPerPage}
							/>


						)}
					</div>
					<button onClick={handleShow} className='btn'>
						Raise Incident
					</button>
				</div>


				<div  >
					<TicketTableComponent
						pageheader={"Incident Request"}
						Request={"Incident Request"}
						TYPE={"INCIDENT"}
						data={data} />
				</div>
			</main>

			<Modal
				size="lg"
				show={show}
				onHide={handleClose}
				backdrop="static"
				keyboard={false}>
				<Modal.Header closeButton>
					<Modal.Title>Raise a Ticket - Incident Request

					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					{/* <TicketForm
						type="INCIDENT"
						handleCloseModal={handleClose}
					/> */}
				</Modal.Body>
			</Modal>

		</div>
	)
}

export default LeadsIncidentRequest;





import React, { useState, useEffect } from 'react';
import { HiOutlineSearch } from 'react-icons/hi';
import { AiTwotoneSetting } from 'react-icons/ai';
import { Modal } from 'react-bootstrap';
// import TicketForm from '../components/TicketForm';
import { useNavigate } from "react-router-dom";
import LeadsHeader from '../../components/LeadsHeader';
import { EntriesPerPage } from '../../components/TableOptions';
import TicketTableComponent from '../../components/Table/TicketTableComponent';
import { data } from '../../components/StateData';



const LeadsServiceRequest = () => {
	const navigate = useNavigate()

	const [show, setShow] = useState(false)
	const handleClose = () => setShow(false)
	const handleShow = () => setShow(true)
	const [result, setResult] = useState("")
	const [entriesPerPage, setEntriesPerPage] = useState(() => {
		return "10";
	});

	useEffect(() => {
		// setDisplayData(data?.slice(pagesVisited, pagesVisited + usersPerPage));
		localStorage.setItem("rowsPerPage", entriesPerPage);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [entriesPerPage]);



	return (
		<div id="dashboard">
			<div className="hero-section3">
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
			<main  >
				<div className="container-items">
					<h5 className='dashboard-first-card-h'>Service Request </h5>


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
						Service Request
					</button>
				</div>

				<div  >
					<TicketTableComponent
						pageheader={"Incident Request"}
						Request={"Incident Request"}
						TYPE={"SERVICE"}
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
					<Modal.Title>Raise a Ticket - Service Request

					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					{/* <TicketForm
						type={"SERVICE"}
						handleCloseModal={handleClose}
					/> */}
				</Modal.Body>
			</Modal>

		</div>
	)
}

export default LeadsServiceRequest;
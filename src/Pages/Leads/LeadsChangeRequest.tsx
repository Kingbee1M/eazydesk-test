import React, { useState, useEffect } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { FaExchangeAlt } from "react-icons/fa";
import { Modal } from "react-bootstrap";
// import TicketForm from "../components/TicketForm";
import { useNavigate } from "react-router-dom";
import LeadsHeader from "../../components/LeadsHeader";
import { EntriesPerPage } from "../../components/TableOptions";
import { data } from "../../components/StateData";
import TicketTableComponent from "../../components/Table/TicketTableComponent";



const LeadsChangeRequest = () => {
	const navigate = useNavigate();
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const [result, setResult] = useState("");
	const [entriesPerPage, setEntriesPerPage] = useState(() => {
		return "5";
	});

	useEffect(() => {
		// setDisplayData(data?.slice(pagesVisited, pagesVisited + usersPerPage));
		localStorage.setItem("rowsPerPage", entriesPerPage);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [entriesPerPage]);

	return (
		<div id="dashboard">
			<div className="hero-section4">
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
						Change
					</button>
				</div>

				{/* <Table
					ticketType="SERVICE"
					result={result}
					setData={setData}
					entriesPerPage={entriesPerPage}
				/> */}
				<div  >
					<TicketTableComponent
						pageheader={"Incident Request"}
						Request={"Incident Request"}
						TYPE={"CHANGE"}
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
					<Modal.Title>Raise a Ticket - Change Request</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					{/* <TicketForm type={"CHANGE"} handleCloseModal={handleClose} /> */}
				</Modal.Body>
			</Modal>
		</div>
	);
};

export default LeadsChangeRequest;


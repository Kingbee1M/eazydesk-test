import Modal from 'react-bootstrap/Modal';
import ModalHeader from './ModalHeader';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import { Document, Page, pdfjs } from 'react-pdf';
import { useState } from 'react';
const PdfViewer = ({ show, setShow, fileUrl }: any) => {
	pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

	const handleClose = () => setShow(false);
	const [totalPages, setTotalPages] = useState(0);
	const [pageNumber, setPageNumber] = useState(1);
	const [pageScale, setPageScale] = useState(1);


	function onDocumentLoadSuccess({ numPages }: any) {
		setTotalPages(numPages);
	}

	function handleZoomIn() {
		if (pageScale < 3) {
			setPageScale(pageScale + 0.2);
		}
	}

	function handleZoomOut() {
		if (pageScale > 0.3) {
			setPageScale(pageScale - 0.2);
		}
	}

	function handleNext() {
		if (pageNumber < totalPages) {
			setPageNumber(pageNumber + 1);
		}
	}
	function handlePrevious() {
		if (pageNumber > 0) {
			setPageNumber(pageNumber - 1);
		}
	}

	console.log('fileUrl', fileUrl)

	return (
		<>
			<Modal size="lg" show={show} onHide={handleClose} centered >

				<ModalHeader setShow={setShow} headerTitle={"PDF"} />
				<Modal.Body>
					{/* <Worker workerUrl={`https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`}>
						<div style={{ height: '100%' }}>
							<Viewer fileUrl={fileUrl} />
						</div>
					</Worker> */}
					{/* <div style={{ width: '100%' }}>
						<Document file={"https://pdfobject.com/pdf/sample.pdf"}>
							<Page pageNumber={1} />
						</Document>
					</div> */}
					<div className="App-pdf">
						<div className="page-container">
							<Document file={"https://pdfobject.com/pdf/sample.pdf"} onLoadSuccess={onDocumentLoadSuccess}>
								<Page pageNumber={pageNumber} scale={pageScale} />
							</Document>
						</div>
						<div className="footer-pdf">
							<div className="button-container">
								<button onClick={handleZoomIn} disabled={pageScale >= 3}>
									Zoom +
								</button>
								<button onClick={handleZoomOut} disabled={pageScale <= 0.3}>
									Zoom -
								</button>
							</div>
							<div className="page-text">
								Page {pageNumber} of {totalPages}
							</div>
							<div className="button-container">
								<button onClick={handlePrevious} disabled={pageNumber === 1}>
									‹ Previous
								</button>
								<button onClick={handleNext} disabled={pageNumber === totalPages}>
									Next ›
								</button>
							</div>
						</div>
					</div>
				</Modal.Body>
			</Modal >
		</>
	);
}

export default PdfViewer;


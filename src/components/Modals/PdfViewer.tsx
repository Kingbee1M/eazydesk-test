import Modal from 'react-bootstrap/Modal';
import ModalHeader from './ModalHeader';
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { baseUrl } from '../../shared/baseUrl';
const PdfViewer = ({ show, setShow, fileUrl }: any) => {

	const defaultLayoutPluginInstance = defaultLayoutPlugin();
	const handleClose = () => setShow(false);
	const file = baseUrl + "/" + fileUrl.filePath


	return (
		<>
			<Modal size="lg" show={show} onHide={handleClose} centered >
				<ModalHeader setShow={setShow} headerTitle={"PDF"} />
				<Modal.Body>
					<div className="App-pdf"  >
						<div className="page-container">
							<Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.js">
								<div
									style={{
										height: "750px",
										maxWidth: "900px",
										marginLeft: "auto",
										marginRight: "auto"
									}}
								>
									<Viewer
										fileUrl={file}
										plugins={[defaultLayoutPluginInstance]}
									/>
								</div>
							</Worker>
						</div>
					</div>
				</Modal.Body>
			</Modal >
		</>
	);
}

export default PdfViewer;


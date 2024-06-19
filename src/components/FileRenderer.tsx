// src/FileRenderer.js
import React from 'react';
import { MdDownloading } from 'react-icons/md';
import { baseUrl } from 'src/shared/baseUrl';

const FileRenderer = ({ file }: any) => {
	const { filePath, fileType } = file;




	const fileExtension = file?.filePath?.split('.').pop().toLowerCase();
	return (
		<div >
			{(fileExtension === "jpeg" || fileExtension === "jpg" || fileExtension === "png") &&
				<div className="msg-img">
					<img
						crossOrigin="anonymous"
						src={`${baseUrl}/${file?.filePath}`}
						alt="Comment file"
					/>
				</div>
			}
			{(fileExtension === "pdf") &&
				<a className="btn-side-container" href={`${baseUrl}/${filePath}`} download>
					<button className="btn-side">Download PDF</button>
					<span className="btn-side-icon">
						<MdDownloading />
					</span>
				</a>
			}
		</div>
	);
};

export default FileRenderer;

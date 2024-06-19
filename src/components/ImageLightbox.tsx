/* eslint-disable jsx-a11y/img-redundant-alt */
import { useState } from 'react';
import ModalHeader from './Modals/ModalHeader';
import { Modal } from 'react-bootstrap';
import { baseUrl } from '../shared/baseUrl';




function ImageLightbox({ images, show, setShow }: any) {
	// const [mainImage, setMainImage] = useState(images[0]);
	const [mainImage, setMainImage] = useState(images);
	const [isZoomed, setIsZoomed] = useState(false);
	const handleClose = () => setShow(false);
	const handleThumbnailClick = (image: any) => {
		setMainImage(image);
		setIsZoomed(false);
	};

	const handleMainImageClick = () => {
		setIsZoomed(!isZoomed);
	};


 



	return (
		<Modal size="lg" show={show} onHide={handleClose} centered >
			<ModalHeader setShow={setShow} headerTitle={"IMAGE"} />

			<Modal.Body>
				<div className="image-lightbox">
					<div className={`main-image ${isZoomed ? 'zoomed' : ''}`} onClick={handleMainImageClick}>
						<img
							crossOrigin="anonymous"
							src={baseUrl + "/" + images?.filePath}
							alt="Main Image"
							className={isZoomed ? 'zoomed-image' : ''}
						/>
					</div>
					<div className="thumbnails">
						{[images]?.map((image: any, index: any) => (
							<div
								key={index}
								className={`thumbnail ${mainImage === image ? 'active' : ''}`}
								onClick={() => handleThumbnailClick(image)}
							>
								<img
									crossOrigin="anonymous"
									src={baseUrl + "/" + images?.filePath}
									alt={`Thumbnail ${index}`}
									className="thumbnail-image"
								/>
							</div>
						))}
					</div>
				</div>
			</Modal.Body >
		</Modal >
	);
}

export default ImageLightbox;

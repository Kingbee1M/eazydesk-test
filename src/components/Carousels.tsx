import React from 'react'
import { Carousel } from "react-bootstrap";
import first from "../assets/img/bg1.jpg";
import second from "../assets/img/bg2.jpeg";
import third from "../assets/img/bg4.jpeg";
import fourth from "../assets/img/bg5.jpeg";
import fifth from "../assets/img/bg6.jpeg";
import sixth from "../assets/img/bg7.jpg";


const Carousels = () => {


	return (
		<div className='Carousels_container_main'>
			<Carousel fade>
				<Carousel.Item interval={80000}>
					<img className="d-block w-100" src={third} alt="First" />
				</Carousel.Item>
				<Carousel.Item interval={80000}>
					<img className="d-block w-100" src={second} alt="Second" />
				</Carousel.Item>
				<Carousel.Item interval={80000}>
					<img className="d-block w-100" src={fourth} alt="Third" />
				</Carousel.Item>
				<Carousel.Item interval={80000}>
					<img className="d-block w-100" src={first} alt="Fourth" />
				</Carousel.Item>
				<Carousel.Item interval={80000}>
					<img className="d-block w-100" src={fifth} alt="Fifth" />
				</Carousel.Item>
				<Carousel.Item interval={80000}>
					<img className="d-block w-100" src={sixth} alt="sixth" />
				</Carousel.Item>
			</Carousel>
		</div>
	)
}

export default Carousels

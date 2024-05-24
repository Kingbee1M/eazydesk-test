import React from 'react';
import { Link } from 'react-router-dom';
import { RiAlarmWarningFill } from 'react-icons/ri';
import { AiTwotoneSetting } from 'react-icons/ai';
import { FaExchangeAlt } from 'react-icons/fa';
// Assuming your CSS is in this file

const ServiceCards = ({ incident, service, change }: any) => {
	return (
		<div className="service_cards_container">
			<div className="service-card">
				<Link to="/incident-request">
					<div className="card-top">
						<div className="card-icon un">
							<RiAlarmWarningFill size={25} />
						</div>
						<h4>{incident?.length}</h4>
					</div>
					<h5>Incident Request</h5>
				</Link>
			</div>

			<div className="service-card">
				<Link to="/service-request">
					<div className="card-top">
						<div className="card-icon duo">
							<AiTwotoneSetting size={25} />
						</div>
						<h4>{service?.length}</h4>
					</div>
					<h5>Service Request</h5>
				</Link>
			</div>

			<div className="service-card">
				<Link to="/change-request">
					<div className="card-top">
						<div className="card-icon trio">
							<FaExchangeAlt size={25} />
						</div>
						<h4>{change?.length}</h4>
					</div>
					<h5>Change Request</h5>
				</Link>
			</div>
		</div>
	);
};

export default ServiceCards;

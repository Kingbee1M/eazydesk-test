import { useState } from 'react'
import { BiPurchaseTag } from 'react-icons/bi';
import { BsPencil, BsThreeDots } from 'react-icons/bs';
import { FaRegCalendarMinus } from 'react-icons/fa6';
import moment from 'moment'
import { SVGLoader } from '../../components/SVGLoader';
import { FaRegFaceFrownOpen } from "react-icons/fa6";


const TaskPrioritiesCard = ({ id, title, date, time, tag }: any) => {

	const [selectedTeam, setSelectedTeam] = useState(null);

	const handleTeamOptionsClick = (teamId: any) => {
		setSelectedTeam(teamId);
	};

	const closeTeamOptions = () => {
		setSelectedTeam(null);
	};


	return (

		<div key={id} className='team-card-container-sup-insight mb-1' >
			<div className='team-card-container-sup-insight-inner'>
				<input
					id={`wp-comment-cookies-consent-${id}`}
					name={`wp-comment-cookies-consent-${id}`}
					type="checkbox"
					value="yes"
				/>
				<div className='mt-3'>
					<h5>{title}</h5>
					<div className='team-card-container-sup-ptext-nem'>
						<FaRegCalendarMinus size={13} /> <p>{date} - {time}</p><BiPurchaseTag size={15} /> <p>{tag}</p>
					</div>
				</div>
			</div>
			<div>
				<div className='BsThreeDots-width' onMouseLeave={closeTeamOptions}>
					<BsThreeDots size={18} onClick={() => handleTeamOptionsClick(id)} onMouseEnter={() => handleTeamOptionsClick(id)} />
					{selectedTeam === id && (
						<div className='team-card-dropdown'>
							<div className='team-card-option' onClick={() => setSelectedTeam}>
								<BsPencil size={16} />
								<span>Task Update</span>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

const TaskPriorities = ({ Prioritiesdata, selectedPriority, isLoading, text }: any) => {



	return (
		<div className='prioritiesdata-components' >
			{isLoading ? (<div className='loading-container-insight'>
				<SVGLoader width={"40px"} height={"40px"} color={"#000"} />
			</div>
			) : Prioritiesdata?.length === 0 || Prioritiesdata === undefined || Prioritiesdata === null ? (
				<div className='loading-container-insight'>
					<div className='Home_Empty_State-container'>
						<FaRegFaceFrownOpen size={50} color='#ABACAE' />
						<div>
							<h5 className='first-card-avialable'>No {text} task avialable!</h5>
						</div>
					</div>
				</div>
			) :
				Prioritiesdata?.map((item: any) => (
					<TaskPrioritiesCard
						key={item?.id}
						id={item?.id}
						title={item?.task?.title}
						date={selectedPriority === 'NEW' ? moment(item?.task?.createdAt).format("MMM Do YY") : selectedPriority === 'COMPLETED' ? moment(item?.task?.dueDate).format("MMM Do YY") : moment(item?.task?.dueDate).format("MMM Do YY")}
						time={selectedPriority === 'NEW' ? moment(item?.task?.createdAt).startOf('day').fromNow() : selectedPriority === 'COMPLETED' ? moment(item?.task?.createdAt).startOf('day').fromNow() : moment(item?.task?.dueDate).startOf('day').fromNow()}
						tag={item?.task?.description}
					/>
				))}
		</div>
	);
};


export default TaskPriorities

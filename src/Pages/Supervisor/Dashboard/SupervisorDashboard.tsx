import Header from '../../../components/Header'
import BottomNavigation from '../../../components/BottomNavigation';
import { RiArrowUpSFill } from "react-icons/ri";
import dIcon1 from "../../../assets/DashboardIcons/Dicon1.svg"
import dIcon2 from "../../../assets/DashboardIcons/Dicon2.svg"
import dIcon3 from "../../../assets/DashboardIcons/Dicon3.svg"
import dIcon4 from "../../../assets/DashboardIcons/Dicon4.svg"
import { GoDotFill } from "react-icons/go";
import ThreeinOneBarChart from '../../../components/ThreeinOneBarChart';
import DoughnutChat from '../../../components/DoughnutChat';
import SupervisorSideNav from '../../../components/SideNav/SupervisorSideNav';


const SupervisorDashboard = () => {



	return (
		<div id="page-wrapper">
			<SupervisorSideNav />
			<Header />
			<BottomNavigation />
			<main>
				<div className='dashboard_container_grid'>
					<div className='total_card'>
						<div className='total_card_flex'>
							<h6>Total Sales</h6>
							<div className='total_card_flex_icon1'>
								<img src={dIcon1} alt='new' crossOrigin="anonymous" />
							</div>
						</div>
						<h1 className='total_card_flex_icon_h1'>6,784</h1>
						<div>
							<div className='total_card_flex_icon_source'>
								<div className='total_card_ArrowUpSFill'>	<p>10%</p> <RiArrowUpSFill size={20} /> </div>
								<h3>+$150 today</h3>
							</div>
						</div>
					</div>
					<div className='total_card'>
						<div className='total_card_flex'>
							<h6>Inprogress</h6>
							<div className='total_card_flex_icon2'>
								<img src={dIcon2} alt='new' crossOrigin="anonymous" />
							</div>
						</div>
						<h1 className='total_card_flex_icon_h1'>1,920</h1>
						<div>
							<div className='total_card_flex_icon_source'>
								<div className='total_card_ArrowUpSFill'>	<p>50%</p> <RiArrowUpSFill size={20} /> </div>
								<h3>View orders</h3>
							</div>
						</div>
					</div>
					<div className='total_card'>
						<div className='total_card_flex'>
							<h6>Completed Tickets</h6>
							<div className='total_card_flex_icon3'>
								<img src={dIcon3} alt='new' crossOrigin="anonymous" />
							</div>
						</div>
						<h1 className='total_card_flex_icon_h1'>4,412</h1>
						<div>
							<div className='total_card_flex_icon_source'>
								<div className='total_card_ArrowUpSFill'>	<p>30%</p> <RiArrowUpSFill size={20} /> </div>
								<h3>In last week</h3>
							</div>
						</div>
					</div>
					<div className='total_card'>
						<div className='total_card_flex'>
							<h6>Unsolved Tickets</h6>
							<div className='total_card_flex_icon4'>
								<img src={dIcon4} alt='new' crossOrigin="anonymous" />
							</div>
						</div>
						<h1 className='total_card_flex_icon_h1'>329</h1>
						<div>
							<div className='total_card_flex_icon_source'>
								<div className='total_card_ArrowUpSFill'>	<p>70%</p> <RiArrowUpSFill size={20} /> </div>
								<h3>2477 tickets automated</h3>
							</div>
						</div>
					</div>
				</div>

				<div className='dash_statistics_container'>
					<div className='dash_statistics_sub1'>
						<div>
							<h3>Ticket</h3>
							<p>Summary</p>
						</div>
						<div>
							<DoughnutChat />
						</div>
					</div>
					<div className='dash_statistics_sub2'>
						<div className='dash_statistics_sub2_text'>
							<div>
								<h3>Statistics</h3>
								<p>Revenue and Sales</p>
							</div>
							<div className='sta_color_container_main'>
								<div className='sta_color_container'>
									<GoDotFill color='#E5ECFB' />
									<small>New</small>
								</div>
								<div className='sta_color_container'>
									<GoDotFill color='#0240bc90' />
									<small>Inprogress</small>
								</div>
								<div className='sta_color_container'>
									<GoDotFill color='#0240BC' />
									<small>Completed</small>
								</div>
							</div>
						</div>
						<ThreeinOneBarChart threeinone={"threeinone"} />
					</div>
				</div>

			</main>
		</div>
	)
}

export default SupervisorDashboard













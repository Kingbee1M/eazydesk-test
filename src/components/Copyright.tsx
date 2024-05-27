
import logo from '../assets/img/outcess-icon-haf.png';

const Copyright = () => {
	const today = new Date();
	const year = today.getFullYear();
	return (
		<div className='cp-text1'>
			<footer  >
				© Copyright {year} OUTCESS. All rights reserved.
			</footer>
			<img src={logo} alt="Profile Display" crossOrigin="anonymous" className='logo-buttom-padding' />
		</div>

	);
};

export default Copyright;

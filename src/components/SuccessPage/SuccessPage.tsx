import { useState } from 'react'
import { useParams } from 'react-router-dom';
import CountdownTimer from '../../hooks/CountdownTimer';
import PowerResetComponent from '../../hooks/PowerResetComponent';
import { Spinner } from 'react-bootstrap';

const SuccessPage = () => {
	const { email } = useParams();
	const [isLoading, setIsLoading] = useState(false);

	const emailServiceUrls: any = {
		'gmail.com': 'https://mail.google.com/',
		'yahoo.com': 'https://mail.yahoo.com/',
		'outlook.com': 'https://outlook.live.com/',
		'aol.com': 'https://mail.aol.com/',
		'icloud.com': 'https://www.icloud.com/mail',
		'protonmail.com': 'https://mail.protonmail.com/',
		'zoho.com': 'https://mail.zoho.com/',
		'yandex.com': 'https://mail.yandex.com/',
		// Add more email domains and their corresponding URLs here
		'*': 'https://www.example.com/', // Default URL for other email domains
	};


	const EmailServiceRedirect = (email: any) => {
		// Extract domain from email
		const domain = email.substring(email.lastIndexOf('@') + 1);

		// Check if domain is in the emailServiceUrls mapping
		if (domain in emailServiceUrls) {
			// Open the corresponding email service URL in a new tab
			window.open(emailServiceUrls[domain], '_blank');
		} else {
			// If the domain is not in the mapping, use the default URL
			window.open(emailServiceUrls['*'], '_blank');
		}

		// This component doesn't render anything, as it redirects immediately
		return null;
	};


	return (
		<div className="container-page">
			{isLoading ? <Spinner /> :
				<div>
					<div className="heading">
						<span className="tick-container"><i className="tick">&nbsp;</i></span>
						<span>Account not verified!🙁 Verification link has been resent to your mail</span>
					</div>
					<div className="text-container">
						<PowerResetComponent setIsLoading={setIsLoading} isLoading={isLoading} email={email || ''} />
						<CountdownTimer seconds={59} EmailServiceRedirect={EmailServiceRedirect} email={email} />
						<div>Click the button below, if you are not redirected to the website.</div>
						<button className="primary-button" onClick={() => EmailServiceRedirect(email)}>Verify Email</button>
					</div>
				</div>}
		</div>
	)
}

export default SuccessPage

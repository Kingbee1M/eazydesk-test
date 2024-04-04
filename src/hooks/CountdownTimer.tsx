import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ seconds, EmailServiceRedirect, email }: { seconds: number, EmailServiceRedirect: any, email: any }) => {
	const [timeLeft, setTimeLeft] = useState(seconds);

	useEffect(() => {
		const timer = setInterval(() => {
			setTimeLeft((prevTime) => {
				if (prevTime === 0) {
					EmailServiceRedirect(email);
					clearInterval(timer);
					return 0;
				} else {
					return prevTime - 1;
				}
			});
		}, 1000);

		return () => clearInterval(timer);
	}, [seconds, EmailServiceRedirect, email]);

	return (
		<div>
			You will be redirected to the website in {timeLeft} seconds.
		</div>
	);
};

export default CountdownTimer;

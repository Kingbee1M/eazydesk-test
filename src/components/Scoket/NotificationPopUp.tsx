import { toast, ToastContainer } from 'react-toastify';
import noti from '../NotificationSound/IPhoneNotification.mp3';
import { customId } from '../Options';
import { SocketContext } from './SocketContext';
import { useContext } from 'react';




const NotificationPopUp = () => {
	const socket: any = useContext(SocketContext);
	// @ts-ignore  
	const userInfo = JSON.parse(localStorage.getItem("service_desk"));

	// Audio File
	const myAudio = new Audio(noti);




	socket.on(userInfo?.email?.toString() + ":newTicket", (org: any) => {

		if (org) {
			toast.success(org?.ticketType, { toastId: customId });

			myAudio?.play()
		}

	});

	socket.on(`${userInfo?.companyId}:comment`, (org: any) => {

		if (org) {
			toast.success(org?.comment, { toastId: customId });
			myAudio?.play()

		}
	});





	return (
		<>
			<ToastContainer position="top-right" containerId={"custom1"} />
		</>
	)

}
export default NotificationPopUp
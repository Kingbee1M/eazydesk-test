import { toast, ToastContainer } from 'react-toastify';
import noti from '../NotificationSound/IPhoneNotification.mp3';
import { customId } from '../Options';
import { SocketContext } from './SocketContext';
import { useContext } from 'react';




const NotificationPopUp = ({ setRefresh }: any) => {
	const socket: any = useContext(SocketContext);
	// @ts-ignore  
	const userInfo = JSON.parse(localStorage.getItem("service_desk"));
	// Audio File
	const myAudio = new Audio(noti);




	socket.on(userInfo?.email?.toString() + ":newTicket", (org: any) => {

		if (org) {
			toast.success(org?.ticketType, { toastId: customId });

			// myAudio?.play()
		}
		setTimeout(() => {
			setRefresh(false)
		}, 1000);
	});

	socket.on(`${userInfo?.companyId}:comment`, (org: any) => {

		if (org) {
			setRefresh(true)
			toast.success(org?.comment, { toastId: customId });
			// myAudio?.play()
			setTimeout(() => {
				setRefresh(false)
			}, 1000);

		}
	});





	return (
		<>
			<ToastContainer containerId={"custom1"} />
		</>
	)

}
export default NotificationPopUp
import axios from "axios";
import createHttpService from "../../helpers/HttpService";
import { baseUrl, buildDynamicURL } from "../../shared/baseUrl";




const getTicket = async () => {
	const HttpService = createHttpService();
	const { data }: any = await HttpService.get(`/api/v2/ticket`)
	return data
}
const getItTicket = async (datas: any) => {
	// Destructure parameters from datas object
	const { endDate, startDate, limit, page, ticketType, ticketId } = datas;
	const base = baseUrl + `/api/v2/ticket/itsupport`;
	const url = buildDynamicURL(null, startDate, endDate, limit, page, base, ticketType, ticketId);
	const { data } = await axios.get(url)
	return data;
}


const getTicketID = async (datas: any) => {
	const { endDate, startDate, limit, page, ticketType, ticketId } = datas
	const base = baseUrl + `/api/v2/ticket/itsupport`
	const url = buildDynamicURL(null, startDate, endDate, limit, page, base, ticketType, ticketId);
	const HttpService = createHttpService();
	const { data }: any = await HttpService.get(url)
	// const { data } = await axios.get(url)
	return data
}
const admingetTicket = async (datas: any) => {
	const { endDate, startDate, limit, page, ticketType, ticketId } = datas
	const base = baseUrl + `/api/v2/ticket/admin`
	const url = buildDynamicURL(null, startDate, endDate, limit, page, base, ticketType, ticketId);
	const { data } = await axios.get(url)

	return data
}

const viewTicket = async (id: any) => {
	const HttpService = createHttpService();
	const { data }: any = await HttpService.get(`/api/v2/ticket/${id}`)
	// console.log('data', data)
	return data
}

const createTicket = async (formData: any) => {
	const HttpService = createHttpService();
	const { data }: any = await HttpService.post(`/api/v2/ticket`, formData)
	return data
}
const itAssignTicket = async (datas: any) => {
	const { id, formData } = datas
	const HttpService = createHttpService();
	const { data }: any = await HttpService.post(`/api/v2/ticket/${id}/itsupport`, formData)
	return data
}

const getTicketAssignTicket = async (datas: any) => {
	const { endDate, startDate, limit, page, ticketType, ticketId } = datas;
	const base = baseUrl + `/api/v2/ticket/itsupport`;
	const url = buildDynamicURL(null, startDate, endDate, limit, page, base, ticketType, ticketId);
	const { data } = await axios.get(url)
	return data
}

const dashBoardInfo = async (datas: any) => {
	const HttpService = createHttpService();
	const { data }: any = await HttpService.get(`/api/v2/ticket/totals`)
	return data
}





const ticketService = {
	getTicket,
	createTicket,
	getItTicket,
	admingetTicket,
	getTicketID,
	viewTicket,
	itAssignTicket,
	getTicketAssignTicket,
	dashBoardInfo
}

export default ticketService
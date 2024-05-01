import axios from "axios";
import createHttpService from "../../helpers/HttpService";
import { baseUrl, buildDynamicURL } from "../../shared/baseUrl";


// Destructure parameters from datas object
// const { endDate, startDate, limit, page, ticketType, ticketId, status } = datas;
// const base = baseUrl + `/api/v2/ticket`;
// const url = buildDynamicURL(null, startDate, endDate, limit, page, base, ticketType, ticketId, status);
// const { data } = await axios.get(url)

const getTicket = async () => {
	const HttpService = createHttpService();
	const { data }: any = await HttpService.get(`/api/v2/ticket`)
	return data
}
const getItTicket = async () => {
	const HttpService = createHttpService();
	const { data }: any = await HttpService.get(`/api/v2/ticket/itsupport`)
	return data
}

const getItTicketParameter = async (datas: any) => {
	// Destructure parameters from datas object
	const { endDate, startDate, limit, page, ticketType, ticketId, status } = datas;
	const base = baseUrl + `/api/v2/ticket/assigned_tickets`;
	const url = buildDynamicURL(null, startDate, endDate, limit, page, base, ticketType, ticketId, status);
	const { data } = await axios.get(url)

	return data;
}


const getTicketID = async (datas: any) => {
	const { endDate, startDate, limit, page, ticketType, ticketId, status } = datas
	const base = baseUrl + `/api/v2/ticket/itsupport`
	const url = buildDynamicURL(null, startDate, endDate, limit, page, base, ticketType, ticketId, status);
	const HttpService = createHttpService();
	const { data }: any = await HttpService.get(url)

	return data
}
const admingetTicket = async (datas: any) => {
	const { endDate, startDate, limit, page, ticketType, ticketId, status } = datas
	const base = baseUrl + `/api/v2/ticket/admin`
	const url = buildDynamicURL(null, startDate, endDate, limit, page, base, ticketType, ticketId, status);
	const { data } = await axios.get(url)

	return data
}

const viewTicket = async (id: any) => {
	const HttpService = createHttpService();
	const { data }: any = await HttpService.get(`/api/v2/ticket/${id}`)

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
	const { endDate, startDate, limit, page, ticketType, ticketId, status } = datas;
	const base = baseUrl + `/api/v2/ticket/itsupport`;
	const url = buildDynamicURL(null, startDate, endDate, limit, page, base, ticketType, ticketId, status);
	const { data } = await axios.get(url)
	return data
}

const dashBoardInfo = async () => {
	const HttpService = createHttpService();
	const { data }: any = await HttpService.get(`/api/v2/ticket/totals`)
	return data
}

const updateTicket = async (datas: any) => {
	const { id, inputs } = datas
	const HttpService = createHttpService();
	const { data }: any = await HttpService.patch(`/api/v2/ticket/${id}/itsupport`, {
		"status": inputs
	})
	return data
}
const giveApproval = async (datas: any) => {
	const { id, value } = datas
	const HttpService = createHttpService();
	const { data }: any = await HttpService.patch(`/api/v2/ticket/${id}/admin`, value)
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
	getItTicketParameter,
	dashBoardInfo,
	updateTicket,
	giveApproval
}

export default ticketService
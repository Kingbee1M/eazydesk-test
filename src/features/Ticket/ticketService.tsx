import axios from "axios";
import createHttpService from "../../helpers/HttpService";
import { baseUrl, buildDynamicURL } from "../../shared/baseUrl";




const getTicket = async () => {
	const HttpService = createHttpService();
	const { data }: any = await HttpService.get(`/api/v2/ticket`)
	return data
}
const getItTicket = async (datas: any) => {
	const { endDate, startDate, limit, page, ticketType, ticketId } = datas
	const base = baseUrl + `/api/v2/ticket/itsupport`
	const url = buildDynamicURL(null, startDate, endDate, limit, page, base, ticketType, ticketId);
	
	// const HttpService = createHttpService();
	// const { data }: any = await HttpService.get(url)
	const { data } = await axios.get(url)
	return data
}
const getTicketID = async (datas: any) => {
	const { endDate, startDate, limit, page, ticketType, ticketId } = datas
	const base = baseUrl + `/api/v2/ticket/itsupport`
	const url = buildDynamicURL(null, startDate, endDate, limit, page, base, ticketType, ticketId);
	// const HttpService = createHttpService();
	// const { data }: any = await HttpService.get(url)
	const { data } = await axios.get(url)
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
	const {id , assignedUserId} = datas
	const HttpService = createHttpService();
	const { data }: any = await HttpService.post(`/api/v2/ticket/${id}/itsupport`,{"assignedUserId":assignedUserId})
	console.log('data', assignedUserId)
	return data
}

// const assignTicket = async (input: any) => {
// 	const HttpService = createHttpService();
// 	const { data }: any = await HttpService.post(`/api/v1/assigned-ticket`, input)
// 	return data
// }

// const getAssignTicketID = async (id: any) => {
// 	const HttpService = createHttpService();
// 	const { data }: any = await HttpService.get(`/api/v1/assigned-ticket/${id}/employee`)
// 	return data
// }

// const viewTicket = async (id: any) => {
// 	const HttpService = createHttpService();
// 	const { data }: any = await HttpService.get(`tickets/${id}`)
// 	return data
// }

// const deleteTicket = async (id: any) => {
// 	const HttpService = createHttpService();
// 	const { data }: any = await HttpService.deleteRequest(`/api/v1/ticket/${id}`)
// 	return data
// }
// const updateTicket = async (value: any) => {
// 	const HttpService = createHttpService();
// 	const { id, input } = value
// 	const { data }: any = await HttpService.patch(`/api/v1/assigned-ticket/${id}/status`, input)
// 	return data
// }
// const adminUpdateTicket = async (value: any) => {
// 	const HttpService = createHttpService();
// 	const { id, input } = value
// 	const { data }: any = await HttpService.patch(`/api/v1/ticket/${id}`, input)
// 	return data
// }
// const noteTicket = async (input: any) => {
// 	const HttpService = createHttpService();
// 	const { id, inputs } = input
// 	const { data }: any = await HttpService.patch(`tickets/${id}/notes`, inputs)
// 	return data
// }
// const acceptTicket = async (input: any) => {
// 	const HttpService = createHttpService();
// 	const { id, inputs } = input
// 	const { data }: any = await HttpService.patch(`/api/v1/assigned-ticket/${id}/status`, inputs)
// 	return data
// }
// const markTicket = async (input: any) => {
// 	const HttpService = createHttpService();
// 	const { id, inputs } = input
// 	const { data }: any = await HttpService.patch(`/api/v1/assigned-ticket/${id}/status`, inputs)
// 	return data
// }
// const acknowledgeTicket = async (input: any) => {
// 	const HttpService = createHttpService();
// 	const { id, inputs } = input
// 	const { data }: any = await HttpService.patch(`/api/v1/assigned-ticket/supervisor/${id}/status`, inputs)
// 	return data
// }
// const getSupervisorTicket = async (ids: any) => {
// 	const HttpService = createHttpService();
// 	const { data }: any = await HttpService.get(`/api/v1/ticket/supervisor/${ids}`)
// 	return data
// }





const ticketService = {
	getTicket,
	createTicket,
	getItTicket,
	admingetTicket,
	getTicketID,
	viewTicket,
	itAssignTicket,
}

export default ticketService
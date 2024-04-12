import createHttpService from "../../helpers/HttpService";




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

// const getTicketbyID = async (id: any) => {
// 	const HttpService = createHttpService();
// 	const { data }: any = await HttpService.get(`/api/v1/ticket/${id}`)
// 	return data
// }

const createTicket = async (formData: any) => {
	const HttpService = createHttpService();
	const { data }: any = await HttpService.post(`/api/v2/ticket`, formData)
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
	// viewTicket,
	// deleteTicket,
	// updateTicket,
	// noteTicket,
	// adminUpdateTicket,
	// assignTicket,
	// getAssignTicketID,
	// acceptTicket,
	// getTicketbyID,
	// markTicket,
	// acknowledgeTicket,
	// getSupervisorTicket
}

export default ticketService
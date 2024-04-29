import axios from "axios";
import createHttpService from "../../helpers/HttpService";
import { baseUrl, buildDynamicURL } from "../../shared/baseUrl";




const getComment = async (id: any) => {
	const HttpService = createHttpService();
	const { data }: any = await HttpService.get(`/api/v2/comment/${id}`)
	return data
}
const getItComment = async (datas: any) => {
	const { endDate, startDate, limit, page, ticketType, ticketId, status } = datas
	const base = baseUrl + `/api/v2/comment?ticketId`
	const url = buildDynamicURL(null, startDate, endDate, limit, page, base, ticketType, ticketId, status);
	// const HttpService = createHttpService();
	// const { data }: any = await HttpService.get(url)
	const { data } = await axios.get(url)
	return data
}
const admingetComment = async (datas: any) => {
	const { endDate, startDate, limit, page, ticketType, ticketId, status } = datas
	const base = baseUrl + `/api/v2/comment?ticketId`
	const url = buildDynamicURL(null, startDate, endDate, limit, page, base, ticketType, ticketId, status);
	const { data } = await axios.get(url)

	return data
}



const createComment = async (formData: any) => {
	const HttpService = createHttpService();
	const { data }: any = await HttpService.post(`/api/v2/comment`, formData)
	return data
}






const commentService = {
	getComment,
	createComment,

}

export default commentService
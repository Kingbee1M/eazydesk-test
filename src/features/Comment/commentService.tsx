
import createHttpService from "../../helpers/HttpService";




const getComment = async (id: any) => {
	const HttpService = createHttpService();
	const { data }: any = await HttpService.get(`/api/v2/comment/${id}`)
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
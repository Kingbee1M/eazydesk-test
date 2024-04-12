import createHttpService from "../../helpers/HttpService";




const getCompany = async () => {
	const HttpService = createHttpService();
	const { data }: any = await HttpService.get(`/api/v2/company`)
	return data
}

const createCompany = async (input: any) => {
	const HttpService = createHttpService();
	const { data }: any = await HttpService.post(`/api/v2/company`, input)
	return data
}

const viewCompany = async (id: any) => {
	const HttpService = createHttpService();
	const { data }: any = await HttpService.get(`/api/v2/company/${id}`)
	return data
}

const deleteCompany = async (id: any) => {
	const HttpService = createHttpService();
	const { data }: any = await HttpService.deleteRequest(`/api/v2/company/${id}`)
	return data
}
const updateCompany = async (value: any) => {
	const HttpService = createHttpService();
	const { id, input } = value
	const { data }: any = await HttpService.put(`/api/v2/company/${id}`, input)
	return data
}






const CompanyService = {
	getCompany,
	createCompany,
	viewCompany,
	deleteCompany,
	updateCompany,
}

export default CompanyService
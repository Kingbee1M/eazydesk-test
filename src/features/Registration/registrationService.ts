import createHttpService from "../../helpers/HttpService";

 
 
 

 // Registration
const userRegistration = async (value: any) => {   
  	const HttpService = createHttpService();
  const { data } = await HttpService.post('/api/v1/auth/admin-register-user',value) 
  return data
}

 // Get All Reguser
const getallReguser = async () => {  
  const HttpService = createHttpService();
  const { data } = await HttpService.get('/api/v2/auth/users' ) 
  return data
}

 // Get Login User
const getLoginUser = async () => {  
    const HttpService = createHttpService();
  const { data } = await HttpService.get('/api/v1/auth/users/logged-in' )   
  return data
}


// Get user by Agent role
const getUserByRole = async () => {  
  const HttpService = createHttpService();
  const { data } = await HttpService.get('/api/v1/auth/users/role/FSR') 
  return data
}


// Reset  password
const resetPassword = async (value: any) => {  
  const HttpService = createHttpService();
  const {id ,newPassword} = value
  const { data } = await HttpService.post(`/api/v1/auth/reset-password/${id}` ,{"password":newPassword } )  
  return data
}


// Get user by Agent role
const edituser = async (value: any) => {  
    const HttpService = createHttpService();
  const { data } = await HttpService.put( '/api/v1/auth/users/admin-update-user',value ) 
  return data
}

// Get Supervisors
const getsupervisors = async ( ) => {  
    const HttpService = createHttpService(); 
    const { data } = await HttpService.get('/api/v1/auth/users/supervisors') 
  return data
}


const registrationSlice = { 
  userRegistration,
  getallReguser,
  getLoginUser,
  getUserByRole,
  resetPassword,
  edituser,
  getsupervisors
}

export default registrationSlice
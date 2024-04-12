import createHttpService from "../../helpers/HttpService";

 
 
 

 // Sign-Up
const signUp = async (inputs: any) => {   
  	const HttpService = createHttpService();
  const { data } = await HttpService.post('/api/v2/auth/signup-user',inputs) 
  return data
}
 // Registration
const userRegistration = async (input: any) => {   
  	const HttpService = createHttpService();
  const { data } = await HttpService.post('/api/v2/auth/admin-create-user',input) 
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
  const { data } = await HttpService.post(`/api/v2/auth/reset-password/${id}` ,{"password":newPassword } )  
  return data
}


// Edit User
const edituser = async (value: any) => {  
    const {id ,input} = value
    const HttpService = createHttpService();
  const { data } = await HttpService.put( `/api/v2/auth/admin-update-user/${id}`,input ) 
  return data
}

// Get Supervisors
const getsupervisors = async ( ) => {  
    const HttpService = createHttpService(); 
    const { data } = await HttpService.get('/api/v1/auth/users/supervisors') 
  return data
}


const registrationSlice = { 
  signUp,
  userRegistration,
  getallReguser,
  getLoginUser,
  getUserByRole,
  resetPassword,
  edituser,
  getsupervisors
}

export default registrationSlice
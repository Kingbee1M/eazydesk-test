import axios from "axios";
import createHttpService from "../../helpers/HttpService";
import { baseUrl } from "../../shared/baseUrl";  
import DataService from "./dataService";
 
 
const dataService = DataService();
 

//  Login user 
 const login = async (value: any) => { 
   const { data } = await axios.post(baseUrl + '/api/v2/auth/login-user', value) 
   if (data) { 
     try {    
       dataService?.setToken(data?.data?.token)  
       localStorage.setItem('service_desk', JSON.stringify(data?.data?.user));     
  } catch (e) {
     console.log(`isLoggedIn in error ${e}`)
  }
  }
  return data
}

 
 
  // logout  
const logout = async () => { 
   const HttpService = createHttpService();
  const { data } = await HttpService.get( '/api/v2/auth/signout')  
   return data
};


  // View user by ID
const ViewUserByID = async (id: any) => {
  const HttpService = createHttpService(); 
  const { data } = await HttpService.get( `/api/v2/auth/users/user/${id}`)  
   return data
};


  // Forget Password
const forgetPassword = async (email: any) => { 
   const HttpService = createHttpService(); 
  const { data } = await HttpService.post( `/api/v2/auth/forgot-password`,email)  
   return data
};

  // Reset Password
const resetPassword = async (value: any) => { 
  const HttpService = createHttpService(); 
  const { input, id}= value; 
  const { data } = await HttpService.post( `/api/v2/auth/reset-password/${id}`,input)  
   return data
};

  // Update Profile
const updateProfile = async (value: any) => { 
  const HttpService = createHttpService(); 
  const { data } = await HttpService.patch( `/api/v2/auth/user/update-profile`, value)  
   return data
};

  // Current User
const currentUser = async () => {  
    const HttpService = createHttpService(); 
  const { data } = await HttpService.get( `/api/v2/auth/current-user`)  
   return data
};
  // Supervisor User
const supervisorUser = async (id:any) => {  
    const HttpService = createHttpService(); 
  const { data } = await HttpService.get( `/api/v2/auth/users/supervisor/${id}`)  
   return data
};

  
  export const logoutUserAction = () => ( ) => {
  localStorage.removeItem("service_desk");     
};



const authService = { 
  logout,
  login,  
  ViewUserByID,
  forgetPassword,
  resetPassword,
  updateProfile,
  currentUser,
  supervisorUser,
  logoutUserAction
}

export default authService
 
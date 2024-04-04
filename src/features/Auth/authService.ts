import axios from "axios";
import createHttpService from "../../helpers/HttpService";
import { baseUrl } from "../../shared/baseUrl";  

 
 
 
 
 // Login user 
 const login = async (value: any) => { 
   const { data } = await axios.post(baseUrl + '/api/v2/auth/login-user', value) 
   if (data) { 
     try {   
 
      	// @ts-ignore 
        localStorage.setItem('service_desk', JSON.stringify(data?.data?.user));  
  axios.defaults.headers.common['Authorization'] = `Bearer ${data?.token}`;  
    localStorage.setItem("loginToast", JSON.stringify(data?.message)); 
  } catch (e) {
     console.log(`isLoggedIn in error ${e}`)
  }
  }
  return data
}
// const login = async (value: any) => { 
//    const HttpService = createHttpService();
//   const { data } = await HttpService.post( '/api/v1/auth/signin-user', value ) 
 
//   if (data) { 
//     try {    
//       localStorage.setItem('userinvento', JSON.stringify(data?.data));  
//   } catch (e) {  console.log(`isLoggedIn in error ${e}`)  }  }
//   return data
// }
   
  // logout  
const logout = async () => { 
   const HttpService = createHttpService();
  const { data } = await HttpService.get( '/api/v2/auth/signout')  
   return data
};


  // View user by ID
const ViewUserByID = async (id: any) => {
  const HttpService = createHttpService(); 
  const { data } = await HttpService.get( `/api/v1/auth/users/user/${id}`)  
   return data
};


  // Forget Password
const forgetPassword = async (email: any) => { 
   const HttpService = createHttpService(); 
  const { data } = await HttpService.post( `/api/v1/auth/forgot-password`,{  "email": email })  
   return data
};

  // Forget Password
const resetPassword = async (email: any) => { 
 const HttpService = createHttpService(); 
  const { data } = await HttpService.post( `/api/v1/auth/reset-password`,{  "email": email })  
   return data
};

  // Update Profile
const updateProfile = async (value: any) => { 
  const HttpService = createHttpService(); 
  const { data } = await HttpService.patch( `/api/v1/auth/user/update-profile`, value)  
   return data
};

  // Current User
const currentUser = async () => {  
    const HttpService = createHttpService(); 
  const { data } = await HttpService.get( `/api/v1/auth/current-user`)  
   return data
};
  // Supervisor User
const supervisorUser = async (id:any) => {  
    const HttpService = createHttpService(); 
  const { data } = await HttpService.get( `/api/v1/auth/users/supervisor/${id}`)  
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
 
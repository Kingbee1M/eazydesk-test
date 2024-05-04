import axios from "axios";  
import { baseUrl } from "../shared/baseUrl";
import DataService from "../features/Auth/dataService";
import { getUserAuthorizationConfig } from "../hooks/config";
import { handleError } from "../components/handleError/handleError";
 
 


 // Create an instance of DataService
const dataService = DataService(); 
const createHttpService = () => {   
 // Retrieve the token from the data service
const token = dataService.getToken(); 
// Set the token in the data service if it exists
if (token) {
  dataService.setToken(token);
}


 

const get = async (url: string) => {   
  const endpoint = baseUrl + url;
  try {
     // Retrieve the authorization config
    const config = await getUserAuthorizationConfig();
    if (!config) {
      // Handle the case where config is null
      return;
    }

    // Make the GET request with the specified content type
    const data = await axios.get(endpoint, config);
    return data;
  } catch (e) {
    handleError(e);
    throw e;
  }
};


  const search = async (url: string, params: any) => {
    const endpoint = baseUrl + url + objectToQueryString(params);
    try {
      const data = await axios.get(endpoint );
      return data;
    } catch (e) {
      handleError(e);
      throw e;
    }
  };

  const deleteRequest = async (url: string) => {
    const endpoint = baseUrl + url;
    try {
      const data = await axios.delete(endpoint );
      return data;
    } catch (e) {
      handleError(e);
      throw e;
    }
  };

  const post = async (url: string, data: any) => {
    const endpoint = baseUrl + url;
    try {
      const responseData = await axios.post(endpoint, data);
      return responseData;
    } catch (e) {
      handleError(e);
      throw e;
    }
  };

  const put = async (url: string, data: any) => {
    const endpoint = baseUrl + url;
    try {
      const responseData = await axios.put(endpoint, data);
      return responseData;
    } catch (e) {
      handleError(e);
      throw e;
    }
  };

  const patch = async (url: string, data = {}) => {
    const endpoint = baseUrl + url;
    try {
      const responseData = await axios.patch(endpoint, data);
      return responseData;
    } catch (e) {
      handleError(e);
      throw e;
    }
  };

 

const uploadFile = (url: string, data: Record<string, any>, files: Record<string, any>, fileName: string = '') => {
  

  const formData = new FormData();
  for (let key in files) {
    if (fileName) {
      formData.append(fileName, files[key]);
    } else {
      formData.append(key, files[key]);
    }
  }
  for (let key in data) {
    formData.append(key, data[key]);
  }
  const endpoint = baseUrl + url;

  return new Promise((resolve, reject) => {
    axios
      .post(endpoint, formData) // Pass headers using the 'headers' property
      .then((data) => {
        resolve(data);
      })
      .catch((e) => {
        handleError(e);
        reject(e);
      });
  });
};



 const objectToQueryString = (obj: { [key: string]: string | number | boolean }) => {
  let str = [];
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      str.push(encodeURIComponent(key) + "=" + encodeURIComponent(obj[key]));
    }
  }
  const query = "?" + str.join("&");
  return query;
 };
    
  
    return { 
    get,
    search,
    deleteRequest,
    post,
    put,
    patch,
    uploadFile
  };
};

export default createHttpService;


 
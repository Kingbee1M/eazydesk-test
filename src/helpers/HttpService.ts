import axios from "axios";  
import { baseUrl } from "../shared/baseUrl";
import { fireAlert } from "../components/Alert";
 
 


 
 
const createHttpService = () => {  
  const get = async (url: string) => { 
    const endpoint = baseUrl + url;
    try {
      const data = await axios.get(endpoint);
      return data;
    } catch (e) {
      handleError(e);
      throw e;
    }
  };

  const search = async (url: string, params: any) => {
    const endpoint = baseUrl + url + objectToQueryString(params);
    try {
      const data = await axios.get(endpoint);
      return data;
    } catch (e) {
      handleError(e);
      throw e;
    }
  };

  const deleteRequest = async (url: string) => {
    const endpoint = baseUrl + url;
    try {
      const data = await axios.delete(endpoint);
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

  const handleError = (e: any) => {  
    if (e.response.status === 401 && e.response.statusText === "Unauthorized") {
      fireAlert("Session Expired", "Please log in again", "error", "/"); 
    }  
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


 
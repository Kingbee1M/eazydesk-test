import { toast } from "react-toastify";
import { fireAlert } from "../Alert";
import { customId } from "../Options";
import { SerializedError } from "@reduxjs/toolkit";

  export const handleError = (error: any) => {
  
  // Extract error message from response 
  const message = error?.response?.data?.message ||
    (error?.response?.data?.errors?.map((error: { message: any; }) => error.message) || []).join(', ');
 
  // Handle unauthorized error
  if (error?.response?.status === 401 && error?.response?.statusText === "Unauthorized") {
    fireAlert("Session Expired", "Please log in again", "error", "/");
  } else if(error?.response?.status === undefined || error?.response?.statusText === null){

  }else {
    // Display error message using toast
    toast.error(message, {  toastId: customId });
  }
};


export const handleMessageError = (error: SerializedError, thunkAPI: any) => {
		// @ts-ignore
	const errorMessage = error?.response?.data?.message ||
			// @ts-ignore
		(error?.response?.data?.errors?.map((error: { message: any }) => error.message) || []).join(', ') ||
		'An error occurred.';
	return thunkAPI.rejectWithValue(errorMessage);
};

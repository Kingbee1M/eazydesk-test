import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import companyService from './companyService'



const initialState = {
	data: [],
	isError: false,
	isSuccess: false,
	isLoading: false,
	message: '',

	createdata: [],
	createisError: false,
	createisSuccess: false,
	createisLoading: false,
	createmessage: '',

	viewdata: [],
	viewisError: false,
	viewisSuccess: false,
	viewisLoading: false,
	viewmessage: '',


	deletedata: [],
	deleteisError: false,
	deleteisSuccess: false,
	deleteisLoading: false,
	deletemessage: '',

	updatedata: [],
	updateisError: false,
	updateisSuccess: false,
	updateisLoading: false,
	updatemessage: '',


}


// Get Todos
export const getCompany = createAsyncThunk('company/getCompany', async (data, thunkAPI) => {
	try {
		return await companyService.getCompany()
	} catch (error: any) {
		const message = error?.response?.data?.message ||
			(error?.response?.data?.errors?.map((error: { message: any; }) => error.message) || []).join(', ');
		return thunkAPI.rejectWithValue(message)
	}
})


// Craete Company
export const createCompany = createAsyncThunk('company/createCompany', async (data, thunkAPI) => {
	try {
		return await companyService.createCompany(data)
	} catch (error: any) {
		const message = error?.response?.data?.message ||
			(error?.response?.data?.errors?.map((error: { message: any; }) => error.message) || []).join(', ');
		return thunkAPI.rejectWithValue(message)
	}
})

// View Company
export const viewCompany = createAsyncThunk('company/viewCompany', async (data, thunkAPI) => {
	try {
		return await companyService.viewCompany(data)
	} catch (error: any) {
		const message = error?.response?.data?.message ||
			(error?.response?.data?.errors?.map((error: { message: any; }) => error.message) || []).join(', ');
		return thunkAPI.rejectWithValue(message)
	}
})


// Delete Company
export const deleteCompany = createAsyncThunk('company/deleteCompany', async (data, thunkAPI) => {
	try {
		return await companyService.deleteCompany(data)
	} catch (error: any) {
		const message = error?.response?.data?.message ||
			(error?.response?.data?.errors?.map((error: { message: any; }) => error.message) || []).join(', ');
		return thunkAPI.rejectWithValue(message)
	}
})

// Update Company
export const updateCompany = createAsyncThunk('company/updateCompany', async (data, thunkAPI) => {
	try {
		return await companyService.updateCompany(data)
	} catch (error: any) {
		const message = error?.response?.data?.message ||
			(error?.response?.data?.errors?.map((error: { message: any; }) => error.message) || []).join(', ');
		return thunkAPI.rejectWithValue(message)
	}
})





export const companySlice = createSlice({
	name: 'company',
	initialState,
	reducers: {
		reset: (state) => {

			state.isLoading = false
			state.isSuccess = false
			state.isError = false
			state.message = ''

			state.createisLoading = false
			state.createisSuccess = false
			state.createisError = false
			state.createmessage = ''

			state.viewisLoading = false
			state.viewisSuccess = false
			state.viewisError = false
			state.viewmessage = ''


			state.deleteisLoading = false
			state.deleteisSuccess = false
			state.deleteisError = false
			state.deletemessage = ''

			state.updateisLoading = false
			state.updateisSuccess = false
			state.updateisError = false
			state.updatemessage = ''



		},
	},

	extraReducers: (builder) => {
		builder
			.addCase(getCompany.pending, (state) => {
				state.isLoading = true

			})
			.addCase(getCompany.fulfilled, (state: any, action) => {
				state.isLoading = false
				state.isSuccess = true
				state.data = action.payload?.data
			})
			.addCase(getCompany.rejected, (state: any, action) => {
				state.isLoading = false
				state.isError = true
				state.message = action.payload
				state.data = null
			})

			.addCase(createCompany.pending, (state) => {
				state.createisLoading = true

			})
			.addCase(createCompany.fulfilled, (state: any, action) => {
				state.createisLoading = false
				state.createisSuccess = true
				state.createdata = action.payload?.data
			})
			.addCase(createCompany.rejected, (state: any, action) => {
				state.createisLoading = false
				state.createisError = true
				state.createmessage = action.payload
				state.createdata = null
			})


			.addCase(viewCompany.pending, (state) => {
				state.viewisLoading = true
			})
			.addCase(viewCompany.fulfilled, (state: any, action) => {
				state.viewisLoading = false
				state.viewisSuccess = true
				state.viewdata = action.payload?.data
			})
			.addCase(viewCompany.rejected, (state: any, action) => {
				state.viewisLoading = false
				state.viewisError = true
				state.viewmessage = action.payload
				state.viewdata = null
			})

			.addCase(deleteCompany.pending, (state) => {
				state.deleteisLoading = true
			})
			.addCase(deleteCompany.fulfilled, (state: any, action) => {
				state.deleteisLoading = false
				state.deleteisSuccess = true
				state.deletedata = action.payload?.data
			})
			.addCase(deleteCompany.rejected, (state: any, action) => {
				state.deleteisLoading = false
				state.deleteisError = true
				state.deletemessage = action.payload
				state.deletedata = null
			})

			.addCase(updateCompany.pending, (state) => {
				state.updateisLoading = true
			})
			.addCase(updateCompany.fulfilled, (state: any, action) => {
				state.updateisLoading = false
				state.updateisSuccess = true
				state.updatedata = action.payload?.data
			})
			.addCase(updateCompany.rejected, (state: any, action) => {
				state.updateisLoading = false
				state.updateisError = true
				state.updatemessage = action.payload
				state.updatedata = null
			})



	},
})

export const { reset } = companySlice.actions
export default companySlice.reducer
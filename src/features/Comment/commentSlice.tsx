import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import commentService from './commentService'


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


}


// Get getTicket
export const getComment = createAsyncThunk('comment/getComment', async (data, thunkAPI) => {
	try {
		return await commentService.getComment(data)
	} catch (error: any) {
		const message = error?.response?.data?.message ||
			(error?.response?.data?.errors?.map((error: { message: any; }) => error.message) || []).join(', ');
		return thunkAPI.rejectWithValue(message)
	}
})

// Get IT Ticket
export const createComment = createAsyncThunk('ticket/createComment', async (data, thunkAPI) => {
	try {
		return await commentService.createComment(data)
	} catch (error: any) {
		const message = error?.response?.data?.message ||
			(error?.response?.data?.errors?.map((error: { message: any; }) => error.message) || []).join(', ');
		return thunkAPI.rejectWithValue(message)
	}
})







export const commentSlice = createSlice({
	name: 'comment',
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




		},
	},

	extraReducers: (builder) => {
		builder
			.addCase(getComment.pending, (state) => {
				state.isLoading = true

			})
			.addCase(getComment.fulfilled, (state: any, action) => {
				state.isLoading = false
				state.isSuccess = true
				state.data = action.payload?.data
			})
			.addCase(getComment.rejected, (state: any, action) => {
				state.isLoading = false
				state.isError = true
				state.message = action.payload
				state.data = null
			})

			// createComment
			.addCase(createComment.pending, (state) => {
				state.createisLoading = true
			})
			.addCase(createComment.fulfilled, (state: any, action) => {
				state.createisLoading = false
				state.createisSuccess = true
				state.createdata = action.payload?.data
			})
			.addCase(createComment.rejected, (state: any, action) => {
				state.createisLoading = false
				state.createisError = true
				state.createmessage = action.payload
				state.createdata = null
			})



	},
})

export const { reset } = commentSlice.actions
export default commentSlice.reducer
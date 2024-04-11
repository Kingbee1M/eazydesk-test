import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import ticketService from './ticketService'


const initialState = {
	// data: [],
	// isError: false,
	// isSuccess: false,
	// isLoading: false,
	// message: '',

	createdata: [],
	createisError: false,
	createisSuccess: false,
	createisLoading: false,
	createmessage: '',

	// viewdata: [],
	// viewisError: false,
	// viewisSuccess: false,
	// viewisLoading: false,
	// viewmessage: '',


	// deletedata: [],
	// deleteisError: false,
	// deleteisSuccess: false,
	// deleteisLoading: false,
	// deletemessage: '',

	// updatedata: [],
	// updateisError: false,
	// updateisSuccess: false,
	// updateisLoading: false,
	// updatemessage: '',

	// adminUpdatedata: [],
	// adminUpdateisError: false,
	// adminUpdateisSuccess: false,
	// adminUpdateisLoading: false,
	// adminUpdatemessage: '',

	// notedata: [],
	// noteisError: false,
	// noteisSuccess: false,
	// noteisLoading: false,
	// notemessage: '',

	// assignTicketdata: [],
	// assignTicketisError: false,
	// assignTicketisSuccess: false,
	// assignTicketisLoading: false,
	// assignTicketmessage: '',

	// getAssignTicketIDdata: [],
	// getAssignTicketIDisError: false,
	// getAssignTicketIDisSuccess: false,
	// getAssignTicketIDisLoading: false,
	// getAssignTicketIDmessage: '',

	// acceptdata: [],
	// acceptisError: false,
	// acceptisSuccess: false,
	// acceptisLoading: false,
	// acceptmessage: '',

	// getTicketbyIDdata: [],
	// getTicketbyIDisError: false,
	// getTicketbyIDisSuccess: false,
	// getTicketbyIDisLoading: false,
	// getTicketbyIDmessage: '',


	// markTicketdata: [],
	// markTicketisError: false,
	// markTicketisSuccess: false,
	// markTicketisLoading: false,
	// markTicketmessage: '',

	// acknowledgedata: [],
	// acknowledgeisError: false,
	// acknowledgeisSuccess: false,
	// acknowledgeisLoading: false,
	// acknowledgemessage: '',

	// supervisordata: [],
	// supervisorisError: false,
	// supervisorisSuccess: false,
	// supervisorisLoading: false,
	// supervisormessage: '',
}


// Get Todos
// export const getTicket = createAsyncThunk('ticket/getTicket', async (data, thunkAPI) => {
// 	try {
// 		return await ticketService.getTicket()
// 	} catch (error: any) {
// 		const message = error?.response?.data?.message ||
// 			(error?.response?.data?.errors?.map((error: { message: any; }) => error.message) || []).join(', ');
// 		return thunkAPI.rejectWithValue(message)
// 	}
// })


// Craete Ticket
export const createTicket = createAsyncThunk('ticket/createTicket', async (data, thunkAPI) => {
	try {
		return await ticketService.createTicket(data)
	} catch (error: any) {
		const message = error?.response?.data?.message ||
			(error?.response?.data?.errors?.map((error: { message: any; }) => error.message) || []).join(', ');
		return thunkAPI.rejectWithValue(message)
	}
})

// View Ticket
// export const viewTicket = createAsyncThunk('ticket/viewTicket', async (data, thunkAPI) => {
// 	try {
// 		return await ticketService.viewTicket(data)
// 	} catch (error: any) {
// 		const message = error?.response?.data?.message ||
// 			(error?.response?.data?.errors?.map((error: { message: any; }) => error.message) || []).join(', ');
// 		return thunkAPI.rejectWithValue(message)
// 	}
// })


// // Delete Ticket
// export const deleteTicket = createAsyncThunk('ticket/deleteTicket', async (data, thunkAPI) => {
// 	try {
// 		return await ticketService.deleteTicket(data)
// 	} catch (error: any) {
// 		const message = error?.response?.data?.message ||
// 			(error?.response?.data?.errors?.map((error: { message: any; }) => error.message) || []).join(', ');
// 		return thunkAPI.rejectWithValue(message)
// 	}
// })

// // Update Ticket
// export const updateTicket = createAsyncThunk('ticket/updateTicket', async (data, thunkAPI) => {
// 	try {
// 		return await ticketService.updateTicket(data)
// 	} catch (error: any) {
// 		const message = error?.response?.data?.message ||
// 			(error?.response?.data?.errors?.map((error: { message: any; }) => error.message) || []).join(', ');
// 		return thunkAPI.rejectWithValue(message)
// 	}
// })
// // admin Update Ticket
// export const adminUpdateTicket = createAsyncThunk('ticket/adminUpdateTicket', async (data, thunkAPI) => {
// 	try {
// 		return await ticketService.adminUpdateTicket(data)
// 	} catch (error: any) {
// 		const message = error?.response?.data?.message ||
// 			(error?.response?.data?.errors?.map((error: { message: any; }) => error.message) || []).join(', ');
// 		return thunkAPI.rejectWithValue(message)
// 	}
// })
// // Note Ticket
// export const noteTicket = createAsyncThunk('ticket/noteTicket', async (data, thunkAPI) => {
// 	try {
// 		return await ticketService.noteTicket(data)
// 	} catch (error: any) {
// 		const message = error?.response?.data?.message ||
// 			(error?.response?.data?.errors?.map((error: { message: any; }) => error.message) || []).join(', ');
// 		return thunkAPI.rejectWithValue(message)
// 	}
// })

// // Assign Ticket
// export const assignTicket = createAsyncThunk('ticket/assignTicket', async (data, thunkAPI) => {
// 	try {
// 		return await ticketService.assignTicket(data)
// 	} catch (error: any) {
// 		const message = error?.response?.data?.message ||
// 			(error?.response?.data?.errors?.map((error: { message: any; }) => error.message) || []).join(', ');
// 		return thunkAPI.rejectWithValue(message)
// 	}
// })

// // getAssign Ticket IDdata
// export const getAssignTicketID = createAsyncThunk('ticket/getAssignTicketID', async (data, thunkAPI) => {
// 	try {
// 		return await ticketService.getAssignTicketID(data)
// 	} catch (error: any) {
// 		const message = error?.response?.data?.message ||
// 			(error?.response?.data?.errors?.map((error: { message: any; }) => error.message) || []).join(', ');
// 		return thunkAPI.rejectWithValue(message)
// 	}
// })
// // Accept Ticket
// export const acceptTicket = createAsyncThunk('ticket/acceptTicket', async (data, thunkAPI) => {
// 	try {
// 		return await ticketService.acceptTicket(data)
// 	} catch (error: any) {
// 		const message = error?.response?.data?.message ||
// 			(error?.response?.data?.errors?.map((error: { message: any; }) => error.message) || []).join(', ');
// 		return thunkAPI.rejectWithValue(message)
// 	}
// })
// // get Ticket by ID Ticket
// export const getTicketbyID = createAsyncThunk('ticket/getTicketbyID', async (data, thunkAPI) => {
// 	try {
// 		return await ticketService.getTicketbyID(data)
// 	} catch (error: any) {
// 		const message = error?.response?.data?.message ||
// 			(error?.response?.data?.errors?.map((error: { message: any; }) => error.message) || []).join(', ');
// 		return thunkAPI.rejectWithValue(message)
// 	}
// })
// // Mark Ticket
// export const markTicket = createAsyncThunk('ticket/markTicket', async (data, thunkAPI) => {
// 	try {
// 		return await ticketService.markTicket(data)
// 	} catch (error: any) {
// 		const message = error?.response?.data?.message ||
// 			(error?.response?.data?.errors?.map((error: { message: any; }) => error.message) || []).join(', ');
// 		return thunkAPI.rejectWithValue(message)
// 	}
// })
// // Mark Ticket
// export const acknowledgeTicket = createAsyncThunk('ticket/acknowledgeTicket', async (data, thunkAPI) => {
// 	try {
// 		return await ticketService.acknowledgeTicket(data)
// 	} catch (error: any) {
// 		const message = error?.response?.data?.message ||
// 			(error?.response?.data?.errors?.map((error: { message: any; }) => error.message) || []).join(', ');
// 		return thunkAPI.rejectWithValue(message)
// 	}
// })

// // Mark Ticket
// export const getSupervisorTicket = createAsyncThunk('ticket/getSupervisorTicket', async (data, thunkAPI) => {
// 	try {
// 		return await ticketService.getSupervisorTicket(data)
// 	} catch (error: any) {
// 		const message = error?.response?.data?.message ||
// 			(error?.response?.data?.errors?.map((error: { message: any; }) => error.message) || []).join(', ');
// 		return thunkAPI.rejectWithValue(message)
// 	}
// })





export const ticketSlice = createSlice({
	name: 'ticket',
	initialState,
	reducers: {
		reset: (state) => {

			// state.isLoading = false
			// state.isSuccess = false
			// state.isError = false
			// state.message = ''

			state.createisLoading = false
			state.createisSuccess = false
			state.createisError = false
			state.createmessage = ''

			// state.viewisLoading = false
			// state.viewisSuccess = false
			// state.viewisError = false
			// state.viewmessage = ''


			// state.deleteisLoading = false
			// state.deleteisSuccess = false
			// state.deleteisError = false
			// state.deletemessage = ''

			// state.updateisLoading = false
			// state.updateisSuccess = false
			// state.updateisError = false
			// state.updatemessage = ''

			// state.adminUpdateisLoading = false
			// state.adminUpdateisSuccess = false
			// state.adminUpdateisError = false
			// state.adminUpdatemessage = ''

			// state.noteisLoading = false
			// state.noteisSuccess = false
			// state.noteisError = false
			// state.notemessage = ''

			// state.assignTicketisLoading = false
			// state.assignTicketisSuccess = false
			// state.assignTicketisError = false
			// state.assignTicketmessage = ''

			// state.acceptisLoading = false
			// state.acceptisSuccess = false
			// state.acceptisError = false
			// state.acceptmessage = ''

			// state.getTicketbyIDisLoading = false
			// state.getTicketbyIDisSuccess = false
			// state.getTicketbyIDisError = false
			// state.getTicketbyIDmessage = ''

			// state.markTicketisLoading = false
			// state.markTicketisSuccess = false
			// state.markTicketisError = false
			// state.markTicketmessage = ''

			// state.acknowledgeisLoading = false
			// state.acknowledgeisSuccess = false
			// state.acknowledgeisError = false
			// state.acknowledgemessage = ''

			// state.supervisorisLoading = false
			// state.supervisorisSuccess = false
			// state.supervisorisError = false
			// state.supervisormessage = ''

		},
	},

	extraReducers: (builder) => {
		builder
			// .addCase(getTicket.pending, (state) => {
			// 	state.isLoading = true

			// })
			// .addCase(getTicket.fulfilled, (state: any, action) => {
			// 	state.isLoading = false
			// 	state.isSuccess = true
			// 	state.data = action.payload?.data
			// })
			// .addCase(getTicket.rejected, (state: any, action) => {
			// 	state.isLoading = false
			// 	state.isError = true
			// 	state.message = action.payload
			// 	state.data = null
			// })

			.addCase(createTicket.pending, (state) => {
				state.createisLoading = true

			})
			.addCase(createTicket.fulfilled, (state: any, action) => {
				state.createisLoading = false
				state.createisSuccess = true
				state.createdata = action.payload?.data
			})
			.addCase(createTicket.rejected, (state: any, action) => {
				state.createisLoading = false
				state.createisError = true
				state.createmessage = action.payload
				state.createdata = null
			})


		// .addCase(viewTicket.pending, (state) => {
		// 	state.viewisLoading = true
		// })
		// .addCase(viewTicket.fulfilled, (state: any, action) => {
		// 	state.viewisLoading = false
		// 	state.viewisSuccess = true
		// 	state.viewdata = action.payload?.data
		// })
		// .addCase(viewTicket.rejected, (state: any, action) => {
		// 	state.viewisLoading = false
		// 	state.viewisError = true
		// 	state.viewmessage = action.payload
		// 	state.viewdata = null
		// })

		// .addCase(deleteTicket.pending, (state) => {
		// 	state.deleteisLoading = true
		// })
		// .addCase(deleteTicket.fulfilled, (state: any, action) => {
		// 	state.deleteisLoading = false
		// 	state.deleteisSuccess = true
		// 	state.deletedata = action.payload?.data
		// })
		// .addCase(deleteTicket.rejected, (state: any, action) => {
		// 	state.deleteisLoading = false
		// 	state.deleteisError = true
		// 	state.deletemessage = action.payload
		// 	state.deletedata = null
		// })

		// .addCase(updateTicket.pending, (state) => {
		// 	state.updateisLoading = true
		// })
		// .addCase(updateTicket.fulfilled, (state: any, action) => {
		// 	state.updateisLoading = false
		// 	state.updateisSuccess = true
		// 	state.updatedata = action.payload?.data
		// })
		// .addCase(updateTicket.rejected, (state: any, action) => {
		// 	state.updateisLoading = false
		// 	state.updateisError = true
		// 	state.updatemessage = action.payload
		// 	state.updatedata = null
		// })

		// .addCase(adminUpdateTicket.pending, (state) => {
		// 	state.adminUpdateisLoading = true
		// })
		// .addCase(adminUpdateTicket.fulfilled, (state: any, action) => {
		// 	state.adminUpdateisLoading = false
		// 	state.adminUpdateisSuccess = true
		// 	state.adminUpdatedata = action.payload?.data
		// })
		// .addCase(adminUpdateTicket.rejected, (state: any, action) => {
		// 	state.adminUpdateisLoading = false
		// 	state.adminUpdateisError = true
		// 	state.adminUpdatemessage = action.payload
		// 	state.adminUpdatedata = null
		// })


		// .addCase(noteTicket.pending, (state) => {
		// 	state.noteisLoading = true
		// })
		// .addCase(noteTicket.fulfilled, (state: any, action) => {
		// 	state.noteisLoading = false
		// 	state.noteisSuccess = true
		// 	state.notedata = action.payload?.data
		// })
		// .addCase(noteTicket.rejected, (state: any, action) => {
		// 	state.noteisLoading = false
		// 	state.noteisError = true
		// 	state.notemessage = action.payload
		// 	state.notedata = null
		// })

		// .addCase(assignTicket.pending, (state) => {
		// 	state.assignTicketisLoading = true
		// })
		// .addCase(assignTicket.fulfilled, (state: any, action) => {
		// 	state.assignTicketisLoading = false
		// 	state.assignTicketisSuccess = true
		// 	state.assignTicketdata = action.payload?.data
		// })
		// .addCase(assignTicket.rejected, (state: any, action) => {
		// 	state.assignTicketisLoading = false
		// 	state.assignTicketisError = true
		// 	state.assignTicketmessage = action.payload
		// 	state.assignTicketdata = null
		// })

		// .addCase(getAssignTicketID.pending, (state) => {
		// 	state.getAssignTicketIDisLoading = true
		// })
		// .addCase(getAssignTicketID.fulfilled, (state: any, action) => {
		// 	state.getAssignTicketIDisLoading = false
		// 	state.getAssignTicketIDisSuccess = true
		// 	state.getAssignTicketIDdata = action.payload?.data
		// })
		// .addCase(getAssignTicketID.rejected, (state: any, action) => {
		// 	state.getAssignTicketIDisLoading = false
		// 	state.getAssignTicketIDisError = true
		// 	state.getAssignTicketIDmessage = action.payload
		// 	state.getAssignTicketIDdata = null
		// })
		// .addCase(acceptTicket.pending, (state) => {
		// 	state.acceptisLoading = true
		// })
		// .addCase(acceptTicket.fulfilled, (state: any, action) => {
		// 	state.acceptisLoading = false
		// 	state.acceptisSuccess = true
		// 	state.acceptdata = action.payload?.data
		// })
		// .addCase(acceptTicket.rejected, (state: any, action) => {
		// 	state.acceptisLoading = false
		// 	state.acceptisError = true
		// 	state.acceptmessage = action.payload
		// 	state.acceptdata = null
		// })

		// .addCase(getTicketbyID.pending, (state) => {
		// 	state.getTicketbyIDisLoading = true
		// })
		// .addCase(getTicketbyID.fulfilled, (state: any, action) => {
		// 	state.getTicketbyIDisLoading = false
		// 	state.getTicketbyIDisSuccess = true
		// 	state.getTicketbyIDdata = action.payload?.data
		// })
		// .addCase(getTicketbyID.rejected, (state: any, action) => {
		// 	state.getTicketbyIDisLoading = false
		// 	state.getTicketbyIDisError = true
		// 	state.getTicketbyIDmessage = action.payload
		// 	state.getTicketbyIDdata = null
		// })

		// .addCase(markTicket.pending, (state) => {
		// 	state.markTicketisLoading = true
		// })
		// .addCase(markTicket.fulfilled, (state: any, action) => {
		// 	state.markTicketisLoading = false
		// 	state.markTicketisSuccess = true
		// 	state.markTicketdata = action.payload?.data
		// })
		// .addCase(markTicket.rejected, (state: any, action) => {
		// 	state.markTicketisLoading = false
		// 	state.markTicketisError = true
		// 	state.markTicketmessage = action.payload
		// 	state.markTicketdata = null
		// })


		// .addCase(acknowledgeTicket.pending, (state) => {
		// 	state.acknowledgeisLoading = true
		// })
		// .addCase(acknowledgeTicket.fulfilled, (state: any, action) => {
		// 	state.acknowledgeisLoading = false
		// 	state.acknowledgeisSuccess = true
		// 	state.acknowledgedata = action.payload?.data
		// })
		// .addCase(acknowledgeTicket.rejected, (state: any, action) => {
		// 	state.acknowledgeisLoading = false
		// 	state.acknowledgeisError = true
		// 	state.acknowledgemessage = action.payload
		// 	state.acknowledgedata = null
		// })

		// .addCase(getSupervisorTicket.pending, (state) => {
		// 	state.supervisorisLoading = true
		// })
		// .addCase(getSupervisorTicket.fulfilled, (state: any, action) => {
		// 	state.supervisorisLoading = false
		// 	state.supervisorisSuccess = true
		// 	state.supervisordata = action.payload?.data
		// })
		// .addCase(getSupervisorTicket.rejected, (state: any, action) => {
		// 	state.supervisorisLoading = false
		// 	state.supervisorisError = true
		// 	state.supervisormessage = action.payload
		// 	state.supervisordata = null
		// })

	},
})

export const { reset } = ticketSlice.actions
export default ticketSlice.reducer
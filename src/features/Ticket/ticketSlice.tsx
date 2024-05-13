import { createSlice, createAsyncThunk, SerializedError } from '@reduxjs/toolkit'
import ticketService from './ticketService'
import { handleMessageError } from '../../components/handleError/handleError'


const initialState = {
	data: [],
	isError: false,
	isSuccess: false,
	isLoading: false,
	message: '',

	itdata: [],
	itisError: false,
	itisSuccess: false,
	itisLoading: false,
	itmessage: '',

	itticketparameterdata: [],
	itticketparameterisError: false,
	itticketparameterisSuccess: false,
	itticketparameterisLoading: false,
	itticketparametermessage: '',

	createdata: [],
	createisError: false,
	createisSuccess: false,
	createisLoading: false,
	createmessage: '',

	admingetticketdata: [],
	admingetticketisError: false,
	admingetticketisSuccess: false,
	admingetticketisLoading: false,
	admingetticketmessage: '',

	ticketiddata: [],
	ticketidisError: false,
	ticketidisSuccess: false,
	ticketidisLoading: false,
	ticketidmessage: '',

	viewdata: [],
	viewisError: false,
	viewisSuccess: false,
	viewisLoading: false,
	viewmessage: '',

	itassigndata: [],
	itassignisError: false,
	itassignisSuccess: false,
	itassignisLoading: false,
	itassignmessage: '',

	getTicketAssignTicketdata: [],
	getTicketAssignTicketisError: false,
	getTicketAssignTicketisSuccess: false,
	getTicketAssignTicketisLoading: false,
	getTicketAssignTicketmessage: '',


	dashBoardInfodata: [],
	dashBoardInfoisError: false,
	dashBoardInfoisSuccess: false,
	dashBoardInfoisLoading: false,
	dashBoardInfomessage: '',

	updateTicketdata: [],
	updateTicketisError: false,
	updateTicketisSuccess: false,
	updateTicketisLoading: false,
	updateTicketmessage: '',

	updateLeadTicketdata: [],
	updateLeadTicketisError: false,
	updateLeadTicketisSuccess: false,
	updateLeadTicketisLoading: false,
	updateLeadTicketmessage: '',

	giveApprovaldata: [],
	giveApprovalisError: false,
	giveApprovalisSuccess: false,
	giveApprovalisLoading: false,
	giveApprovalmessage: '',

	superAdminDashboarddata: [],
	superAdminDashboardisError: false,
	superAdminDashboardisSuccess: false,
	superAdminDashboardisLoading: false,
	superAdminDashboardmessage: '',
}




// Get getTicket
export const getTicket = createAsyncThunk('ticket/getTicket', async (data, thunkAPI) => {
	try {
		return await ticketService.getTicket(data)
	} catch (error: any) {
		// Handle error using handleMessageError function
		const message = handleMessageError(error, thunkAPI);
		return thunkAPI.rejectWithValue(message)
	}
})

// Get IT Ticket
export const getItTicket = createAsyncThunk('ticket/getItTicket', async (data, thunkAPI) => {
	try {
		return await ticketService.getItTicket(data)
	} catch (error: any) {
		// Handle error using handleMessageError function
		const message = handleMessageError(error, thunkAPI);
		return thunkAPI.rejectWithValue(message)
	}
})
export const getItTicketParameter = createAsyncThunk('ticket/getItTicketParameter', async (data, thunkAPI) => {
	try {
		return await ticketService.getItTicketParameter(data)
	} catch (error: any) {
		// Handle error using handleMessageError function
		const message = handleMessageError(error, thunkAPI);
		return thunkAPI.rejectWithValue(message)
	}
})


// Craete Ticket
export const createTicket = createAsyncThunk('ticket/createTicket', async (data, thunkAPI) => {
	try {
		return await ticketService.createTicket(data)
	} catch (error: any) {
		// Handle error using handleMessageError function
		const message = handleMessageError(error, thunkAPI);
		return thunkAPI.rejectWithValue(message)
	}
})

// admin get all ticket
export const admingetTicket = createAsyncThunk('ticket/admingetTicket', async (data, thunkAPI) => {
	try {
		return await ticketService.admingetTicket(data)
	} catch (error: any) {
		// Handle error using handleMessageError function
		const message = handleMessageError(error, thunkAPI);
		return thunkAPI.rejectWithValue(message)
	}
})

// admin get all ticket
export const getTicketID = createAsyncThunk('ticket/getTicketID', async (data, thunkAPI) => {
	try {
		return await ticketService.getTicketID(data)
	} catch (error: any) {
		// Handle error using handleMessageError function
		const message = handleMessageError(error, thunkAPI);
		return thunkAPI.rejectWithValue(message)
	}
})

// View Ticket
export const viewTicket = createAsyncThunk('ticket/viewTicket', async (data, thunkAPI) => {
	try {
		return await ticketService.viewTicket(data)
	} catch (error: any) {
		// Handle error using handleMessageError function
		const message = handleMessageError(error, thunkAPI);
		return thunkAPI.rejectWithValue(message)
	}
})

//IT Assign Ticket 
export const itAssignTicket = createAsyncThunk('ticket/itAssignTicket', async (data, thunkAPI) => {
	try {
		return await ticketService.itAssignTicket(data)
	} catch (error: any) {
		// Handle error using handleMessageError function
		const message = handleMessageError(error, thunkAPI);
		return thunkAPI.rejectWithValue(message)
	}
})


// Get Assign Ticket 
export const getTicketAssignTicket = createAsyncThunk('ticket/getTicketAssignTicket', async (data, thunkAPI) => {
	try {
		return await ticketService.getTicketAssignTicket(data)
	} catch (error: any) {
		// Handle error using handleMessageError function
		const message = handleMessageError(error, thunkAPI);
		return thunkAPI.rejectWithValue(message)
	}
})

// DashBoard Info 
export const dashBoardInfo = createAsyncThunk('ticket/dashBoardInfo', async (data, thunkAPI) => {
	try {
		return await ticketService.dashBoardInfo()
	} catch (error: any) {
		// Handle error using handleMessageError function
		const message = handleMessageError(error, thunkAPI);
		return thunkAPI.rejectWithValue(message)
	}
})
// Update Ticket
export const updateTicket = createAsyncThunk('ticket/updateTicket', async (data, thunkAPI) => {
	try {
		return await ticketService.updateTicket(data)
	} catch (error: any) {
		// Handle error using handleMessageError function
		const message = handleMessageError(error, thunkAPI);
		// Return the rejected promise with the error message
		return thunkAPI.rejectWithValue(message);
	}
})
// Update Ticket
export const updateLeadTicket = createAsyncThunk('ticket/updateLeadTicket', async (data, thunkAPI) => {
	try {
		return await ticketService.updateLeadTicket(data)
	} catch (error: any) {
		// Handle error using handleMessageError function
		const message = handleMessageError(error, thunkAPI);
		// Return the rejected promise with the error message
		return thunkAPI.rejectWithValue(message);
	}
})
// Give Approval
export const giveApproval = createAsyncThunk('ticket/giveApproval', async (data, thunkAPI) => {
	try {
		return await ticketService.giveApproval(data)
	} catch (error: any) {
		// Handle error using handleMessageError function
		const message = handleMessageError(error, thunkAPI);
		return thunkAPI.rejectWithValue(message)
	}
})
// Give Approval
export const superAdminDashboard = createAsyncThunk('ticket/superAdminDashboard', async (data, thunkAPI) => {
	try {
		return await ticketService.superAdminDashboard()
	} catch (error: any) {
		// Handle error using handleMessageError function
		const message = handleMessageError(error, thunkAPI);
		return thunkAPI.rejectWithValue(message)
	}
})





export const ticketSlice = createSlice({
	name: 'ticket',
	initialState,
	reducers: {
		reset: (state) => {

			state.isLoading = false
			state.isSuccess = false
			state.isError = false
			state.message = ''

			state.itisLoading = false
			state.itisSuccess = false
			state.itisError = false
			state.itmessage = ''

			state.itticketparameterisLoading = false
			state.itticketparameterisSuccess = false
			state.itticketparameterisError = false
			state.itticketparametermessage = ''

			state.createisLoading = false
			state.createisSuccess = false
			state.createisError = false
			state.createmessage = ''


			state.admingetticketisLoading = false
			state.admingetticketisSuccess = false
			state.admingetticketisError = false
			state.admingetticketmessage = ''

			state.ticketidisLoading = false
			state.ticketidisSuccess = false
			state.ticketidisError = false
			state.ticketidmessage = ''

			state.viewisLoading = false
			state.viewisSuccess = false
			state.viewisError = false
			state.viewmessage = ''

			state.itassignisLoading = false
			state.itassignisSuccess = false
			state.itassignisError = false
			state.itassignmessage = ''

			state.getTicketAssignTicketisLoading = false
			state.getTicketAssignTicketisSuccess = false
			state.getTicketAssignTicketisError = false
			state.getTicketAssignTicketmessage = ''

			state.dashBoardInfoisLoading = false
			state.dashBoardInfoisSuccess = false
			state.dashBoardInfoisError = false
			state.dashBoardInfomessage = ''

			state.updateTicketisLoading = false
			state.updateTicketisSuccess = false
			state.updateTicketisError = false
			state.updateTicketmessage = ''

			state.updateLeadTicketisLoading = false
			state.updateLeadTicketisSuccess = false
			state.updateLeadTicketisError = false
			state.updateLeadTicketmessage = ''

			state.giveApprovalisLoading = false
			state.giveApprovalisSuccess = false
			state.giveApprovalisError = false
			state.giveApprovalmessage = ''

			state.superAdminDashboardisLoading = false
			state.superAdminDashboardisSuccess = false
			state.superAdminDashboardisError = false
			state.superAdminDashboardmessage = ''

		},
	},

	extraReducers: (builder) => {
		builder
			.addCase(getTicket.pending, (state) => {
				state.isLoading = true
			})
			.addCase(getTicket.fulfilled, (state: any, action) => {
				state.isLoading = false
				state.isSuccess = true
				state.data = action.payload?.data
			})
			.addCase(getTicket.rejected, (state: any, action) => {
				state.isLoading = false
				state.isError = true
				state.message = action.payload
				state.data = null
			})


			.addCase(getItTicket.pending, (state) => {
				state.itisLoading = true
			})
			.addCase(getItTicket.fulfilled, (state: any, action) => {
				state.itisLoading = false
				state.itisSuccess = true
				state.itdata = action.payload?.data
			})
			.addCase(getItTicket.rejected, (state: any, action) => {
				state.itisLoading = false
				state.itisError = true
				state.itmessage = action.payload
				state.itdata = null
			})


			.addCase(getItTicketParameter.pending, (state) => {
				state.itticketparameterisLoading = true
			})
			.addCase(getItTicketParameter.fulfilled, (state: any, action) => {
				state.itticketparameterisLoading = false
				state.itticketparameterisSuccess = true
				state.itticketparameterdata = action.payload?.data
			})
			.addCase(getItTicketParameter.rejected, (state: any, action) => {
				state.itticketparameterisLoading = false
				state.itticketparameterisError = true
				state.itticketparametermessage = action.payload
				state.itticketparameterdata = null
			})

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


			.addCase(admingetTicket.pending, (state) => {
				state.admingetticketisLoading = true
			})
			.addCase(admingetTicket.fulfilled, (state: any, action) => {
				state.admingetticketisLoading = false
				state.admingetticketisSuccess = true
				state.admingetticketdata = action.payload?.data
			})
			.addCase(admingetTicket.rejected, (state: any, action) => {
				state.admingetticketisLoading = false
				state.admingetticketisError = true
				state.admingetticketmessage = action.payload
				state.admingetticketdata = null
			})



			.addCase(getTicketID.pending, (state) => {
				state.ticketidisLoading = true
			})
			.addCase(getTicketID.fulfilled, (state: any, action) => {
				state.ticketidisLoading = false
				state.ticketidisSuccess = true
				state.ticketiddata = action.payload?.data
			})
			.addCase(getTicketID.rejected, (state: any, action) => {
				state.ticketidisLoading = false
				state.ticketidisError = true
				state.ticketidmessage = action.payload
				state.ticketiddata = null
			})

			.addCase(viewTicket.pending, (state) => {
				state.viewisLoading = true
			})
			.addCase(viewTicket.fulfilled, (state: any, action) => {
				state.viewisLoading = false
				state.viewisSuccess = true
				state.viewdata = action.payload?.data
			})
			.addCase(viewTicket.rejected, (state: any, action) => {
				state.viewisLoading = false
				state.viewisError = true
				state.viewmessage = action.payload
				state.viewdata = null
			})
			.addCase(itAssignTicket.pending, (state) => {
				state.itassignisLoading = true
			})
			.addCase(itAssignTicket.fulfilled, (state: any, action) => {
				state.itassignisLoading = false
				state.itassignisSuccess = true
				state.itassigndata = action.payload?.data
			})
			.addCase(itAssignTicket.rejected, (state: any, action) => {
				state.itassignisLoading = false
				state.itassignisError = true
				state.itassignviewmessage = action.payload
				state.itassigndata = null
			})

			.addCase(getTicketAssignTicket.pending, (state) => {
				state.getTicketAssignTicketisLoading = true
			})
			.addCase(getTicketAssignTicket.fulfilled, (state: any, action) => {
				state.getTicketAssignTicketisLoading = false
				state.getTicketAssignTicketisSuccess = true
				state.getTicketAssignTicketdata = action.payload?.data
			})
			.addCase(getTicketAssignTicket.rejected, (state: any, action) => {
				state.getTicketAssignTicketisLoading = false
				state.getTicketAssignTicketisError = true
				state.getTicketAssignTicketmessage = action.payload
				state.getTicketAssignTicketdata = null
			})

			.addCase(dashBoardInfo.pending, (state) => {
				state.dashBoardInfoisLoading = true
			})
			.addCase(dashBoardInfo.fulfilled, (state: any, action) => {
				state.dashBoardInfoisLoading = false
				state.dashBoardInfoisSuccess = true
				state.dashBoardInfodata = action.payload?.data
			})
			.addCase(dashBoardInfo.rejected, (state: any, action) => {
				state.dashBoardInfoisLoading = false
				state.dashBoardInfoisError = true
				state.dashBoardInfomessage = action.payload
				state.dashBoardInfodata = null
			})

			.addCase(updateTicket.pending, (state) => {
				state.updateTicketisLoading = true
			})
			.addCase(updateTicket.fulfilled, (state: any, action) => {
				state.updateTicketisLoading = false
				state.updateTicketisSuccess = true
				state.updateTicketdata = action.payload?.data
			})
			.addCase(updateTicket.rejected, (state: any, action) => {
				state.updateTicketisLoading = false
				state.updateTicketisError = true
				state.updateTicketmessage = action.payload
				state.updateTicketdata = null
			})
			.addCase(updateLeadTicket.pending, (state) => {
				state.updateLeadTicketisLoading = true
			})
			.addCase(updateLeadTicket.fulfilled, (state: any, action) => {
				state.updateLeadTicketisLoading = false
				state.updateLeadTicketisSuccess = true
				state.updateLeadTicketdata = action.payload?.data
			})
			.addCase(updateLeadTicket.rejected, (state: any, action) => {
				state.updateLeadTicketisLoading = false
				state.updateLeadTicketisError = true
				state.updateLeadTicketmessage = action.payload
				state.updateLeadTicketdata = null
			})

			.addCase(giveApproval.pending, (state) => {
				state.giveApprovalisLoading = true
			})
			.addCase(giveApproval.fulfilled, (state: any, action) => {
				state.giveApprovalisLoading = false
				state.giveApprovalisSuccess = true
				state.giveApprovaldata = action.payload?.data
			})
			.addCase(giveApproval.rejected, (state: any, action) => {
				state.giveApprovalisLoading = false
				state.giveApprovalisError = true
				state.giveApprovalmessage = action.payload
				state.giveApprovaldata = null
			})

			.addCase(superAdminDashboard.pending, (state) => {
				state.superAdminDashboardisLoading = true
			})
			.addCase(superAdminDashboard.fulfilled, (state: any, action) => {
				state.superAdminDashboardisLoading = false
				state.superAdminDashboardisSuccess = true
				state.superAdminDashboarddata = action.payload?.data
			})
			.addCase(superAdminDashboard.rejected, (state: any, action) => {
				state.superAdminDashboardisLoading = false
				state.superAdminDashboardisError = true
				state.superAdminDashboardmessage = action.payload
				state.superAdminDashboarddata = null
			})

	},
})

export const { reset } = ticketSlice.actions
export default ticketSlice.reducer
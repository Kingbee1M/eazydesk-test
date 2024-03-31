import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import authService from './authService'
 
  


 

const initialState = { 

  user:   null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  userToken:null,
  message: '',
  error: '',

  data:   [],
  isErrorinput: false,
  isSuccessinput: false,
  isLoadinginput: false,
  userTokeninput:null,
  messageinput: '',
  errorinput: '', 

  dataID:   [],
  isErrorID: false,
  isSuccessID: false,
  isLoadingID: false,
  userTokenID:null,
  messageID: '',
  errorID: '', 
  
  isErrorlogout: false,
  isSuccesslogout: false,
  isLoadinglogout: false,
  userTokenlogout:null,
  messagelogout: '',
  errorlogout: '',

  forgetisError: false,
  forgetisSuccess: false,
  forgetisLoading: false,
  forgetuserToken:null,
  forgetmessage: '',
  forgeterror: '',

  resetisError: false,
  resetisSuccess: false,
  resetisLoading: false,
  resetuserToken:null,
  resetmessage: '',
  reseterror: '',

  profileisError: false,
  profileisSuccess: false,
  profileisLoading: false,
  profileuserToken:null,
  profilemessage: '',
  profileerror: '',

  currentisError: false,
  currentisSuccess: false,
  currentisLoading: false,
  currentuserToken:null,
  currentmessage: '',
  currenterror: '',

  supervisorUserisError: false,
  supervisorUserisSuccess: false,
  supervisorUserisLoading: false,
  supervisorUseruserToken:null,
  supervisorUsermessage: '',
  supervisorUsererror: '',
 
}
 

// Login user
export const login = createAsyncThunk('auth/login', async (data, thunkAPI) => {
  try {
    return await authService.login(data)

  } catch (error: any) {  
    const message = (error.response && 
        error.response.data && 
        error.response.data.message) ||error.response.data.errors[0].message
      error.message ||
      error.toString()  
    return thunkAPI.rejectWithValue(message)
  }
})

 
// ViewUserByID
export const ViewUserByID = createAsyncThunk('auth/ViewUserByID', async (  data,thunkAPI) => {
  try {
    return await authService.ViewUserByID(data)
  } catch (error:any) {
    const message =
      (error.response && 
        error.response.data && 
        error.response.data.message) ||
      error.message ||
      error.toString() 
     return thunkAPI.rejectWithValue(message)
  }
})


// logout
export const logout = createAsyncThunk('auth/logout', async (data, thunkAPI) => { 
    try {
    return await authService.logout()
  } catch (error:any) {
    const message =
      (error.response && 
        error.response.data && 
        error.response.data.message) ||
      error.message ||
      error.toString() 
     return thunkAPI.rejectWithValue(message)
  }
})

// Forget Password
export const forgetPassword = createAsyncThunk('auth/forgetPassword', async (data, thunkAPI) => { 
    try {
    return await authService.forgetPassword(data)
  } catch (error:any) {
    const message =
      (error.response && 
        error.response.data && 
        error.response.data.message) ||
      error.message ||
      error.toString() 
     return thunkAPI.rejectWithValue(message)
  }
})


// Reset Password
export const resetPassword = createAsyncThunk('auth/resetPassword', async (data, thunkAPI) => { 
    try {
    return await authService.resetPassword(data)
  } catch (error:any) {
    const message =
      (error.response && 
        error.response.data && 
        error.response.data.message) ||
      error.message ||
      error.toString() 
     return thunkAPI.rejectWithValue(message)
  }
})

// Update Profile
export const updateProfile = createAsyncThunk('auth/updateProfile', async (data, thunkAPI) => { 
    try {
    return await authService.updateProfile(data)
  } catch (error:any) {
    const message =
      (error.response && 
        error.response.data && 
        error.response.data.message) ||
      error.message ||
      error.toString() 
     return thunkAPI.rejectWithValue(message)
  }
})

// Current User
export const currentUser = createAsyncThunk('auth/currentUser', async (data, thunkAPI) => { 
    try {
    return await authService.currentUser( )
  } catch (error:any) {
    const message =
      (error.response && 
        error.response.data && 
        error.response.data.message) ||
      error.message ||
      error.toString() 
     return thunkAPI.rejectWithValue(message)
  }
})

// Supervisor User
export const supervisorUser = createAsyncThunk('auth/supervisorUser', async (data, thunkAPI) => { 
    try {
    return await authService.supervisorUser(data )
  } catch (error:any) {
    const message =
      (error.response && 
        error.response.data && 
        error.response.data.message) ||
      error.message ||
      error.toString() 
     return thunkAPI.rejectWithValue(message)
  }
})

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: (state) => {   
      state.isLoading = false
      state.isSuccess = false
      state.isError = false
      state.message = '' 

      state.isLoadinginput = false
      state.isSuccessinput = false
      state.isErrorinput = false
      state.messageinput = '' 

      state.isLoadingID = false
      state.isSuccessID = false
      state.isErrorID = false
      state.messageID = '' 

      state.isLoadinglogout = false
      state.isSuccesslogout = false
      state.isErrorlogout = false
      state.messagelogout = ''  

      state.forgetisLoading = false
      state.forgetisSuccess = false
      state.forgetisError = false
      state.forgetmessage = ''  

      state.resetisLoading = false
      state.resetisSuccess = false
      state.resetisError = false
      state.resetmessage = ''  

      state.profileisLoading = false
      state.profileisSuccess = false
      state.profileisError = false
      state.profilemessage = ''  

      state.currentisLoading = false
      state.currentisSuccess = false
      state.currentisError = false
      state.currentmessage = ''  

      state.supervisorUserisLoading = false
      state.supervisorUserisSuccess = false
      state.supervisorUserisError = false
      state.supervisorUsermessage = ''  

    }
  },

  extraReducers: (builder) => {
    builder 
      //  Login
      .addCase(login.pending, (state) => {
        state.isLoading = true 
      }) 
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.user = action.payload
        state.userToken = action.payload.token
      }) 
      .addCase(login.rejected, (state:any, action) => {
        state.isLoading  = false
        state.isError  = true
        state.message  = action.payload
        state.data  = [] 
      })

      // Logout
      .addCase(logout.pending, (state:any, action) => {
        state.isLoadinglogout = true
        state.isErrorlogout = false  
      }) 
      .addCase(logout.fulfilled, (state) => { 
        state.isLoadinglogout = false
        // state.user = null 
        // state.userToken = null 
        state.isSuccesslogout = true
      }) 
     .addCase(logout.rejected, (state:any, action) => {
      
        state.isLoadinglogout  = false
        state.isErrorlogout  = true
        state.messagelogout  = action.payload
       state.datalogout = [] 
     })
      
// View User By ID
      .addCase(ViewUserByID.pending, (state:any, action) => {
        state.isLoadingID = true
        state.isErrorID = false  
      }) 
      .addCase(ViewUserByID.fulfilled, (state ,action) => {
             state.isLoadingID = false
        state.isSuccessID = true
        state.dataID = action.payload 
      }) 
     .addCase(ViewUserByID.rejected, (state:any, action) => {
        state.isLoadingID  = false
        state.isErrorID  = true
        state.messageID  = action.payload
        state.dataID  = [] 
     })
      
 
      // Forget Password
      .addCase(forgetPassword.pending, (state) => {
        state.forgetisLoading = true 
      })
      .addCase(forgetPassword.fulfilled, (state:any, action) => {
        state.forgetisLoading = false
        state.forgetisSuccess = true
        state.forgetdata = action.payload 
      })
      .addCase(forgetPassword.rejected, (state:any, action) => {
        state.forgetisLoading = false
        state.forgetisError = true
        state.forgetmessage = action.payload
        state.forgetdata = [] 
      })  

      // Reset Password
      .addCase(resetPassword.pending, (state) => {
        state.resetisLoading = true 
      })
      .addCase(resetPassword.fulfilled, (state:any, action) => {
        state.resetisLoading = false
        state.resetisSuccess = true
        state.resetdata = action.payload 
      })
      .addCase(resetPassword.rejected, (state:any, action) => {
        state.resetisLoading = false
        state.resetisError = true
        state.resetmessage = action.payload
        state.resetdata = [] 
      })  

      // Update Profile
      .addCase(updateProfile.pending, (state) => {
        state.profileisLoading = true 
      })
      .addCase(updateProfile.fulfilled, (state:any, action) => {
        state.profileisLoading = false
        state.profileisSuccess = true
        state.profiledata = action.payload 
      })
      .addCase(updateProfile.rejected, (state:any, action) => {
        state.profileisLoading = false
        state.profileisError = true
        state.profilemessage = action.payload
        state.profiledata = [] 
      })  

      
      // Current User
      .addCase(currentUser.pending, (state) => {
        state.currentisLoading = true 
      })
      .addCase(currentUser.fulfilled, (state:any, action) => {
        state.currentisLoading = false
        state.currentisSuccess = true
        state.currentdata = action.payload 
      })
      .addCase(currentUser.rejected, (state:any, action) => {
        state.currentisLoading = false
        state.currentisError = true
        state.currentmessage = action.payload
        state.currentdata = [] 
      })  

      // Supervisor User
      .addCase(supervisorUser.pending, (state) => {
        state.supervisorUserisLoading = true 
      })
      .addCase(supervisorUser.fulfilled, (state:any, action) => {
        state.supervisorUserisLoading = false
        state.supervisorUserisSuccess = true
        state.supervisorUserdata = action.payload 
      })
      .addCase(supervisorUser.rejected, (state:any, action) => {
        state.supervisorUserisLoading = false
        state.supervisorUserisError = true
        state.supervisorUsermessage = action.payload
        state.supervisorUserdata = [] 
      })  
      
  },
})

export const { reset  } = authSlice.actions
export default authSlice.reducer
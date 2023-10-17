import { createSlice } from "@reduxjs/toolkit";


export const AuthSlice = createSlice({
        name:'auth',
        initialState:{
            token:null,
            login:false,
            role: null,
        },
        reducers:{
            logout: state =>{
                state.login = !state.login
                state.token = null
            },
            login: (state,action) => {
            state.login = true
            state.token = action.payload.token
            state.role = action.payload.role
            },
            
        }
})
export const { logout, login} = AuthSlice.actions
export default AuthSlice.reducer
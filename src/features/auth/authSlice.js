import { createSlice } from "@reduxjs/toolkit";
import { registerUser, loginUser, logoutUser } from "../actions/authActions";
import { getLocalStorage } from "../../helpers/localStorage";


const USER = getLocalStorage("user") ? getLocalStorage("user") : null

const initialState = {
    user: USER,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}


export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset: (state) => {
            return {
                ...state,
                isError: false,
                isSuccess: false,
                isLoading:false,
                message: '',

            }

        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(
                registerUser.pending,
                (state) => {
                    state.isLoading = true;
                }
            )
            .addCase(
                registerUser.fulfilled,
                (state, action) => {
                    state.isLoading = false;
                    state.isSuccess = true;
                    state.user = action.payload
                }
            )
            .addCase(
                registerUser.rejected,
                (state, action) => {
                    state.isLoading = false;
                    state.isError = true;
                    state.message = action.payload;
                    state.user = null;
                }
            )
        builder.addCase(
            logoutUser.fulfilled,
            (state) => {
                state.user = null;
            }

        )
        builder.addCase(
            loginUser.pending,
            (state) => {
                state.isLoading = true;
            }
        )
            .addCase(loginUser.fulfilled,
                (state, action) => {
                    state.isLoading = false;
                    state.isSuccess = true;
                    state.user = action.payload;
                })
            .addCase(loginUser.rejected,
                (state, action) => {
                    state.isLoading = false;
                    state.isError = true;
                    state.message = action.payload;
                    state.user = null;
                })
    }
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
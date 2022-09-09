import { createSlice } from "@reduxjs/toolkit";
import { registerUser, loginUser, logoutUser } from "../actions/authActions";
import { fetchAllClassAction } from "../actions/classActions";
import { getLocalStorage } from "../../helpers/localStorage";


const USER = getLocalStorage("user") ? getLocalStorage("user") : null
const initialState = {
    user: USER,
    classes: null,
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
                isLoading: false,
                message: '',

            }

        },
        resetClass: (state) => {
            return {
                ...state,
                classes: null
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
            .addCase(fetchAllClassAction.fulfilled,
                (state, action) => {
                    state.classes = action.payload?.data
                    state.isSuccess = true;

                }
            )
            .addCase(fetchAllClassAction.rejected, (state, action) => {
                state.isSuccess=false;
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
            .addCase(fetchAllClassAction.pending, (state) => {
                state.isLoading = true;
            })
    }
}
);

export const { reset } = authSlice.actions;
export const {resetClass } = authSlice.actions;
export default authSlice.reducer;
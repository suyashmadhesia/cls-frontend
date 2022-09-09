import React from 'react'
import { logoutUser } from '../features/actions/authActions'
import { fetchAllClassAction } from '../features/actions/classActions'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { reset, resetClass } from '../features/auth/authSlice'
import { notify } from '../helpers/notify';
import {
    ERROR_NOTIFICATION,
    SUCCESS_NOTIFICATION,
} from "../helpers/notificationTypes";
import { useEffect } from 'react'

const Classroom = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const state = useSelector(state => state.auth);

    useEffect(() => {
        if (state.user) {
            dispatch(fetchAllClassAction({ id: state.user?.account_id, token: state.user?.token, url: "/api/u/" }))
        }

        dispatch(reset())

    }, [state.user, dispatch])

    useEffect(() => {
        if (state.error) {
            notify(state.message, ERROR_NOTIFICATION, "error")
            dispatch(reset())
        }

    }, [
        state.error, dispatch, state.message
    ])
    
    useEffect(() => {
        if (state.isSuccess) {
            dispatch(reset())
        }

    }, [
        state.isSuccess, dispatch
    ])

    if (state.isLoading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <h1>Loading...</h1>
            </div>
        )
    }
    return (
        <div className="text-center justify-center ">
            <h1>welcome to Classroom {state.user.account_id}</h1>
            <button className='bg-black text-white' onClick={() => {
                dispatch(logoutUser())
                dispatch(reset())
                dispatch(resetClass())
                navigate('/login')
                notify("Logged out successfully", SUCCESS_NOTIFICATION, "logout")
            }}>
                Logout
            </button>
        </div>
    )
}

export default Classroom

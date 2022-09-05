import React from 'react'
import { logoutUser } from '../features/actions/authActions'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { reset } from '../features/auth/authSlice'
import { notify } from '../helpers/notify';
import {
    SUCCESS_NOTIFICATION,
} from "../helpers/notificationTypes";

const Classroom = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const state = useSelector(state => state.auth);

    
    return (
        <div className="text-center justify-center ">
            <h1>welcome to Classroom {state.user.account_id}</h1>
            <button className='bg-black text-white' onClick={() => {
                dispatch(logoutUser())
                dispatch(reset())
                navigate('/login')
                notify("Logged out successfully", SUCCESS_NOTIFICATION, "logout")
            }}>
                Logout
            </button>
        </div>
    )
}

export default Classroom

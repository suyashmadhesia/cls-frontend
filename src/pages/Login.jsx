import React from 'react'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import image from '../assets/loginimage.png'
import { useNavigate } from 'react-router-dom';
import { reset } from '../features/auth/authSlice'
import { loginUser } from '../features/actions/authActions'
import { notify } from '../helpers/notify';
import {Link} from "react-router-dom";
import {
    SUCCESS_NOTIFICATION,
    ERROR_NOTIFICATION,
} from "../helpers/notificationTypes";

const Login = () => {


    const [formData, setFormData] = useState({
        username: "",
        password: "",
    })

    const handleChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const state = useSelector((state) => state.auth)


    const handleSubmit = () => {
        if (!formData.username || !formData.password) {
            notify("Fill all the fields", ERROR_NOTIFICATION, "error")
            return
        }
        else {
            const userData = {
                account_id: formData.username,
                password: formData.password,

            }

            dispatch(loginUser(userData));
        }
    }

    useEffect(() => {
        if(state.isError){
            notify(state.message, ERROR_NOTIFICATION, "error")
        }
        if(state.isSuccess || state.user){
            navigate('/')
            notify("Logged in successfully", SUCCESS_NOTIFICATION, "loggedIN")
        }
        dispatch(reset())
    }, [state.user, state.isError, state.isSuccess, state.message, navigate, dispatch])


    if (state.isLoading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <h1>Loading...</h1>
            </div>
        )
    }

    return (
        <div className="flex h-screen items-center bg-purple  justify-between">
            <div className="  w-1/2">
                <img className="ml-auto mr-auto block w-3/4"
                    src={image}
                    alt="LoginImage"
                />
            </div>
            <div className="h-screen flex m-auto  justify-center relative items-center bg-white w-1/2 ">
                <div className=" w-3/4  text-center">
                    <h1 className="text-3xl my-2 ">WELCOME BACK </h1>
                    <p className="text-gray-400 my-5">Enter username and password to login
                        <br />in your account.</p>
                    <div className="items-center    justify-center">
                        <form autoComplete='off'>


                            <input onChange={handleChange} placeholder="username" value={formData.username} className="h-12 w-3/4 my-6 rounded-xl border-2 px-5 focus:border-purple active:border-3 focus:outline-none" type="text" name="username" />


                            <input onChange={handleChange} placeholder="password" value={formData.password} className="h-12 w-3/4 my-6 border-2 rounded-xl px-5 focus:border-purple active:border-3 focus:outline-none" type="password" name="password" />


                        </form>
                        <div>
                            <button onClick={() => {
                                handleSubmit();
                            }} className="mt-8 mb-3 bg-purple text-white rounded-lg h-12 w-3/4  ">login </button>
                        </div>
                        <div className="text-gray-400 text-base mt-1">
                            Not Register ? <span className="text-purple"><Link to="/register">Register</Link></span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Login

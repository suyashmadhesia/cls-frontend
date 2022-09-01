import React from 'react'
import { useState, useEffect } from 'react'
import image from '../assets/loginimage.png'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { registerUser, reset } from '../features/auth/authSlice'


const Regsiter = () => {
    const [formState, setFormState] = useState({
        username: "",
        password: "",
        confirmPassword: "",
        email: "",
    })

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const state = useSelector((state) => state.auth)

    const onChange = (e) => {
        setFormState((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const handleSubmit = () => {
        if (!formState.username || !formState.password || !formState.confirmPassword || !formState.email) {
            toast.error("Please fill all the fields")
            return
        }
        if (formState.password !== formState.confirmPassword) {
            toast.error("Passwords do not match")
        } else {
            const userData = {
                account_id: formState.username,
                password: formState.password,
                email: formState.email,
            }

            dispatch(registerUser(userData));
        }
    }

    useEffect(() => {
        if(state.isError){
            toast.error(state.message)
        }
        if(state.isSuccess || state.user){
            toast.success("Welcome to Classroom")
            navigate('/classroom')
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
            <div className="h-screen flex m-auto  justify-center relative items-center bg-white w-1/2">
                <div className=" w-3/4 text-center">
                    <h1 className="text-3xl my-2 ">WELCOME</h1>
                    <p className="text-gray-400 my-5">Enter username and password to login
                        <br />in your account.</p>
                    <div className="items-center justify-center">
                        <form className="">



                            <input onChange={onChange} placeholder="Username" value={formState.username} name="username" className="h-12 w-3/4 my-4 rounded-xl border-2 px-5" type="text" />

                            <input onChange={onChange} placeholder="Password" value={formState.password} name="password" className="h-12 w-3/4 my-4 rounded-xl border-2 px-5" type="password" />

                            <input onChange={onChange} placeholder="Confirm Password" value={formState.confirmPassword} name="confirmPassword" className="h-12 w-3/4 my-4 rounded-xl border-2 px-5" type="password" />

                            <input onChange={onChange} placeholder="Email" value={formState.email} name="email" className="h-12 w-3/4 mt-3 mb-1 rounded-xl border-2 px-5" type="text" />

                        </form>
                        <div>
                            <div className="text-right mr-16">
                                <button className="text-purple">Forgot Password?</button>
                            </div>
                            <button onClick={handleSubmit} className="h-12 w-3/4 mt-6 mb-1 rounded-xl border-2 px-5 bg-purple text-white">Register</button>
                        </div>
                        <button onClick={() => { }} className="text-purple">user already exists ?</button>


                    </div>
                </div>

            </div>
        </div>
    )
}

export default Regsiter

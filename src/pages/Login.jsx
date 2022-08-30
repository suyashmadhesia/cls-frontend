import React from 'react'
// import { useState } from 'react'

const Login = () => {
    // const [state, setstate] = useState("")


    return (
        <div className = "flex items-center justify-center text-lg text-center">
           <div className = " p-4 mx-5 my-[125px] h-[400px] w-[600px] bg-purple-100 shadow-md rounded-lg">
               <h1 className = "text-3xl">Login </h1>
               <div className = "items-center">
               <form className = "grid my-5">
                    <label className = "my-12 flex  justify-between items-center">
                        Name:
                        <input className = "h-10 w-[490px] ml-4 rounded-xl" type="text" name="name" />
                    </label>
                    <label className = "flex justify-between items-center">
                        Password:
                        <input className = "h-10 w-[490px] rounded-xl" type="text" name="name" />
                    </label>
                    
                </form>
                <div className = "flex justify-between ">
                <button className = "my-7 bg-cyan-400 rounded-lg px-7 py-2">login </button>
                <button className = "my-7 bg-cyan-400 rounded-lg px-7 py-2">Register</button>
                </div>
               
               </div>
           </div>

        </div>
    )
}

export default Login

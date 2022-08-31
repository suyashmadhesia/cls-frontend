import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    
    const URL = process.env.REACT_APP_API_URL;
    const [username, setusername] = useState('')
    const [userPassword, setPassword] = useState('')
    const usernameHndl = (e) =>{
        setusername(e.target.value);
        // console.log(username)
    }
    const passwordHndl = (e) =>{
        setPassword(e.target.value)
        // console.log(userPassword)
    }

    const navigate = useNavigate();
        const handleChange = () =>{
            navigate('/Register')
        }
    

    const handleLogin = () =>{
        if(!username || !userPassword){
            alert("empty username or password")
            return
        }
        fetch(`${URL}/api/login`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ account_id: username, password: userPassword })
          }).then(async res => {
            setPassword('')
            setusername('')
            let data = await res.json()
            if (res.status === 200) {
                console.log(data)
              }
        }).catch(e=>console.log(e))
    }


    return (
        <div className = "flex items-center justify-center text-lg text-center">
           <div className = " p-4 mx-5 my-[125px] h-[400px] w-[600px] bg-purple-100 shadow-md rounded-lg">
               <h1 className = "text-3xl">Login </h1>
               <div className = "items-center">
               <form className = "grid my-5">
                    <label className = "my-12 flex  justify-between items-center">
                        Name:
                        <input onChange = {usernameHndl} value = {username} className = "h-10 w-[490px] ml-4 rounded-xl px-3" type="text" name="name" />
                    </label>
                    <label className = "flex justify-between items-center">
                        Password:
                        <input onChange = {passwordHndl} value = {userPassword} className = "h-10 w-[490px] rounded-xl px-3" type="text" name="name" />
                    </label>
                    
                </form>
                <div className = "flex justify-between  mx-5">
                <button  onClick = {handleLogin}className = "my-7 bg-cyan-400 rounded-lg px-7 py-2">login </button>
                <button  onClick = {handleChange} className = "my-7 bg-cyan-400 rounded-lg px-7 py-2">Register</button>
                </div>
               
               </div>
           </div>

        </div>
    )
}

export default Login

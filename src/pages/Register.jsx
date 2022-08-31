import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import image from '../assets/loginimage.png'



const Regsiter = () => {
    const URL = process.env.REACT_APP_API_URL; 
    const [username, setusername] = useState('')
    const [email ,setEmail] = useState('');
    const [userPassword, setPassword] = useState('');
    const usernameHndl = (e)=>{
        setusername(e.target.value)
    }
    const passwordHndl = (e) =>{
        setPassword(e.target.value)
    }

    const emailHndl = (e) =>{
        setEmail(e.target.value)
    }

    const navigate = useNavigate();
        const handleChange = () =>{
            navigate('/Login')
        }
    const navtoClass = () =>{
        navigate('/Classroom')
    }

    const handleRegister = () =>{
        if(!username || !userPassword || !email){
            alert("empty username or userPassword or email")
            return 
        }

        fetch(`${URL}/api/register`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ account_id: username, password: userPassword, email: email })
          }).then(async res => {
            setusername("")
            setPassword("")
            setEmail("")
            let data = await res.json()
            if (res.status === 201){
                // setData(data)
                // localStorage.setItem('token', data.token)
                // localStorage.setItem('account_id', data.account_id)
                // getAllClasses()
               navtoClass()
                console.log(data)
        }
        else {
          alert(data.error)
        }
    }).catch(e=> console.log(e))
}
    return (
        <div className = "flex h-screen items-center bg-purple  justify-between">
            <div className = "  w-1/2">
                <img  className = "ml-auto mr-auto block w-3/4"
                src = {image} 
                alt = "LoginImage"
                />
            </div>
            <div className = "h-screen flex m-auto  justify-center relative items-center bg-white w-1/2">
            <div className = " w-3/4 text-center">
            <h1 className = "text-3xl my-2 ">WELCOME</h1>
                <p className = "text-gray-400 my-5">Enter username and password to login 
                        <br/>in your account.</p>
                <div className = "items-center justify-center"> 
                    <form className = "">
                
                            
                        
                            <input onChange = {usernameHndl} placeholder = "username" value = {username} className = "h-12 w-3/4 my-4 rounded-xl border-2 px-5" type="text" name="name" />
                        
                            <input onChange = {passwordHndl}  placeholder = "Password"   value = {userPassword} className = "h-12 w-3/4 my-4 rounded-xl border-2 px-5" type="text" name="name" />

                            <input onChange = {passwordHndl} placeholder = "confirm Password" value = {userPassword} className = "h-12 w-3/4 my-4 rounded-xl border-2 px-5" type="text" name="name" />

                            <input onChange = {emailHndl} placeholder = "Email" value = {email} className = "h-12 w-3/4 mt-3 mb-1 rounded-xl border-2 px-5" type="text" name="name" />
                        
                    </form>
                <div>
                <div className = "text-right mr-16">
                    <button  className = "text-purple">Forgot Password?</button>
                </div>
                    <button onClick = {handleRegister}  className = "h-12 w-3/4 mt-6 mb-1 rounded-xl border-2 px-5 bg-purple text-white">Register</button>
                </div>
                    <button onClick = {handleChange} className = "text-purple">user already exists ?</button>

                
                </div>
            </div>  

            </div>
        </div>
    )
}

export default Regsiter

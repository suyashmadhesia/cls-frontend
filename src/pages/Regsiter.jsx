import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
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
                console.log(data)
        }
        else {
          alert(data.error)
        }
    }).catch(e=> console.log(e))
}
    return (
        <div className = "flex items-center justify-center text-lg text-center">
           <div className = " p-4 mx-5 my-[125px] h-[400px] w-[600px] bg-purple-100 shadow-md rounded-lg">
               <h1 className = "text-3xl">Register</h1>
               <div className = "items-center">        <form className = "grid my-5">
               <label className = "my-4 flex  justify-between items-center">
                        Email:
                        <input onChange = {emailHndl} value = {email} className = "h-10 w-[490px] ml-4 rounded-xl px-3" type="text" name="name" />
                    </label>
                    <label className = "my-4 flex  justify-between items-center">
                        Name:
                        <input onChange = {usernameHndl} value = {username} className = "h-10 w-[490px] ml-4 rounded-xl px-3" type="text" name="name" />
                    </label>
                    <label className = " my-4 flex justify-between items-center">
                        Password:
                        <input onChange = {passwordHndl} value = {userPassword} className = "h-10 w-[490px] rounded-xl px-3" type="text" name="name" />
                    </label>
                    
                </form>
                <div className = "flex justify-between  mx-5">
                <button onClick = {handleChange} className = "my-7 bg-cyan-400 rounded-lg px-7 py-2">login </button>
                <button onClick = {handleRegister}  className = "my-7 bg-cyan-400 rounded-lg px-7 py-2">Register</button>
                </div>
               
               </div>
           </div>

        </div>
    )
}

export default Regsiter

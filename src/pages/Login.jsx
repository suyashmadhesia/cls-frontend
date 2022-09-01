import React from 'react'
import { useState ,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import image from '../assets/loginimage.png'

const Login = () => {
    
    const URL = process.env.REACT_APP_API_URL;
    const [username, setusername] = useState('')
    const [userPassword, setPassword] = useState('')
    const usernameHndl = (e) =>{
        setusername(e.target.value);
       
    }
    const passwordHndl = (e) =>{
        setPassword(e.target.value)
        // console.log(userPassword)
    }

    const navigate = useNavigate();
        const handleChange = () =>{
            navigate('/Register')
        }
        const navtoClass = () =>{
            navigate('/Classroom')
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
                
                localStorage.setItem('token', data.token)
                localStorage.setItem('account_id', data.account_id)
                navtoClass();
                console.log(data)
              }
        }).catch(e=>console.log(e))
    }

    useEffect(() => {
       if(localStorage.getItem('token')){
           navtoClass();
       }
    }, [])


    return (
        <div className = "flex h-screen items-center bg-purple  justify-between">
            <div className = "  w-1/2">
                <img  className = "ml-auto mr-auto block w-2/4"
                src = {image} 
                alt = "LoginImage"
                />
            </div>
            <div className = "h-screen flex m-auto  justify-center relative items-center bg-white w-1/2 ">
            <div className = " w-3/4  text-center">
                <h1 className = "text-3xl my-2 ">WELCOME BACK </h1>
                <p className = "text-gray-400 my-5">Enter username and password to login 
                        <br/>in your account.</p>
                <div className = "items-center    justify-center">
                <form className = "">
                        
                           
                            <input onChange = {usernameHndl}  placeholder = "username"  value = {username} className = "h-12 w-3/4 my-6 rounded-xl border-2 px-5" type="text" name="name" />
                        
                        
                            <input onChange = {passwordHndl} placeholder = "password" value = {userPassword} className = "h-12 w-3/4 my-6 border-2 rounded-xl px-5" type="text" name="name" />
                        
                        
                    </form>
                    <div>
                    <button  onClick = {handleLogin}className = "mt-8 mb-3 bg-purple text-white rounded-lg h-12 w-3/4  ">login </button>
                    </div>
                    <button onClick = {handleChange} className = "text-purple">New User ?</button>
                
                </div>
            </div>

            </div>
        </div>
    )
}

export default Login

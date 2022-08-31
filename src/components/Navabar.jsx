import React from 'react'
import { useNavigate } from 'react-router-dom'
const Navabar = () => {
   
        const navigate = useNavigate();
        const handleChange = () =>{
            navigate('/Login')
        }
    
    return (
        
            <div className = "flex justify-between mx-10 fixed w-full bg-purple-50 shadow-xl ">
                <div className = "flex my-5 text-2xl " >
                    <h1 className = "font-bold">CLASS</h1>ROOM
                </div>
                {/* <div className = "my-5">
                    <button>Assignment</button>
                </div> */}
                <div className = "my-5 text-base ">
                    <button  className = "px-5  text-purple-800 py-1  bg-none border-2 rounded-2xl border-solid border-purple-800" onClick = {handleChange}>login</button>
                </div>
                
            </div>
       
    )
}

export default Navabar

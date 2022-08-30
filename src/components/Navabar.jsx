import React from 'react'
import { useNavigate } from 'react-router-dom'
const Navabar = () => {
   
        const navigate = useNavigate();
        const handleChange = () =>{
            navigate('/Login')
        }
    
    return (
        <div className = "flex justify-between  bg-blue-300 shadow-xl text-lg ">
            <div className = "mx-10 my-5" >
                Classroom
            </div>
            <div className = "my-5">
                <button>Assignment</button>
            </div>
            <div className = "mx-10 my-5">
                <button onClick = {handleChange}>Login</button>
            </div>
            
        </div>
    )
}

export default Navabar

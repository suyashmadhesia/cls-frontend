import React from 'react'
import { useNavigate } from 'react-router-dom'
const Navabar = () => {
   
        const navigate = useNavigate();
        const handleChange = () =>{
            navigate('/Login')
        }
    
    return (
        
            <div className='fixed w-full bg-background top-0' style={{zIndex:100,}}>
                <div className = "flex justify-between">
                <div className = "flex my-5 text-2xl ml-8" >
                    <h1 className = "font-bold">CLASS</h1>ROOM
                </div>
                {/* <div className = "my-5">
                    <button>Assignment</button>
                </div> */}
                <div className = "mt-5 text-base mr-8">
                    <button className = "px-5  text-purple py-1 border-2 rounded-2xl border-solid border-purple" onClick = {handleChange}>Login</button>
                </div>
                
            </div>
            </div>
       
    )
}

export default Navabar

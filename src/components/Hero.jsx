import React from 'react'
import image from '../assets/cls_image.png'
import { useNavigate } from 'react-router-dom';
const Hero = () => {
    const navigate = useNavigate();
        const handleChange = () =>{
            navigate('/Register')
        }
    return (
        <div className = "bg-purple-50  h-screen overflow-y-hidden flex-wrap flex justify-between   items-center ">
            <div className = "items-center my-32 mx-10 ml-[78px]">
               <h1 className = "text-6xl font-bold  my-2">Build Better<br/>
                Assignments</h1>
               
               
               <h3 className = "text-base my-4">Implementing best pedagogical practices can be nearly<br/>
immpossible. We make it easy</h3>

                <div className = "text-white" >
                    <button  onClick = {handleChange} className = "border-r-6 rounded-3xl mx- my-3 px-6 py-2 bg-purple-800 ">
                        Get started
                    </button>
                </div> 
            </div>
            <div>
               <img className = "my-32  h-[600px] w-[600px] mr-5"
                src ={image}
                alt = "ima"
               />
            </div>
            
        </div>
    )
}

export default Hero

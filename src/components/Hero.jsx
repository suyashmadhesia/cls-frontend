import React from 'react'
import image from '../assets/cls_image.png'
import { useNavigate } from 'react-router-dom';
import "./styles/index.css";
const Hero = () => {
    const navigate = useNavigate();
    const handleChange = () => {
        navigate('/Register')
    }
    return (
        <div className="bg-background   h-screen overflow-y-hidden flex justify-between items-center ">
            <div className="items-center sm:text-left my-32 mx-10 ml-8">
                <h1 className="text-6xl font-bold  my-2">Build Better<br />
                    Assignments</h1>


                <h3 className="text-base my-4 text-gray-400">Implementing best pedagogical practices can be nearly<br />
                    immpossible. We make it easy</h3>

                <div className="text-white" >
                    <button onClick={handleChange} className="border-r-6 rounded-3xl my-2 px-6 py-2 bg-purple ">
                        Get started
                    </button>
                </div>
            </div>
            <div className='w-1/2 right-0'>
                <img className="block h-auto w-3/4  mr-auto ml-auto"
                    src={image}
                    alt="ima"
                />
            </div>

        </div>
    )
}

export default Hero

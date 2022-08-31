import React from 'react'
import Hero from '../components/Hero'
import Navabar from '../components/Navabar'


const Homepage = () => {
    return (
        <div className = "bg-background">
            <Navabar/>
            <Hero/>
        </div>
    )
}

export default Homepage

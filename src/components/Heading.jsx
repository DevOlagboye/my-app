import React from 'react'
import '../App.css'
import logo from '../logo.svg'
const Heading = () => {
    return (
        <div className="h2-text">
            <h2>Here is My Header</h2>
            <img src={logo} alt="React Logo" className="img"/>
            <p>Just a few Details of The Project</p>
        </div>
    )
}

export default Heading

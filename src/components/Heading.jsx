import React from 'react'
import '../App.css'
import logo from '../logo.svg'
const Heading = () => {
    return (
        <div className="container">
            <h2 className="h2-text">Here is My Header</h2>
            <img src={logo} alt="React Logo" className="img"/>
            <p>Just a few Details of The Project</p>
            <p>Currently Writing Some JSX, and Making Some Progress So Far, Loving it</p>
        </div>
    )
}

export default Heading

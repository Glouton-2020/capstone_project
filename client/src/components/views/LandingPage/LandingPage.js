import React from 'react'
import { FaBeer } from "react-icons/fa";

function LandingPage() {
    return (
        <>
            <div className="app">
                <FaBeer style={{ fontSize: '4rem' }} /><br />
                <span style={{ fontSize: '2rem' }}>AirSea Client</span>
            </div>
        </>
    )
}

export default LandingPage

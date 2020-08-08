import React from 'react'

function Footer() {
    return (
        <div style={{
            height: '80px', display: 'flex', 
            flexDirection: 'row', alignItems: 'center',
            justifyContent: 'center', fontSize:'1rem',
            // position: 'absolute', bottom: '-20em' 
        }}>
            <p> Copyright © 2020 AirSea Packing Group </p>
            <br/>
            <p> Terms &amp; Conditions </p>
        </div>
        
        
    )
}

export default Footer

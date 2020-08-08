import React from 'react'
import Carousel from "react-elastic-carousel";
import './LandingPage.css';



function LandingPage(props) {
    const state = {
        items: [
            {id: 1, source: 'https://media.giphy.com/media/OkJat1YNdoD3W/giphy.gif'},
            {id: 2, source: 'https://media.giphy.com/media/rCQTCy4rvuxR6/giphy.gif'},
            {id: 3, source: 'https://media.giphy.com/media/dvsgFTicRYOdy/giphy.gif'},
            
            
        ]
    };

const handleChange = e => {
    
}

    return (
            <div className="app">
                <h1 className="title">AirSea Packing </h1>
                    <Carousel className="carousel" onChange={handleChange}>
                        {state.items.map(item => (
                            <div key={item.id}>
                                <img className='carousel-image' src={item.source} alt=''/>
                            </div>
                        ))}
                    </Carousel>

                {/* Stretch Goal, add card containers */}
            </div>

    )
}

export default LandingPage

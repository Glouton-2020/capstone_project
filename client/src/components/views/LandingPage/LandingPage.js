import React from 'react'
import Carousel from "react-elastic-carousel";
import './LandingPage.css';



function LandingPage(props) {
    const state = {
        items: [
            {id: 1, source: 'https://media.giphy.com/media/J1n1BFf715ORq/giphy.gif'},
            {id: 2, source: 'https://media.giphy.com/media/nOBv4FaG7o1Hy/giphy.gif'},
            {id: 3, source: 'https://media.giphy.com/media/J1n1BFf715ORq/giphy.gif'},
        ]
    };

const handleChange = e => {
    
}

    return (
            <div className="app">
                <span style={{ fontSize: '2rem' }}>AirSea Client</span>
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

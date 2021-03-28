import React from 'react'

import Events from '../Events/Events'

const Home = () => {

    const events = [
        {
            name:'Child Support',
            pic: 'animalShelter.png'
        },
        {
            name:'Animal Shelter',
            pic: 'babySit.png'
        },
        {
            name:'Bird House',
            pic: 'birdHouse.png'
        },
        {
            name:'Good student',
            pic: 'childSupport.png'
        },
        {
            name:'Child Support',
            pic: 'cleanWater.png'
        },
        {
            name:'Child Support',
            pic: 'clearnPark.png'
        }
    ]

    return (
        <div className="row">
            {
                events.map(event => <Events ev={event}/>)
            }
        </div>
    )
}

export default Home

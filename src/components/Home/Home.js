import React from 'react'
import AddEvents from '../AddEvents/AddEvents'

const Home = () => {

    const events = [
        {
            name:'Child Support',
            pic: ''
        },
        {
            name:'Animal Shelter',
            pic: ''
        },
        {
            name:'Bird House',
            pic: ''
        },
        {
            name:'Good student',
            pic: ''
        },
        {
            name:'Child Support',
            pic: ''
        },
        {
            name:'Child Support',
            pic: ''
        }
    ]

    return (
        <div>
            {
                events.map(event => <AddEvents ev={event}/>)
            }
        </div>
    )
}

export default Home

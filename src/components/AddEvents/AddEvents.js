import React from 'react'

const AddEvents = ({ev}) => {
    return (
        <div className="col-md-3">
        <img style={{height:'300px'}} src={require(`../../img/${ev.pic}`)} alt=".."/>
            <h3>{ev.name}</h3>
        </div>
    )
}

export default AddEvents

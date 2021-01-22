import React from 'react' 
import Image from 'react-bootstrap/Image'

function Photo ({trip}){

    const {
        id,
        date,
        description,
        location,
        image
    } = trip

    return (
        <div>
            {/* <Image src={image} fluid /> */}
            <Image src={image} rounded />
            {/* <img src={image} alt={description}></img> */}
            <p>Description: {description}</p>
            <p>Location: {location}</p> 
            <p>Date: {date}</p>
            
           
        </div>
        
    )
}

export default Photo 
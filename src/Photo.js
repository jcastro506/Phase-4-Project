import React from 'react' 
import Image from 'react-bootstrap/Image'

function Photo ({trip}){

    const {
        id,
        date,
        description,
        location,
        image_url,
        likes, 
        user
    } = trip

    return (
        <div>
            {/* <Image src={image} fluid /> */}
            {/* <Image src={image} rounded /> */}
            <img src={image_url} alt={description}></img>
            <p>Creator: {user.name}</p>
            <p>Description: {description}</p>
            <p>Location: {location}</p> 
            <p>Date: {date}</p>
            <p>Likes: {likes}</p>
            
           
        </div>
        
    )
}

export default Photo 
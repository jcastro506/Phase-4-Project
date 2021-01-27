import React from 'react'
import UserPhotos from './UserPhotos.js'
import { Link } from "react-router-dom"


function User ({photos, removePic}){
    const eachPhoto = photos.map(function(photo){
    return <UserPhotos key={photo.id} photo={photo} removePic={removePic}/>
    })
    
    return(
     <div>
        <Link to="/">Home</Link>
        <h2>My Photos!</h2>
        {eachPhoto}
    </div>
    )

}

export default User 
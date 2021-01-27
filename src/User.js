import React from 'react'
import UserPhotos from './UserPhotos.js'

function User (photosArr){
    const eachPhoto = photosArr.map(function(photo){
    <UserPhotos key={photo.id} photo={photo} />
    })
    
    return(
     <div>
        <h2>My Photos!</h2>
        {eachPhoto}
    </div>
    )

}

export default User 
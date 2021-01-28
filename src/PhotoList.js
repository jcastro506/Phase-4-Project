import React from 'react'
import Photo from "./Photo.js"
import Button from 'react-bootstrap/Button'


function PhotoList ({patchLikes, allTrips, handleMorePhotos, removePic}){
    const eachTrip = allTrips.map(function(trip){
        return <Photo patchLikes={patchLikes} key={trip.id} removePic={removePic} trip={trip} />
    })

    return (
        <div>
            <h1>What Other User's Are Posting!</h1>
            <Button className="button" onClick={handleMorePhotos} className="ui button" type="submit" variant="primary">Want More Photos?</Button>{' '}
            {eachTrip}
        </div>
    )
}

export default PhotoList
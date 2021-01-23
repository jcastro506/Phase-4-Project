import React from 'react'
import Photo from "./Photo.js"
import Button from 'react-bootstrap/Button';


function PhotoList ({allTrips, handleMorePhotos}){
    const eachTrip = allTrips.map(function(trip){
        return <Photo key={trip.id} trip={trip} />
    })

    return (
        <div>
            <h1>All Photos!</h1>
            <Button onClick={handleMorePhotos} className="ui button" type="submit" variant="primary">Want More Photos?</Button>{' '}
            {eachTrip}
        </div>
    )
}

export default PhotoList
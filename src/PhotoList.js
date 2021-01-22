import React from 'react'
import Photo from "./Photo.js"

function PhotoList ({allTrips}){
    const eachTrip = allTrips.map(function(trip){
        return <Photo key={trip.id} trip={trip} />
    })

    return (
        <div>
            <h1>All Photos!</h1>
            {eachTrip}
        </div>
    )
}

export default PhotoList
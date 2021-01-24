import React, {useState} from 'react' 
import Image from 'react-bootstrap/Image'

function Photo ({patchLikes, trip, removePic}){

    let {
        id,
        date,
        description,
        location,
        image_url,
        likes, 
        user
    } = trip

    const [totalLikes, setTotalLikes] = useState(likes)

    function addLike(id){
        setTotalLikes(totalLikes + 1)
        patchLikes(totalLikes, id)
    }

    function deletePic(){
        console.log("Delete Clicked")
        fetch(`http://localhost:3000/photos/${id}`, {
            method: "DELETE"
        })
        .then(r => r.json())
        .then(() => {
            removePic(id)
        } )
    }

    return (
        <div>
            {/* <Image src={image} fluid /> */}
            {/* <Image src={image} rounded /> */}
            <img src={image_url} alt={description}></img>
            {/* <p>Creator: {user}</p> */}
            <p>Description: {description}</p>
            <p>Location: {location}</p> 
            <p>Date: {date}</p>
            <button onClick={addLike}>Likes: {totalLikes}</button>
            <button onClick={deletePic}>Delete Pic</button>
              
        </div>
        
    )
}

export default Photo 
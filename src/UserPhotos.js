import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function UserPhotos({photo, removePic}){
    // const [
    //     date,
    //     description,
    //     image_url,
    //     likes,
    //     location
    // ] = photo

    function deletePic(){
        console.log("Delete Clicked")
        fetch(`http://localhost:3000/photos/${photo.id}`, {
            method: "DELETE"
        })
        .then(r => r.json())
        .then(() => {
            removePic(photo.id)
        } )
    }

    return (
        <div className="cards">
        <Card className="card" border="dark" style={{ width: '18rem'}}>
            <Card.Img className="pic" variant="top" src={photo.image_url} />
            <Card.Body>
                <Card.Title>{photo.location}</Card.Title>
                <Card.Text>
                {photo.description}
                </Card.Text>
                <Button className="button" variant="primary">Likes: {photo.likes}</Button>
                <Button className="button" variant="primary" onClick={deletePic}>Delete Pic</Button>
            </Card.Body>
        </Card> 
    </div>
    )
}

export default UserPhotos
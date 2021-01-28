import React, {useState} from 'react' 
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom"


function Photo ({patchLikes, trip, removePic}){

    const {
        id,
        date,
        description,
        location,
        image_url,
        likes, 
        user
    } = trip

    const [totalLikes, setTotalLikes] = useState(likes)
 
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

    function addLike(){
        setTotalLikes(totalLikes + 1)

        const newObj = {
            likes: (totalLikes+1)
        }
        patchLikes(likes, id)
    }

    return (
        <div className="cards">
            <Card className="card" border="dark" style={{ width: '18rem'}}>
                <Card.Img className="pic" variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{location}</Card.Title>
                    <Card.Text>
                    {description}
                    </Card.Text>
                    <Button className="button" variant="primary" onClick={addLike}>Likes: {totalLikes}</Button>
                </Card.Body>
            </Card>     
        </div>
    )
}

export default Photo 
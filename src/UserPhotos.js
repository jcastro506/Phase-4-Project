import React from 'react'
import Card from 'react-bootstrap/Card'


function UserPhotos({photo}){

    const [
        date,
        description,
        image_url,
        likes,
        location
    ] = photo

    return (
        <div className="cards">
        {/* <Image src={image} fluid />
        {/* <Image src={image} rounded /> */}
        {/* <Image src={image_url} rounded alt={description} fluid/> */}
        {/* <p>Creator: {user}</p> */}
        {/* <p>Description: {description}</p> */}
        {/* <p>Location: {location}</p>  */}
        {/* <p>Date: {date}</p> */}
        {/* <button onClick={addLike}>Likes: {totalLikes}</button> */}
        {/* <button onClick={deletePic}>Delete Pic</button> */} 
    
        <Card className="card" border="dark" style={{ width: '18rem'}}>
            <Card.Img className="pic" variant="top" src={image_url} />
            <Card.Body>
                <Card.Title>{location}</Card.Title>
                <Card.Text>
                {description}
                </Card.Text>
                {/* <Button className="button" variant="primary" onClick={deletePic}>Delete Pic</Button> */}
            </Card.Body>
        </Card>
 
          
    </div>
    )

}


export default UserPhotos
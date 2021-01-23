import React, {useState} from 'react' 
import Button from 'react-bootstrap/Button';


function CreatePhotoFrom ({handleNewPhoto}){
    
    const [date, setDate] = useState("")
    const [description, setDescription] = useState("")
    const [location, setLocation] = useState("")
    const [image_url, setImage] = useState("")
    const [likes, setLikes] = useState(0)

    function handleSubmit(e){
        e.preventDefault()

        const photoObj = {
            image_url,
            location,
            description,
            date, 
            likes
        }

        // console.log(photoObj)

        fetch("http://localhost:3000/photos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(photoObj),
        })
        .then(response => response.json())
        .then(photoObj => handleNewPhoto(photoObj))

        setDate("")
        setDescription("")
        setLocation("")
        setImage("")
    }
    
    return (
        <div className="">
         <form className="" onSubmit={handleSubmit}>
        <div className="">
            <input type="date" name="date" value={date} onChange={e => setDate(e.target.value)}/>
            <input type="text" name="description" placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />
            <input type="text" name="location" placeholder="City, Country" value={location} onChange={e => setLocation(e.target.value)}/>
            <input type="text" name="image" placeholder="Paste your image URl" value={image_url} onChange={e => setImage(e.target.value)}/>
        </div>
        {/* <button className="ui button" type="submit">
          Add Photo!
        </button> */}
        <Button className="ui button" type="submit" variant="primary">Add Photo!</Button>{' '}
      </form>
    </div>
    )
}

export default CreatePhotoFrom
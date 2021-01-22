import React, {useState} from 'react' 
import Button from 'react-bootstrap/Button';


function CreatePhotoFrom ({handleNewPhoto}){
    
    const [date, setDate] = useState("")
    const [description, setDescription] = useState("")
    const [location, setLocation] = useState("")
    const [image, setImage] = useState("")

    function handleSubmit(e){
        e.preventDefault()

        const newPhoto = {
            date,
            description,
            location,
            image 
        }

        handleNewPhoto(newPhoto)
    }
    
    
    return (
        <div className="">
         <form className="" onSubmit={handleSubmit}>
        <div className="">
            <input type="date" name="date" value={date} onChange={e => setDate(e.target.value)}/>
            <input type="text" name="description" placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />
            <input type="text" name="location" placeholder="City, Country" value={location} onChange={e => setLocation(e.target.value)}/>
            <input type="text" name="image" placeholder="Paste your image URl" value={image} onChange={e => setImage(e.target.value)}/>
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
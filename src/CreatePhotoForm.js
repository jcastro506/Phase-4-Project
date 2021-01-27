import React, {useState} from 'react' 
import Button from 'react-bootstrap/Button';

function CreatePhotoFrom ({handleNewPhoto, destinations, user}){
    
    const [date, setDate] = useState("")
    const [description, setDescription] = useState("")
    const [location, setLocation] = useState("")
    const [image_url, setImage] = useState("")
    const [likes, setLikes] = useState(0)
    const [selected, setSelected] = useState("")


    function handleSubmit(e){
        e.preventDefault()
        console.log(selected)
 
        const photoObj = {
            image_url,
            location,
            description,
            date, 
            likes,
            user,
            destination: selected
        }

        fetch("http://localhost:3000/photos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(photoObj),
        })
        .then(response => response.json())
        .then(photoObj => handleNewPhoto(photoObj))
        .catch(console.log)

        setDate("")
        setDescription("")
        setLocation("")
        setImage("")
    }

    return (
        <div className="">
         <form className="" onSubmit={handleSubmit}>
            <input type="date" name="date" value={date} onChange={e => setDate(e.target.value)}/>
            <input type="text" name="description" placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />
            <input type="text" name="location" placeholder="City, Country" value={location} onChange={e => setLocation(e.target.value)}/>
            <input type="text" name="image" placeholder="Paste your image URl" value={image_url} onChange={e => setImage(e.target.value)}/>
            <label>Where were ya?
                <select
                onChange={e => setSelected(e.target.value)}>
                    {destinations.map((dest) => (
                    <option key={dest.id} value={selected}>{dest.city}</option>
                    ))}
                </select>              
        </label>
        <Button className="ui-button" type="submit" variant="primary">Add Photo!</Button>{' '}
      </form>
    </div>
    )
}


export default CreatePhotoFrom
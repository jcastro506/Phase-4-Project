import './App.css';
import React, {useEffect, useState} from "react";
import PhotoList from "./PhotoList.js"
import NavBar from "./NavBar.js"
import User from "./User.js"
import { Switch, Route } from "react-router-dom";
import CreatePhotoFrom from './CreatePhotoForm';
import Photo from './Photo.js'



function App() {

  const [allTrips, setTrips] = useState([])
  const [search, setSearch] = useState("")
  const [page, setPage] = useState("/")
  const [photoIndex, setIndex] = useState(0)
  const [destinations, setDestinations] = useState([])
  const [user, setCurrentUser] = useState(null)
  const [userPhotos, setUserPhotos] = useState([])



  function handleMorePhotos() {
    setIndex((photoIndex) => (photoIndex + 4) % allTrips.length)
  }

  useEffect(() => {
    fetch(`http://localhost:3000/photos`)
    .then((r) => r.json())
    .then((photosArr) => setTrips(photosArr))
  }, [])


  useEffect(() => {
    fetch(`http://localhost:3000/destinations`)
    .then((r) => r.json())
    .then((destArr) => setDestinations(destArr))
  }, [])


  useEffect(() => {
    // fake auth
    fetch("http://localhost:3000/users/1")
      .then((r) => r.json())
      .then((user) => {
        // save the user into state
      setCurrentUser(user)
      setUserPhotos(user.getPhotos)
      console.log(user.getPhotos)
      })
    }, [])


   function handleNewPhoto(photoObj){
      console.log("New Obj", photoObj)
      const newTrips = [...userPhotos, photoObj]
      setUserPhotos(newTrips)
      // console.log(photoObj)
    }


  function deletePicture(id){
    console.log("Delete Picture", id)
    const newArray = userPhotos.filter(pic => pic.id !== id)
    setUserPhotos(newArray)
  }

  function editLikes(likes, id){
    console.log(id)
    fetch(`http://localhost:3000/photos/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({likes: (likes + 1)})
    })
    .then(response => response.json())
    .then(data => {
        let newArray = [...allTrips]
        let newObj = newArray.find(photo => photo.id === data.id)
        let idx = newArray.indexOf(newObj)
        newArray[idx] = data;
        setTrips(newArray)
  })
}

  const displayedPhotos = allTrips.filter((trip) => 
    trip.location.toLowerCase().includes(search.toLowerCase())).slice(photoIndex, photoIndex + 8)

  return (
    <div className="App">
      {/* <NavBar user={user} destinations={destinations} search={search} setSearch={setSearch} handleNewPhoto={handleNewPhoto}/> */}
      {/* <User photos={userPhotos}/> */}
      <Switch>
        <Route exact path="/">
          <NavBar user={user} destinations={destinations} search={search} setSearch={setSearch} handleNewPhoto={handleNewPhoto}/>
          <PhotoList patchLikes={editLikes} removePic={deletePicture} allTrips={displayedPhotos} handleMorePhotos={handleMorePhotos}/>
        </Route>
        <Route exact path="/users/1">
            <User photos={userPhotos} removePic={deletePicture} />
        </Route>
        <Route exact path="/photos/:id">
            <Photo trip={allTrips}/>
        </Route>
        <Route path="*">
          <h1>404 not found</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;

import './App.css';
import React, {useEffect, useState} from "react";
import PhotoList from "./PhotoList.js"
import NavBar from "./NavBar.js"
import { Switch, Route, Redirect } from "react-router-dom";


function App() {

  const [allTrips, setTrips] = useState([])
  const [search, setSearch] = useState("")
  const [page, setPage] = useState("/")
  const [photoIndex, setIndex] = useState(0)
  const [destinations, setDestinations] = useState([])
  const [user, setCurrentUser] = useState(null)

  function handleNewPhoto(photoObj){
    console.log("New Obj", photoObj)
    const newTrips = [...allTrips, photoObj]
    setTrips(newTrips)
    // console.log(photoObj)
  }

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
      console.log(user)
      })
    }, [])

  function deletePicture(id){
    console.log("Delete Picture", id)
    const newArray = allTrips.filter(trip => trip.id !== id)
    setTrips(newArray)
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
      <NavBar user={user} destinations={destinations} search={search} setSearch={setSearch} handleNewPhoto={handleNewPhoto}/>
      {/* <PhotoList patchLikes={editLikes} removePic={deletePicture} allTrips={displayedPhotos} handleMorePhotos={handleMorePhotos} />  */}
      <Switch>
        <Route path="/photo/1">
          
        </Route>
        <Route path="/">
          <PhotoList patchLikes={editLikes} removePic={deletePicture} allTrips={displayedPhotos} handleMorePhotos={handleMorePhotos}/>
        </Route>
        <Route path="*">
          <h1>404 not found</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;

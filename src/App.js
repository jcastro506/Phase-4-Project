import './App.css';
import React, {useEffect, useState} from "react";
import PhotoList from "./PhotoList.js"
import NavBar from "./NavBar.js"
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  const [allTrips, setTrips] = useState([])
  const [search, setSearch] = useState("")
  const [page, setPage] = useState("/")
  const [photoIndex, setIndex] = useState(0)

  
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


  function deletePicture(id){
    console.log("Delete Picture", id)
    const newArray = allTrips.filter(trip => trip.id !== id)
    setTrips(newArray)
  }

  const displayedPhotos = allTrips.filter((trip) => trip.location.toLowerCase().includes(search.toLowerCase())).slice(photoIndex, photoIndex + 8)
  // const displayedPhotos = allTrips.filter((trip) => trip.location.includes(search))

  return (
    <div className="App">
      <NavBar search={search} setSearch={setSearch} handleNewPhoto={handleNewPhoto}/>
      <PhotoList removePic={deletePicture} allTrips={displayedPhotos} handleMorePhotos={handleMorePhotos} /> 
    </div>
  );
}

export default App;

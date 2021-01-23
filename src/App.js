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
    const newTrips = [...allTrips, photoObj]
    setTrips(newTrips)
    console.log(photoObj)
  }


  function handleMorePhotos() {
    setIndex((photoIndex) => (photoIndex + 4) % allTrips.length)
  }


  useEffect(() => {
    fetch(`http://localhost:3000/photos`)
    .then((r) => r.json())
    .then((photosArr) => setTrips(photosArr))
  }, [])


  const displayedPhotos = allTrips.filter((trip) => trip.location.toLowerCase().includes(search)).slice(photoIndex, photoIndex + 8)


  return (
    <div className="App">
      <NavBar search={search} setSearch={setSearch} handleNewPhoto={handleNewPhoto}/>
      <PhotoList allTrips={displayedPhotos} handleMorePhotos={handleMorePhotos} /> 
    </div>
  );
}

export default App;

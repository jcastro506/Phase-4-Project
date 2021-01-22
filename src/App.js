import logo from './logo.svg';
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


const trips = [
    {
      "id": 1,
      "date": "2019-12-01",
      "description": "Trip to Hawaii!",
      "location": "Honolulu, Hawaii!",
      "image": "https://specials-images.forbesimg.com/imageserve/5e086a2f25ab5d0007cf74ec/960x0.jpg?cropX1=1&cropX2=1867&cropY1=0&cropY2=1244",
    },
    {
      "id": 2,
      "date": "2019-1-05",
      "description": "Had a great time in London!",
      "location": "London, England",
      "image": "https://imageproxy.themaven.net//https%3A%2F%2Fwww.history.com%2F.image%2FMTYyNDg1MjE3MTI1Mjc5Mzk4%2Ftopic-london-gettyimages-760251843-promo.jpg"
    },
    {
      "id": 3,
      "date": "2019-3-24",
      "description": "I miss Tokyo!",
      "location": "Tokyo, Japan",
      "image": "https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/02/a0002533/img/basic/a0002533_main.jpg?20201007131627&q=80&rw=750&rh=536"
    }
  ]



function App() {

  const [allTrips, setTrips] = useState(trips)
  const [search, setSearch] = useState("")


  function handleNewPhoto(photoObj){
    const newTrips = [...allTrips, photoObj]
    setTrips(newTrips)
    console.log(photoObj)
  }


  const displayedPhotos = allTrips.filter((trip) => trip.location.toLowerCase().includes(search))

  return (
    <div className="App">
      <NavBar allTrips={displayedPhotos} search={search} setSearch={setSearch} handleNewPhoto={handleNewPhoto} />
      <PhotoList allTrips={displayedPhotos} /> 
    </div>
  );
}

export default App;

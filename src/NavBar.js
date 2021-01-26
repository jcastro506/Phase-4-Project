import React, {useState} from 'react' 
import Search from './Search.js'
import CreatePhotoForm from './CreatePhotoForm.js'
import { Link } from "react-router-dom"

function NavBar({search, setSearch, handleNewPhoto, destinations, user}){

    const [loggedIn, setLoggedIn] = useState(false)
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")


    function toggleMessage() {
        setLoggedIn(!loggedIn)
    }
    
    function handleSubmit(e){
        e.preventDefault()
        {name = "Orval Homenick" ? "Welcome" :
        alert("You are not authorized to view this page!")}
        setName("")
        setPassword("")
    }

    return (
        <div>
        <h2> Working Title </h2>
        {loggedIn ? (
              <h1>Welcome, {user.name}</h1>
            ) : (
              <h1>Please Login or Sign Up</h1>
            )}
        <Search search={search} setSearch={setSearch}/>
        <CreatePhotoForm handleNewPhoto={handleNewPhoto} destinations={destinations}/>
        <nav>
            <form onSubmit={handleSubmit}>
                <input type="text" name="username" placeholder="Please Type Your Username" value={name} onChange={e => setName(e.target.value)}></input>
                <input type="password" name="password" placeholder="Please Type Your Password" value={password} onChange={e => setPassword(e.target.value)}></input>
            
            <button onClick={toggleMessage}>{loggedIn ? "Log Out" : "Log In"}</button>
            </form>
        </nav>
        </div>
    )
}

export default NavBar 
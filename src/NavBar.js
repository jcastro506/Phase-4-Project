import React, {useState} from 'react' 
import Search from './Search.js'
import CreatePhotoForm from './CreatePhotoForm.js'
import { Link } from "react-router-dom"

function NavBar({search, setSearch, handleNewPhoto}){


    return (
        <div>
        <h2> Working Title </h2>
        <Search search={search} setSearch={setSearch}/>
        <CreatePhotoForm handleNewPhoto={handleNewPhoto}/>
        <nav>
            
        </nav>
        </div>
    )
}

export default NavBar 
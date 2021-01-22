import React from 'react' 
import Search from './Search.js'
import CreatePhotoForm from './CreatePhotoForm.js'

function NavBar({allTrips, search, setSearch, handleNewPhoto}){
    return (
        <div>
        <h2> Working Title </h2>
        <Search search={search} setSearch={setSearch}/>
        <CreatePhotoForm handleNewPhoto={handleNewPhoto}/>
        </div>
    )
}

export default NavBar 
import React, {useState} from 'react' 
import Search from './Search.js'
import CreatePhotoForm from './CreatePhotoForm.js'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom"

function NavBar({search, setSearch, handleNewPhoto, destinations, user}){

    const [loggedIn, setLoggedIn] = useState(false)
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [login, setLogin] = useState(false)


    function toggleMessage() {
        setLoggedIn(!loggedIn)
    }
    
    function handleSubmit(e){
        e.preventDefault()
        // {name = "Isle Mills" ? "Welcome" :
        // alert("You are not authorized to view this page!")}
        setName("")
        setPassword("")
    }

    return (
        <div>
        
        <h1> Working Title </h1>
        <div className="login">
        {loggedIn ? (
              <h1>Welcome, {user.name}</h1>
            ) : (
              <h3>Please Login or Sign Up</h3>
            )}
            
            <Form className="login-form" onSubmit={handleSubmit}>
            <Form.Group className="email" controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control type="email" placeholder="Enter Email" value={name} onChange={e => setName(e.target.value)} />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="password" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>
            </Form.Group>
            <Button className="logBtn" variant="primary" type="submit" onClick={toggleMessage}>{loggedIn ? "Log Out" : "Log In"}</Button>
        </Form>
        {loggedIn ? (
                <Link to="/users/1">Your Projects</Link>
            ) : null
            }
        </div>

        <Search search={search} setSearch={setSearch}/>
        <CreatePhotoForm handleNewPhoto={handleNewPhoto} destinations={destinations} user={user}/>

        
        
            {/* <form onSubmit={handleSubmit}>
                <input type="text" name="username" placeholder="Please Type Your Username" value={name} onChange={e => setName(e.target.value)}></input>
                <input type="password" name="password" placeholder="Please Type Your Password" value={password} onChange={e => setPassword(e.target.value)}></input>
            
            <button onClick={toggleMessage}>{loggedIn ? "Log Out" : "Log In"}</button>
            </form> */}
        </div>
    )
}

export default NavBar 
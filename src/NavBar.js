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
    const [searchBtn, setSearchBtn] = useState(false)
    const [createBtn, setCreateBtn] = useState(false)

    function toggleMessage() {
        if(name !== "nydia.baumbach@connelly-fahey.biz"){
            return alert('Your Email does not exist')
        }
        else{
        setLoggedIn(!loggedIn)
        };
    }

    function handleClick(){
        setSearchBtn(!searchBtn)
    }

    function handleAdd(){
        setCreateBtn(!createBtn)
    }
    
    function handleSubmit(e){
        e.preventDefault()
        if(name !== "nydia.baumbach@connelly-fahey.biz" ){
           return alert('Your Email does not exist')
        }
        else{
            setName("")
            setPassword("")
        }
        // setName("")
        // setPassword("")
    }

    return (
        <div>
        <div className="login">
        <h1 className="title"> Pictopia </h1>
        {loggedIn ? (
            <h3>Welcome, {user.name}</h3>
            ) : (
                <h3>Please Login</h3>
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
        </div>
        <div className="buttons">
        <Button className="searchBtn" onClick={handleClick}>Wanna Search?</Button>
        <Button className="add-button" onClick={handleAdd}>Let's Add A Photo!</Button>

        {loggedIn ? (
                <Link className="your-projects" to="/users/1">Your Projects</Link>
            ) : null
            }
        {searchBtn ? (
            <Search search={search} setSearch={setSearch}/>
        ) : null
        }
        </div>
        {createBtn ? (
        <CreatePhotoForm handleNewPhoto={handleNewPhoto} destinations={destinations} user={user}/>
        ) : null }
            {/* <form onSubmit={handleSubmit}>
                <input type="text" name="username" placeholder="Please Type Your Username" value={name} onChange={e => setName(e.target.value)}></input>
                <input type="password" name="password" placeholder="Please Type Your Password" value={password} onChange={e => setPassword(e.target.value)}></input>
            
            <button onClick={toggleMessage}>{loggedIn ? "Log Out" : "Log In"}</button>
            </form> */}
        </div>
    )
}

export default NavBar 
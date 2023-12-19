import React, { useEffect, useState } from "react";
// import { Switch, Route } from "react-router-dom"; 
import {Outlet} from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import Signup from "./Signup"

function App() {
  const [user, setUser] = useState(null)
  const [locations, setLocations] = useState([])

  const context = {user, setUser, locations, setLocations}

  useEffect(() => {
    fetch('/authorized')
    .then((resp) => {
      if (resp.ok) {
        resp.json().then((user) => setUser(user))
      } else {
        // handle what should happen if not logged in
        console.log('No login')
      }
    }).then(()=>{
      fetch('/locations')
      .then((resp)=>{
        if (resp.ok) {
          resp.json().then((locations)=> {
            setLocations(locations)
          })
        }
      })
    })
  }, [])

  function handleLogout() {
    fetch('/logout', {
      method: 'DELETE'
    }).then((resp) => {
      if (resp.ok) {
        //  handle logout on frontend
        setUser(null)
        // naigate to route
      }
    })
  }

  if (!user) {
    return <Signup setUser={setUser} />
  }

  return (
    <Container>
      <Button variant="primary" onClick={handleLogout}>Logout</Button>
      <Outlet context={context}/>
    </Container>
  ) 
}

export default App;
 
import React, { useEffect, useState } from "react";
import {Outlet} from 'react-router-dom';
import Container from 'react-bootstrap/Container';

import Signup from "./Signup"
import NavBar from "./NavBar";

function App() {
  const [user, setUser] = useState(null)
  const [locations, setLocations] = useState([])
  const [ready, setReady] = useState(false)

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
            setLocations(locations[0])
          })
          setReady(true)
        }
      })
    })
  }, [])

  if(ready) {
    if (!user) {
      return <Signup setUser={setUser} />
    }
    return (
      <Container>
        <NavBar setUser={setUser}/>
        <Outlet context={context}/>
      </Container>
    ) 
  }
}

export default App;
 
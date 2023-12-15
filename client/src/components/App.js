import React, { useEffect, useState } from "react";
// import { Switch, Route } from "react-router-dom"; 
import Button from 'react-bootstrap/Button';

import Signup from "./Signup"

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch('/authorized')
    .then((resp) => {
      if (resp.ok) {
        resp.json().then((user) => setUser(user))
      } else {
        // handle what should happen if not logged in
        console.log('error')
      }
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

  return <div>
    in the site!
    <Button variant="primary" onClick={handleLogout}>Logout</Button>
  </div>
}

export default App;
 
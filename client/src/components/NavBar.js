import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar({ setUser }) {
  const nav = useNavigate()

  function handleLogout() {
    fetch('/logout', {
      method: 'DELETE'
    }).then((resp) => {
      if (resp.ok) {
        //  handle logout on frontend
        setUser(null)
        nav('/')
      }
    })
  }

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Pack Assist</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/locations">Locations</Nav.Link>
            <Nav.Link href="/trips">Trips</Nav.Link>
            <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar
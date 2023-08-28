import React from 'react'
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useNavigate } from 'react-router-dom';
import "./header.css"

const Header = () => {

  const userRole = localStorage.getItem('userRole');
  const userName = localStorage.getItem('userName');
  const navigate = useNavigate();

  const handleOut = (e) =>{
    localStorage.removeItem('userRole');
    localStorage.removeItem('userName');
    localStorage.removeItem('houseNo');

    navigate('/')
  }

  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Society</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto nav-container">
              <Nav.Link ><Link to="/">Home</Link></Nav.Link>
              <Nav.Link ><Link to="/about">About Us</Link></Nav.Link>

              {userRole ? 
              <ul>
                <li>
                   <h5>Hello, {userName} <span>({userRole})</span></h5> <Button onClick={handleOut}>Logout</Button>
                </li>
                
              </ul> : <></>}
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header

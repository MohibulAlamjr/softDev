import React, { Component } from 'react';
import Nav from 'react-bootstrap/esm/Nav';
import Navbar from 'react-bootstrap/esm/Navbar';
import Container from 'react-bootstrap/esm/Container';
import {NavLink} from 'react-router-dom';
import '../css/bootstrap.min.css';
import Button from 'react-bootstrap/esm/Button'
class Navbaarr extends Component {
    render() {
        return (
            <div>
             <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand ><NavLink style = {{color : 'white'}} exact activeStyle = {{color: 'red'}} to="/">softDev</NavLink></Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link ><NavLink style = {{color : 'white'}} exact activeStyle = {{color: 'red'}} to="/about">About</NavLink></Nav.Link>
     
      <Nav.Link ><NavLink style = {{color : 'white'}} exact activeStyle = {{color: 'red'}} to="/mywork">Mywork</NavLink></Nav.Link>
     <Button><NavLink style = {{color : 'white'}} exact activeStyle = {{color: 'red'}} to="/logout">Logout</NavLink></Button>
    </Nav>
    </Container>
  </Navbar>
            </div>
        );
    }
}

export default Navbaarr;
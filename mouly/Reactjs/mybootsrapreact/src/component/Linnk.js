import React, { Component } from 'react';
import Nav from 'react-bootstrap/esm/Nav';
import Navbar from 'react-bootstrap/esm/Navbar';
import Container from 'react-bootstrap/esm/Container';
import {NavLink} from 'react-router-dom';

import Button from 'react-bootstrap/esm/Button'
class Linnk extends Component {
    render() {
        return (
            <>
             <Navbar bg="dark" variant="dark">
    <Container>
    
    <Nav className="me-auto">
     
     <Button><NavLink style = {{color : 'white'}} exact activeStyle = {{color: 'red'}} to="/logout">Logout</NavLink></Button>
    </Nav>
    
    </Container>
  </Navbar>
            </>
        );
    }
}

export default Linnk;
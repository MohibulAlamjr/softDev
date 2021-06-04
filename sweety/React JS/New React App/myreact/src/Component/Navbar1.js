import React, { Component } from 'react';
import Nav from 'react-bootstrap/esm/Nav';
import Navbar from 'react-bootstrap/esm/Navbar';
import Form from 'react-bootstrap/esm/Form';
import Button from 'react-bootstrap/esm/Button';
import {NavLink} from 'react-router-dom';
import '../Css/Bootstrap.min.css'

class Navbar1 extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand > <NavLink style={{color:'red'}} exact activeStyle={{color:'#fff'}} to="/">Home</NavLink> </Navbar.Brand>
                    <Nav className="mr-auto">
                    <Nav.Link><NavLink to="/about">About</NavLink></Nav.Link>
                   
                    <Nav.Link><NavLink to="/mywork">Mywork</NavLink></Nav.Link>
                    <Nav.Link><NavLink to="/Login">Login</NavLink></Nav.Link>
                    </Nav>
                    <Form inline>
                   
                    <Button variant="outline-danger"><NavLink to="/logout">Logout</NavLink></Button>
                    
                    </Form>
                </Navbar><br/>
                
            </div>
        );
    }
}

export default Navbar1;
import React, { Component } from 'react';
import Nav from 'react-bootstrap/esm/Nav';
import Navbar from 'react-bootstrap/esm/Navbar';
import Form from 'react-bootstrap/esm/Form';
import Button from 'react-bootstrap/esm/Button';
import {NavLink} from 'react-router-dom';



import '../Css/bootstrap.min.css';

class Navbard extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand > <NavLink style={{color:'#c6c9d0'}} exact activeStyle={{color:'#fff'}} to="/">softDev</NavLink> </Navbar.Brand>
                    <Nav className="mr-auto">
                    <Nav.Link><NavLink style={{color:'#c6c9d0'}} exact activeStyle={{color:'#fff'}} to="/about">About</NavLink></Nav.Link>
                   
                    <Nav.Link><NavLink style={{color:'#c6c9d0'}} exact activeStyle={{color:'#fff'}} to="/myw">Mywork</NavLink></Nav.Link>
                    <Nav.Link><NavLink style={{color:'#c6c9d0'}} exact activeStyle={{color:'#fff'}} to="/Login">Login</NavLink></Nav.Link>
                    <Nav.Link><NavLink style={{color:'#c6c9d0'}} exact activeStyle={{color:'#fff'}} to="/demo">Demo</NavLink></Nav.Link>
                    <Nav.Link><NavLink style={{color:'#c6c9d0'}} exact activeStyle={{color:'#fff'}} to="/son">Son</NavLink></Nav.Link>
                    <Nav.Link><NavLink style={{color:'#c6c9d0'}} exact activeStyle={{color:'#fff'}} to="/mreactt">Material UI</NavLink></Nav.Link>
                    
                    </Nav>
                    <Form inline>
                   
                    <Button variant="outline-danger"><NavLink style={{color:'#c6c9d0'}} exact activeStyle={{color:'#fff'}} to="/logout">Logout</NavLink></Button>
                    
                    </Form>
                </Navbar>
                
            </div>
        );
    }
}

export default Navbard;
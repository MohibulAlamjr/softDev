import React, { Component } from 'react';
import Nav from 'react-bootstrap/esm/Nav';
import Navbar from 'react-bootstrap/esm/Navbar';
import Form from 'react-bootstrap/esm/Form';
import Button from 'react-bootstrap/esm/Button';
import {Link,NavLink} from 'react-router-dom';


import FormControl from 'react-bootstrap/esm/FormControl';
import '../Css/bootstrap.min.css';

class Navbard extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand > <Link to="/">softDev</Link> </Navbar.Brand>
                    <Nav className="mr-auto">
                    <Nav.Link><NavLink exact activeStyle={{color:'#fff'}} to="/about">About</NavLink></Nav.Link>
                    <Nav.Link><NavLink exact activeStyle={{color:'#fff'}}  to="/contact">Contact</NavLink></Nav.Link>
                    <Nav.Link><NavLink exact activeStyle={{color:'#fff'}}  to="/myw">Mywork</NavLink></Nav.Link>
                    </Nav>
                    <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                    </Form>
                </Navbar>
                
            </div>
        );
    }
}

export default Navbard;
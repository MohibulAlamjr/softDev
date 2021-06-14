import React, { Component } from 'react';
import Nav from 'react-bootstrap/esm/Nav';
import Navbar from 'react-bootstrap/esm/Navbar';

import {NavLink} from 'react-router-dom';

import Button from 'react-bootstrap/esm/Button'

class Links extends Component {
    render() {
        return (
            <>
              <NavLink to="/"></NavLink> 
            </>
        );
    }
}

export default Links;
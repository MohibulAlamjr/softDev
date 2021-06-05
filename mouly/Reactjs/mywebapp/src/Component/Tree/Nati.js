import React, { Component } from 'react';
import Button from 'react-bootstrap/esm/Button';
import Puti from './Puti';

class Nati extends Component {
    render() {
    
        return (
            <div>
                <h1>I am from Nati</h1>
                <p>{this.props.name}</p>
                <Button className= "btn btn-danger">NatiButton</Button>
                <Puti/>
            </div>
        );
    }
}

export default Nati;
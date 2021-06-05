import React, { Component } from 'react';
import Button from 'react-bootstrap/esm/Button';

class Puti extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.name}</h2>
                <h1>I am from Puti</h1>
                <Button>Click</Button>
               
            </div>
        );
    }
}

export default Puti;
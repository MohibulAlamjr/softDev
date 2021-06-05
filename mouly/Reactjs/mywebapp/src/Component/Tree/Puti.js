import React, { Component } from 'react';
import Button from 'react-bootstrap/esm/Button';

class Puti extends Component {
    render() {
       
        return (
            <div>
                <p> {this.props.name}</p>
                <h1>I am from PUTI</h1>
                <Button>PutiBUTTON</Button>
            </div>
        );
    }
}

export default Puti;

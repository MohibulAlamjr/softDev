import React, { Component } from 'react';
import Button from 'react-bootstrap/esm/Button';

class Puti extends Component {
    render() {
        return (
            <div style={{textAlign:'center',marginTop:'200px'}}>
                <p>{this.props.name}</p>
                <h2 style={{color:'blue'}}>I am from softDev</h2>
                <Button className="btn btn-danger">Click</Button>
            </div>
        );
    }
}

export default Puti;
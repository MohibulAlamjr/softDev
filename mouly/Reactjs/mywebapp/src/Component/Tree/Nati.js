import React, { Component } from 'react';
import Button from 'react-bootstrap/esm/Button';
import Puti from './Puti';

class Nati extends Component {
    render() {
    
        return (
            <div>
                <Button className= "btn btn-danger">NatiButton</Button>
                <Puti name= {this.props.name}/>
            </div>
        );
    }
}

export default Nati;
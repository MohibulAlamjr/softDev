import React, { Component } from 'react';
import Button from 'react-bootstrap/esm/Button';
import Subs from './Subs';

class Sub extends Component {
    render() {
        return (
            <div>
                <Button>It's from Sub.js</Button><br/>
                <br/>
                <br/>

                <Subs/>
            </div>
        );
    }
}

export default Sub;
import React, { Component } from 'react';
import Button from 'react-bootstrap/esm/Button';

import Subs from './Subs';

class Sub extends Component {
    render() {
        return (
            <div>
                <Button>It's from Sub.js</Button><br/>
                <p ></p>
                <br/>
                <br/>

                 
                <Subs name={this.props.name} />
            </div>
        );
    }
}

export default Sub;
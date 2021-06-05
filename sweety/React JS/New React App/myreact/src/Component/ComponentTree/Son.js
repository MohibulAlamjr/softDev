import React, { Component } from 'react';
import Nati from './Nati';
import { Redirect } from 'react-router';
import Button from 'react-bootstrap/esm/Button';

class Son extends Component {
    render() {
        if (sessionStorage.getItem('userName')== null){

            return <Redirect to="/Login"/>   
        }else{
        return (
            <div>
        
                <Nati name="Here is Sweety"/>
                
            </div>
        );
    }
}
}

export default Son;
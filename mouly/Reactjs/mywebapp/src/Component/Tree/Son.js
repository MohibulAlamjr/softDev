import React, { Component } from 'react';
import Button from 'react-bootstrap/esm/Button';
import { Redirect } from 'react-router';
import Nati from './Nati';

class Son extends Component {
    render() {
      
    if(sessionStorage.getItem ("username")== null){
        return <Redirect to = "/login"/>
    }else {
        return (
            <div>
                 <Button className= "btn btn-success">SonButton</Button>
               <Nati name = "Her name is Rose"/>


            </div> 
        );
    }
    }
}

export default Son;
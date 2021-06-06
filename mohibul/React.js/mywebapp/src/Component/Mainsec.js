import React, { Component } from 'react';

import { Redirect } from 'react-router';
import Button from 'react-bootstrap/esm/Button';
import { DadaProvider } from './Myprovider';
import Sub from './Sub';



class Mainsec extends Component {
    render() {
        if (sessionStorage.getItem('userName')== null){

            return <Redirect to="/Login"/>   
        }else{
        return (
            <div>
              
        <DadaProvider  value="MainProvider send message to Receiver">
        <Sub name="hi"/>
                
        </DadaProvider>
               
            </div>
        );
    }
}
}

export default Mainsec;
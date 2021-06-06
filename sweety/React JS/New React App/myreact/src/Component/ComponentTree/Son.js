import React, { Component } from 'react';
import Nati from './Nati';
import { Redirect } from 'react-router';
import Button from 'react-bootstrap/esm/Button';
import { DadaProvider } from './Mycontext';

class Son extends Component {
    render() {
        if (sessionStorage.getItem('userName')== null){

            return <Redirect to="/Login"/>   
        }else{
        return (
            <div style={{color:'blue'}}>
        <DadaProvider value="MainProvider send message to Receiver">
        <Nati name="Here is Sweety"/>
                
        </DadaProvider>
               
            </div>
        );
    }
}
}

export default Son;
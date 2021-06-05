import React, { Component } from 'react';
import Button from 'react-bootstrap/esm/Button';
import { Redirect } from 'react-router';
import { DadaProvider } from './Mycontext';
import Nati from './Nati';

class Son extends Component {
    render() {
      
    if(sessionStorage.getItem ("username")== null){
        return <Redirect to = "/login"/>
    }else {
        return (
            <div>
                 <Button className= "btn btn-success">SonButton</Button>

                 <br/>
                 <br/>
                 

                 <DadaProvider  value = "Dada send message to Puti">
               <Nati name = "This in Mouly"/>
               </DadaProvider>

            </div> 
        );
    }
    }
}

export default Son;
import React, { Component } from 'react';
import Button from 'react-bootstrap/esm/Button';
import { DadaProvider } from './Myprovider';
import Sub from './Sub';



class Mainsec extends Component {
    render() {

        return (

            
            <div>
                
                <Button>It main from Button</Button><br/>
                <br/>
                <br/>
               
                <DadaProvider value="MainProvider send message to Receiver"/>
                <Sub/>
               
              
             
                
            </div>
        );
    }
}

export default Mainsec;
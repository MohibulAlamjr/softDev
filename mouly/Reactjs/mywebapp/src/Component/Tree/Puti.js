import React, { Component } from 'react';
import Button from 'react-bootstrap/esm/Button';
import { PutiConsumer } from './Mycontext';

class Puti extends Component {
    render() {
      
        return (
            <div>
               
                
                <h1>
                    <p>{this.props.name}</p>
                    <h1>I am from Puti</h1>
                <Button>PutiBUTTON</Button>
                
                <br/>
                 <br/>
                 
                 <PutiConsumer>
                  
                    {
                        msg=>{
                           return msg; 
                        }
                    }


                 </PutiConsumer>


                </h1>
            </div>
        );
    }
}

export default Puti;

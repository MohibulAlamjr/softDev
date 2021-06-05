import React, { Component } from 'react';
import Nati from './Nati'
import Button from 'react-bootstrap/esm/Button';
import { Redirect } from 'react-router';
import {Dadaprovider} from './Mycontext';


class Son extends Component {
    render() {
        if (sessionStorage.getItem('userName')== null){

            return <Redirect to="/Login"/>   
        }else{
            return (
                <div>
                    <Dadaprovider value="Dada Sent Message To puti(Abba)">

                         <Button className="btn btn-Success">Son</Button>
                    <Nati name="My name is Kaium"/>
                    
                    </Dadaprovider>
                   
                </div>
            );
        }
                  
}
       
    
}
export default Son ;
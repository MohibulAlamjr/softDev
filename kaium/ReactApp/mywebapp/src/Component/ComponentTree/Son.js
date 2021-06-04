import React, { Component } from 'react';
import Button from 'react-bootstrap/esm/Button';
import { Redirect } from 'react-router';
import Nati from './Nati';


class Son extends Component {
    render() {
        if (sessionStorage.getItem('userName')== null){

            return <Redirect to="/Login"/>   
        }else{
            return (
                <div>
                    <Button className="btn btn-Success">Son</Button>
                    <Nati name="My name is Kaium"/>
                    
                </div>
            );
        }
                  
}
       
    
}
export default Son ;
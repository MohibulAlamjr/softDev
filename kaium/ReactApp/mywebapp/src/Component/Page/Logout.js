import React, { Component } from 'react';
import { Redirect } from 'react-router';

class Logout extends Component {
   
    
    render() {
       sessionStorage.clear()
        return (
            
                <Redirect to="/login"/>
           
        );
    }
}

export default Logout;
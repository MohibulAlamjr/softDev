import React, { Component } from 'react';
import { Fragment } from 'react';
import { Redirect } from 'react-router';

class Home extends Component {
    render() {

   if(sessionStorage.getItem ("username")== null){
       return <Redirect to = "/login"/>
   }

   else {
      
    return (
        
            <>
            <h1>I am from home page</h1>
            <h1>I am from fragment</h1>
            <h1>I am from fragment</h1>
            </>
        
    );
   }

    }
}

export default Home;
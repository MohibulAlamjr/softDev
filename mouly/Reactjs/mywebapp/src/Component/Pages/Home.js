import React, { Component } from 'react';
import { Redirect } from 'react-router';

class Home extends Component {
    render() {

   if(sessionStorage.getItem ("username")== null){
       return <Redirect to = "/login"/>
   }

   else {
      
    return (
        <div>
            <h1>I am from home page</h1>
        </div>
    );
   }

    }
}

export default Home;
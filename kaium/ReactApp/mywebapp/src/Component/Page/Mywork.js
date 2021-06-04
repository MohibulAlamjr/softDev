import React, { Component } from 'react';
import { Redirect } from 'react-router';

class Mywork extends Component {
    render() {
        if(sessionStorage.getItem("userName")==null){
            return <Redirect to="/login"/>
        }
        else{
            return (
                <div>
                    <h1>I am from Mywork page</h1>
                </div>
            );
        }
       
    }
}

export default Mywork;
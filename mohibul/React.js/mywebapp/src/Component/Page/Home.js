import React, { Component } from 'react';
import { Fragment } from 'react';
import {Link, Redirect} from 'react-router-dom';



class Home extends Component {

    
    render() {
        
        if (sessionStorage.getItem('userName')== null){

            return <Redirect to="/Login"/>   
        }else{
            return (
                <>
                    <h1>I am from About page</h1>
                    
                    
                    
                </>
            );
        }
       
    }
}

export default Home;
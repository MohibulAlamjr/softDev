import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom';
import Hookm from '../Hookm';



class About extends Component {

    
    render() {
        
        if (sessionStorage.getItem('userName')== null){

            return <Redirect to="/Login"/>   
        }else{
            return (
                <div>
                    <h1>I am from About page</h1>
                    <Hookm/>
                    
                </div>
            );
        }
       
    }
}

export default About;
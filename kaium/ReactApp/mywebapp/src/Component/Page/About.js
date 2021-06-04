import React, { Component } from 'react';
import { Redirect} from 'react-router-dom';



class About extends Component {

    
    
    render() {

        if(sessionStorage.getItem('userName')=="failed"){
            return <Redirect to="/login"/>
        }
        else{
            return (
                <div>
                    <h1>I am from About page</h1>
                  
                    
                </div>
            );
        }

        
    }
}

export default About;
import React, { Component } from 'react';
import { Redirect } from 'react-router';



class About extends Component {

    
    render() {
        
        if (sessionStorage.getItem('userName')== null){

            return <Redirect to="/Login"/>   
        }else{
            return (
                <div>
                    <h1 style={{textAlign:'center',color:'blue',marginTop:'200px'}}>I am from About page</h1>
                    
                    
                </div>
            );
        }
       
    }
}

export default About;
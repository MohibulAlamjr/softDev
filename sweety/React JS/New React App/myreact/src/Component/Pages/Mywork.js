import React, { Component } from 'react';
import { Redirect } from 'react-router';

class Mywork extends Component {
    render() {
        if (sessionStorage.getItem('userName')== null){

            return <Redirect to="/Login"/>   
        }else{
            return (
                <div>
                    <h1 style={{textAlign:'center',color:'blue',marginTop:'200px'}}>I am from Mywork page</h1>
                </div>
            );
        }
       
    }
}

export default Mywork;
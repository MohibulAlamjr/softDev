import React, { Component } from 'react';
import { Redirect } from 'react-router';
import Mcss from '../metarial/Mcss';
import Typo from '../metarial/Typo';



class Mreact extends Component {
    render() {

        if (sessionStorage.getItem('userName')== null){

            return <Redirect to="/Login"/>   
        }else{
        return (
            
              
             <>
              <Typo/>
              <Mcss/>
          
                 
            </>
        );
               
           
       
    }
        
        
    }
}

export default Mreact;  
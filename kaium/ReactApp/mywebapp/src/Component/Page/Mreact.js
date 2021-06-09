import React, { Component } from 'react';
import { Redirect} from 'react-router-dom';
import Typo from '../Material/Typo'

class Mreact extends Component {
    render() {
        if (sessionStorage.getItem('userName')== null){

            return <Redirect to="/Login"/>   
        }else{
            return (
                
                    
                  <Typo/>
               
            );
        }
      
    }
}

export default Mreact;
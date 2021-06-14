import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router, Switch} from 'react-router-dom';

import Navbbbar from './Bootstrap/Navbbbar';



class Routee extends Component {

   
    render() {
       
        return (
            <>
        


      
      <Route  path="/" component={Navbbbar} /> <br/><br/><br/>
    
      



     
            </>
        );
    }
}

export default Routee;
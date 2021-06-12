import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router, Switch} from 'react-router-dom';
import Navbbbar from './Bootstrap/Navbbbar';



class Routee extends Component {

   
    render() {
       
        return (
            <div>
        


      
      <Route  path="/logout" component={Navbbbar} />
      



     
            </div>
        );
    }
}

export default Routee;
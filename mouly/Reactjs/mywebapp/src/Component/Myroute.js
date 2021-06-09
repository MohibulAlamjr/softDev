import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router, Switch} from 'react-router-dom';
import Home from '../Component/Pages/Home';
import About from '../Component/Pages/About';
import Contact from '../Component/Pages/Contact';
import Mywork from '../Component/Pages/Mywork';
import Error from '../Component/Pages/Error';
import Login from '../Component/Pages/Login';
import Logout from '../Component/Pages/Logout';
import MaterialR from '../Component/Pages/MaterialR';
import Hookdemo from './Pages/Hookdemo';
import Son from './Tree/Son';

class Myroute extends Component {

   
    render() {
       
        return (
            <div>
           <Switch>


      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact/:username/:pass" component={Contact} />
      <Route path="/mywork" component={Mywork} />
      <Route path="/hookdemo" component={Hookdemo} />
      <Route path="/tree" component={Son} />
      <Route  path="/login" component={Login} />
      
      <Route  path="/logout" component={Logout} />
      <Route  path="/mreact" component={MaterialR} />
      <Route  component={Error} />
    



      </Switch>
            </div>
        );
    }
}

export default Myroute;
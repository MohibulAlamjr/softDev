import React, { Component } from 'react';
import { Route,  Switch} from 'react-router-dom';
import Home from './Page/Home';
import About from './Page/About';
import Contact from './Page/Contact';
import Mywork from './Page/Mywork';
import Errors from './Page/Errors';
import Login from './Page/Login';
import Logout from './Page/Logout';
import Demo from './Page/Demo';
import Son from './ComponentTree/Son';
import Mreact from './Page/Mreact';

class Routed extends Component {
    render() {
        return (
            <div>
                <Switch>
                <Route exact path="/" component={Home} />
                <Route  path="/demo" component={Demo} />
                <Route  path="/son" component={Son} />
                <Route path="/about" component={ About} />
                <Route path="/Login" component={Login} />
                <Route path="/contact/:username/:pass" component={Contact} />
                <Route path="/myw" component={Mywork} />
                <Route path="/logout" component={ Logout} />
                <Route path="/mreactt" component={Mreact} />
                <Route  component={Errors} />
              
                </Switch>
                </div>
        );
    }
}

export default Routed;
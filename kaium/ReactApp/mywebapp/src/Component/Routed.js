import React, { Component } from 'react';
import { Route, BrowserRouter as  Switch} from 'react-router-dom';
import Home from './Page/Home';
import About from './Page/About';
import Contact from './Page/Contact';
import Mywork from './Page/Mywork';
import Errors from './Page/Errors';
import Login from './Page/Login';
import Logout from './Page/Logout';

class Routed extends Component {
    render() {
        return (
            <div>
                <Switch>
                <Route exact path="/" component={Home} />
                <Route  path="/logout" component={Logout} />
                <Route  path="/login" component={Login} />
                <Route path="/about" component={ About} />
                <Route path="/contact/:username/:pass" component={Contact} />
                <Route path="/myw" component={Mywork} />
                <Route  component={Errors} />
                </Switch>
                </div>
        );
    }
}

export default Routed;
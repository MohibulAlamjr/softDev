import React, { Component } from 'react';
import { Route, BrowserRouter , Switch} from 'react-router-dom';
import Home from '../Component/Pages/Home';
import About from '../Component/Pages/About';
import Contact from '../Component/Pages/Contact';
import Mywork from '../Component/Pages/Mywork';
import Errors from '../Component/Pages/Errors';
import Login from '../Component/Pages/Login';
import Logout from '../Component/Pages/Logout';
import Hookdemo from './Pages/Hookdemo';
import Son from'./ComponentTree/Son';
import Mreact from '../Component/Pages/Mreact';

class Routes extends Component {
    render() {
        return (
            <div>
                <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={ About} />
                <Route path="/Login" component={Login} />
                <Route path="/contact/:username/:pass" component={Contact} />
                <Route path="/mywork" component={Mywork} />
                <Route path="/logout" component={ Logout} />
                <Route path="/hookdemo" component={Hookdemo} />
                <Route path="/son" component={Son} />
                <Route path="/mreact" component={Mreact} />
                <Route  component={Errors} />
                
                </Switch>
                </div>
        );
    }
}

export default Routes;
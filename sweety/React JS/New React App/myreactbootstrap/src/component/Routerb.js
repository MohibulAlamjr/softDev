import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router, Switch} from 'react-router-dom';
import Navbars from './Bootstrap/Navbars';

class Routerb extends Component {
    render() {
        return (
            <>
                <Switch>
                <Route  path="/" component={Navbars} />
                </Switch>
                
            </>
        );
    }
}

export default Routerb;
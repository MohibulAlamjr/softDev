import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router, Switch} from 'react-router-dom';
import Navbars from './Bootstrap/Navbars';

class Routerb extends Component {
    render() {
        return (
            <div>
                 <Route  path="/navbar" component={Navbars} />
            </div>
        );
    }
}

export default Routerb;
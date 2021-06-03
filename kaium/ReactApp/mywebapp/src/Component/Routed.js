import React, { Component } from 'react';
import { Route, BrowserRouter as Switch} from 'react-router-dom';
import Home from './Page/Home';
import About from './Page/About';
import Contact from './Page/Contact';
import Mywork from './Page/Mywork';
import Errors from './Page/Errors';
class Routed extends Component {
    render() {
        return (
            <div><Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={ About} />
                <Route path="/contact/:username" component={Contact} />
                <Route path="/myw" component={Mywork} />
                <Route component={Errors} />
                </Switch>
                
                </div>
        );
    }
}

export default Routed;
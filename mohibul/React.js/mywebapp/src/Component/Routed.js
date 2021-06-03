import React, { Component } from 'react';
import { Route, BrowserRouter as Router} from 'react-router-dom';
import Home from './Page/Home';
import About from './Page/About';
import Contact from './Page/Contact';
import Mywork from './Page/Mywork';
class Routed extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={ About} />
                <Route path="/contact" component={Contact} />
                <Route path="/myw" component={Mywork} />
                
                </div>
        );
    }
}

export default Routed;
import React, { Component } from 'react';
import Appabout from '../common/Appabout';
import Appfeature from '../common/Appfeature';
import Appwork from '../common/Appwork';
import Hero from '../common/Hero';

class Mainhome extends Component {
    render() {
        return (
            <>
               <Hero></Hero> 
               <Appabout></Appabout>
               <Appfeature></Appfeature>
               <Appwork></Appwork>
            </>
        );
    }
}

export default Mainhome;
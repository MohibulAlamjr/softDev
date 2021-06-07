import React, { Component } from 'react';
import Appabout from '../common/Appabout';
import Appfaq from '../common/Appfaq';
import Appfeature from '../common/Appfeature';
import Apppricing from '../common/Apppricing';
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
               <Appfaq></Appfaq>
               <Apppricing></Apppricing>
            </>
        );
    }
}

export default Mainhome;
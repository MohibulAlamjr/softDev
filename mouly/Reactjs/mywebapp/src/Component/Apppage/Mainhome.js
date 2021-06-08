
import React, { Component } from 'react';
import Appfaq from '../commonL/Appfaq';
import Appfeature from '../commonL/Appfeature';
import Appfooter from '../commonL/Appfooter';
import Appform from '../commonL/Appform';
import Apphome from '../commonL/Apphome';
import Apppricing from '../commonL/Apppricing';
import Appwork from '../commonL/Appwork';

import Hero from '../commonL/Hero';

class Mainhome extends Component {
    render() {
    
     
        return (
            <>
                <Hero></Hero>
                <Apphome></Apphome>
               <Appfeature></Appfeature>
               <Appwork></Appwork>
               <Appfaq></Appfaq>
               <Apppricing></Apppricing>
              <Appform></Appform>
              <Appfooter></Appfooter>
            </>
        );
    }
}

export default Mainhome;
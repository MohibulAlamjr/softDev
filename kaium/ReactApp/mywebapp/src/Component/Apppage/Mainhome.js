import React, { Component } from 'react';
import Hero from '../common/Hero';
import Appabout from '../common/Appabout';
import Appfeature from '../common/Appfeature';
import Appwork from '../common/Appwork';
import Appfaq from '../common/Appfaq'
import Apppricing from '../common/Apppricing'
import Appform from '../common/Appform'
import Appfooter from '../Apppage/Appfooter'

class Mainhome extends Component {
    render() {
        return (
            <>
                <Hero/>
                <Appabout>
                    <h2>About</h2>
                </Appabout>
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
import React, { Component } from 'react';
import Hero from '../common/Hero';
import Appabout from '../common/Appabout';
import Appfeature from '../common/Appfeature';
import Appwork from '../common/Appwork'

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

            </>
        );
    }
}

export default Mainhome;
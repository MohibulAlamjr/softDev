import React, { Component } from 'react';
import { Carousel } from 'antd';
import Hero from '../../Common/Hero';
import About from '../../Common/About';



class Mainhome extends Component {
    render() {
        return (
            <div>
               <Hero></Hero>
               <About></About>
            
            </div>
        );
    }
}

export default Mainhome;
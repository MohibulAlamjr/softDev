import React, { Component } from 'react';
import {Menu} from 'antd';
import '../../Css/Mynew.css'

class Appheader extends Component {
    
    render() {
        return (
            <div className="container-fluid">
                <div className="header">
                    <div className="logo">
                        <i className="fas fa-bolt"></i>
                        <a href=" ">Tech</a>
                    </div>
                    <Menu  mode="horizontal" defaultSelectedKeys={['2']}>
                        <Menu.Item key="home">Home</Menu.Item>
                        <Menu.Item key="about">About</Menu.Item>
                        <Menu.Item key="feature">Feature</Menu.Item>
                        <Menu.Item key="works">How it Works</Menu.Item>
                        <Menu.Item key="faq">FAQ</Menu.Item>
                        <Menu.Item key="priceing">Pricein</Menu.Item>
                        <Menu.Item key="contact">Contact</Menu.Item>
                    </Menu> 
                </div>
                

            </div>
               
            
        );
    }
}

export default Appheader;
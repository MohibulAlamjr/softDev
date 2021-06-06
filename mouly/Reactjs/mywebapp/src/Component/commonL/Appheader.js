import { Menu } from 'antd';
import React, { Component } from 'react';
import '../../css/Mynew.css';

class Appheader extends Component {
    render() {
       
        return (
            <div className="container-fluid">
                <div className="header">
                <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
                </div>
                
            </div>
        );
    }
}

export default Appheader;
import React, { Component } from 'react';
import { Fragment } from 'react';
import { Redirect } from 'react-router';
import { Button, Tooltip } from 'antd';
import 'antd/dist/antd.css';
import { SearchOutlined } from '@ant-design/icons';

class Home extends Component {
    render() {

   if(sessionStorage.getItem ("username")== null){
       return <Redirect to = "/login"/>
   }

   else {
      
    return (
        
            <>
            <h1>I am from home page</h1>
            <h1>I am from fragment</h1>
            <h1>I am from fragment</h1>
            <Button type="primary">Primary Button</Button>
            <Tooltip>
            <Button shape="circle" icon={<SearchOutlined />} />
            </Tooltip>
            </>
        
    );
   }

    }
}

export default Home;
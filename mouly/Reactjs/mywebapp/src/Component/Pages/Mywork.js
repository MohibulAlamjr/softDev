import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { Layout, Menu, Breadcrumb } from 'antd';
import Appheader from '../commonL/Appheader';

const { Header, Content, Footer } = Layout;
class Mywork extends Component {
    render() {

    
        if (sessionStorage.getItem("username")==null){
            return <Redirect to = "/login"/>
        }

        else {
            return (
                <div>
                    <Layout className="mainlayout">
    <Header>
        <Appheader/>
     
    </Header>
    </Layout>

    <br/>
    <br/>
    <br/>
    <br/>
    
                    <h1>I am from mywork page</h1>
                </div>
                
            );
        }
       
    }
}

export default Mywork;
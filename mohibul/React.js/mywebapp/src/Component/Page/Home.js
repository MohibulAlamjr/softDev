import React, { Component } from 'react';
import { Fragment } from 'react';
import {Link, Redirect} from 'react-router-dom';
import { Button, Tooltip } from 'antd';
import 'antd/dist/antd.css';
import { SearchOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import Appheader from '../common/Appheader';
import '../../Css/Mynew.css';


const { Header } = Layout;



class Home extends Component {

    
    render() {
        
        if (sessionStorage.getItem('userName')== null){

            return <Redirect to="/Login"/>   
        }else{
            return (
                <>
                    <Layout className="mainLayout">
                        <Header>
                            <Appheader/>
                        
                        
                        </Header>
                        
                    
                    </Layout>
                    
                    
                </>
            );
        }
       
    }
}

export default Home;
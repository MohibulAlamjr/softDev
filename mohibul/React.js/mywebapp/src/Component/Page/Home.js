import React, { Component } from 'react';
import { Fragment } from 'react';
import {Link, Redirect} from 'react-router-dom';

import 'antd/dist/antd.css';

import { Layout } from 'antd';
import Appheader from '../common/Appheader';
import '../../Css/Mynew.css';
import Mainhome from '../Apppage/Mainhome';


const { Header ,Content} = Layout;



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
                        <Content>

                           
                        <Mainhome/>

                        </Content>
                        
                    
                    </Layout>
                    
                    
                </>
            );
        }
       
    }
}

export default Home;
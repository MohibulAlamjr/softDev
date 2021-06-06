import React, { Component } from 'react';
import { Redirect} from 'react-router-dom';
import { Button,Tooltip } from 'antd';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import AppHeader from '../Common/AppHeader';



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
    <AppHeader/>
     
    </Header>
  </Layout>
 
                    
                </>
            );
        }
       
    }
}

export default Home;
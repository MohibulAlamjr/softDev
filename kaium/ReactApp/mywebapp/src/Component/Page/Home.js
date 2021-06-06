import React, { Component } from 'react';
import { Redirect} from 'react-router-dom';
import { Layout } from 'antd';
import Appheader from '../common/Appheader'
import Mainhome from '../Apppage/Mainhome';
const { Header,Content} = Layout;


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
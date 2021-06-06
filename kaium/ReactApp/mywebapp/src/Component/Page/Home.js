import React, { Component } from 'react';
import { Redirect} from 'react-router-dom';
import { Layout } from 'antd';
import Appheader from '../common/Appheader'
const { Header} = Layout;


class Home extends Component {

    
    render() {
        
        if (sessionStorage.getItem('userName')== null){

            return <Redirect to="/Login"/>   
        }else{
            return (
               <>
                   
                   <Layout className="mainlayout">
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
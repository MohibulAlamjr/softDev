import React, { Component } from 'react';
import { Redirect} from 'react-router-dom';
import { Button,Tooltip } from 'antd';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import AppHeader from '../Common/AppHeader';
import Mainhome from '../ComponentTree/App Page/Mainhome';
import Appfeature from '../Common/Appfeature';
import Appwork from '../Common/Appwork';
import Appfaq from '../Common/Appfaq';
import Apppricing from '../Common/Apppricing';
import Appform from '../Common/Appform';






const { Header,Content } = Layout;
class Home extends Component {

    
    render() {
        
        if (sessionStorage.getItem('userName')== null){

            return <Redirect to="/Login"/>   
        }else{
            return (
                <>
                    <Layout className="mainLayout">
    <Header>
        <Content>
    <AppHeader/>
    <Mainhome/>
   <Appfeature/>
    </Content>
    <Appwork/>
    <Appfaq/>
    <Apppricing/>
    <Appform/>
    
     
    </Header>
   
    
  </Layout>
 
                    
                </>
            );
        }
       
    }
}

export default Home;
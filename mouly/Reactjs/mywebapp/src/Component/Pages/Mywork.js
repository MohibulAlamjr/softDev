import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { Layout, Menu, Breadcrumb } from 'antd';
import Appheader from '../commonL/Appheader';
import Mainhome from '../Apppage/Mainhome';

const { Header,Content,  Footer } = Layout;
class Mywork extends Component {
    render() {

   
        if (sessionStorage.getItem("username")==null){
            return <Redirect to = "/login"/>
        }

        else {
            return (
                <div>
                    <Layout className="mainLayout">
    <Header>
        <Appheader/>
     
    </Header>

     <Content>
<Mainhome>

</Mainhome>
     </Content>

    </Layout>

                   
                </div>
                
            );
        }
       
    }
}

export default Mywork;
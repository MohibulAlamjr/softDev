import React, { Component } from 'react';
import { Redirect } from 'react-router';
import Mcss from '../Material/Mcss';
import Typo from '../Material/Typo';
import { createMuiTheme,Drawer,ThemeProvider} from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Cardui from '../Material/Cardui'
import Layout from '../Material/Layout';
import Drawermu from '../Material/Drawermu';
import Customthem from '../Material/Customthem'


const mycss=createMuiTheme({
    palette:{
        primary:{
            main:'#8b8a0a',
            contrastText:'#000'
        },
        secondary:{
            main:'#1a237e'
        }

        
    },
    typography: {
        fontFamily:['Dancing Script']

    }
        
   
})

class Mreact extends Component {
    render() {        
        if (sessionStorage.getItem('userName')== null){

            return <Redirect to="/Login"/>   
        }else{
        return (                          
             <> <Container>
             <ThemeProvider theme={mycss}>
                <Typo/><br/> <br/>
             <br/> <br/>
             <Layout>
              
              <Mcss/><br/> <br/>
              
              </Layout>
              <Customthem/><br/> <br/>
              <Layout><Cardui/></Layout>
              <Drawermu></Drawermu>
              <Drawer></Drawer>
           
            </ThemeProvider> </Container>
            </>
        );
               
           
       
    }
        
        
    }
}

export default Mreact;  
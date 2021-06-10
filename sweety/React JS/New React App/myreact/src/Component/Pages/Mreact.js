import React, { Component } from 'react';
import { Redirect } from 'react-router';
import Typo from '../Metarial/Typo';
import Mcss from '../Metarial/Mcss';
import Customtheme from '../Metarial/Customtheme';
import {Container, createMuiTheme,ThemeProvider, typography} from '@material-ui/core';
import {purple,black} from '@material-ui/core/colors';
import Layout from '../Metarial/Layout';
import Drawerm from '../Metarial/Drawerm';
import Cardui from '../Metarial/Cardui';


const mycss=createMuiTheme({
    palette:{
        primary:{
            main:'#8b8a0a',
            contrastText:'black'
            
        },
        secondary : purple
            
        
    },

    typography:{
       
        fontFamily:
            'Lobster'
    
    
}

})

class Mreact extends Component {
    render() {
        if (sessionStorage.getItem('userName')== null){

            return <Redirect to="/Login"/>   
        }else{
        return (
            <>
            <ThemeProvider theme={mycss}>
            <Container><br/>
            <Layout><br/>
            <Typo/><br/>
               <Mcss/><br/>
               </Layout>
               <Customtheme/> <br/><br/>
          
           <Cardui/>
            <Drawerm/>
            </Container>
            </ThemeProvider>
            
          
              
            </>
        );
    }
}
}

export default Mreact;
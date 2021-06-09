import React, { Component } from 'react';
import { Redirect } from 'react-router';
import Customthem from '../metarial/Customthem';
import Mcss from '../metarial/Mcss';
import Typo from '../metarial/Typo';
import {createMuiTheme,ThemeProvider} from '@material-ui/core';
import Container from '@material-ui/core/Container';
import {  lightBlue, purple } from '@material-ui/core/colors';


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
            
              
             <>
             <ThemeProvider theme={mycss}>
                 <Container>
             <br/> <br/>
              <Typo/><br/> <br/>
              <Mcss/><br/> <br/>
              <Customthem/><br/> <br/>
          
          
            </Container>
            </ThemeProvider>
            </>
        );
               
           
       
    }
        
        
    }
}

export default Mreact;  
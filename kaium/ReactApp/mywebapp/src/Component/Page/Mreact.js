import React, { Component } from 'react';
import { Redirect} from 'react-router-dom';
import Typo from '../Material/Typo';
import Mcss from '../Material/Mcss';
import Customthem  from '../Material/Customthem';
import {Container, createMuiTheme,ThemeProvider} from '@material-ui/core/';
// import { blue, purple} from '@material-ui/core/colors';

const mycss=createMuiTheme({
    palette:{
        primary:{
            main:'#8b8a0a',
            contrastText:'#ffff'
        },
        secondary:{
            main:'#aa00ff'
        }
        
       
    },
    typography:{                   
                fontFamily: [
                    'Philosopher'
                    
                  
                ]
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
                
                  <Typo/>
                  <Mcss/>
                  <Customthem/>
                </Container>
                </ThemeProvider>
              
               </>
            );
        }
      
    }
}

export default Mreact;
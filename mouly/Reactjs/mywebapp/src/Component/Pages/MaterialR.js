import React, { Component } from 'react';
import { Redirect } from 'react-router';
import Typo from '../material/Typo';
import Mcss from '../material/Mcss';
import Customtheme from '../material/Customtheme';
import { Container, createMuiTheme,Drawer,ThemeProvider} from '@material-ui/core';
import { purple } from '@material-ui/core/colors';
import Cardm from '../material/Cardm';
import Layout from '../material/Layout';
import Drawermaterial from '../material/Drawermaterial';




const mycss = createMuiTheme({
    palette:{
        primary:{
            main:'#8b8a0a',
            contrastText:'black'
            
        },
        secondary : purple
            
        
    },

    typography:{
       
        fontFamily:
            'Caveat'
        
    

    
}

})


class MaterialR extends Component {
    render() {
       
   if(sessionStorage.getItem ("username")== null){
    return <Redirect to = "/login"/>
}
else {

    return (
        <>

        <ThemeProvider theme = {mycss}>
            <br/> <br/>
            <Layout>
            <Container>
           <Typo >
              
            </Typo> <br/> <br/>
            <Mcss></Mcss> <br/> <br/> <br/>
            <Customtheme></Customtheme> <br/> <br/>
            
            </Container> <br/> <br/>
            </Layout>
            <Drawermaterial></Drawermaterial>
           <Cardm></Cardm>
          
            </ThemeProvider>
           
        </>
    );
}
    }
}

export default MaterialR;
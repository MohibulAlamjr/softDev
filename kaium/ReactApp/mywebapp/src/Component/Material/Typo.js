import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'
import  ButtonGroup  from '@material-ui/core/ButtonGroup';
import Container from '@material-ui/core/Container';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import BackupIcon from '@material-ui/icons/Backup';
import AcUnitIcon from '@material-ui/icons/AcUnit';
class Typo extends Component {
    render() {
        return (
            <>
             <Container>
             <Typography
           variant="h2"
           component="h1"
            align='center'
            color='primary'
            gutterBottom
           ><br/>
           
              \\... "softDev"...//

        </Typography>
        <Typography
           variant="p"
           component="h1"
            align='center'
            color='textSecondary'
            gutterBottom
           >
               Hello !,This is Material-UI
        </Typography>

        <Typography
           variant="h2"
           component="h1"
            align='center'
            color='primary'
            gutterBottom
           >             

               <Button variant="contained" type='submit' color="secondary"> SoftDev</Button><br/>
            <Button align='center' variant="contained">Default</Button><br/>
            <Button variant="contained" color="primary">
            Primary
            </Button><br/>
            <Button variant="contained" color="secondary">
            Secondary
            </Button><br/>
            <Button variant="contained" disabled>
            Disabled
            </Button>
            <Button variant="contained" color="primary" href="#contained-buttons">
            Link
            </Button>
            <br/>
            <br/>
             <ButtonGroup color='secondary' variant='contained'>
                 <Button>Click me</Button>
                 <Button>Button One</Button>
                 <Button>Button Two</Button>
             </ButtonGroup><br/>
            <br/>
             <Button variant="contained" color="primary" startIcon={<ArrowBackIcon/>} endIcon={<ArrowBackIcon/>}> Click here</Button>
             <br/>
            <br/>
            <BackupIcon style={{color:'red'}}  fontSize='large' />

              <br/><br/><br/><br/>
            <AcUnitIcon style={{color:'red'}}  fontSize='large'/>
            <AcUnitIcon style={{color:'red'}}  fontSize='small'/>
            <AcUnitIcon style={{color:'red'}}  fontSize='small'/>
            <AcUnitIcon style={{color:'red'}}  fontSize='large'/>
            <br/><br/><br/><br/>
        </Typography>
          
             <Button
        variant="contained"
        color="primary"
        
       
      >
        Send
      </Button>
      <Button
        variant="contained"
        color="default"
       
     
      >
        Upload
      </Button>
      <Button
        variant="contained"
        disabled
        color="secondary"
        c
     
      ></Button>

             </Container>
             

            </>

        );
    }
}

export default Typo;
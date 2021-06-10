import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'
import  ButtonGroup  from '@material-ui/core/ButtonGroup';
import Container from '@material-ui/core/Container';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import BackupIcon from '@material-ui/icons/Backup';
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
           >
               softDev
        </Typography>
        <Typography
           variant="p"
           component="h1"
            align='center'
            color='textSecondary'
            gutterBottom
           >
               Let's Think Out of the Box
        </Typography>
            
          <Button variant="contained" type='submit' color="secondary"> SoftDev</Button>
            <Button align='center' variant="contained">Default</Button>
            <Button variant="contained" color="primary" href="#contained-buttons">
            Primary
            </Button>
            <Button variant="contained" color="secondary">
            Secondary
            </Button>
            <Button variant="contained" disabled>
            Disabled
            </Button>
            <Button variant="contained" color="primary" href="#contained-buttons">
            Link
            </Button>
            <br/>
            <br/>
             <ButtonGroup color='primary' variant='contained'>
                 <Button>Mouly</Button>
                 <Button>Sweety</Button>
                 <Button>Kaium</Button>
             </ButtonGroup>
             <Button variant="contained" color="primary" startIcon={<ArrowBackIcon/>} endIcon={<ArrowBackIcon/>}> Click here</Button>

             <BackupIcon style={{color:'red'}}  fontSize='large' />
             </Container>
             

            </>

        );
    }
}

export default Typo;
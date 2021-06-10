import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Container from '@material-ui/core/Container';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import BackupIcon from '@material-ui/icons/Backup';

class Typo extends Component {
    render() {
        return (
            <>
                <Typography
                
                variant="h4"
                component="h1"
                align="center"
                color="secondary"
                >
                softDev
                </Typography>

                <Typography
                
                variant="p"
                component="h3"
                align="center"
                color="secondary"
                gutterBottom
                >
                Let's think out of the BOX
                </Typography>

                <Button
                onClick={()=> console.log('you clicked me')}
                type="submit"
                color="Secondary"
                varient="contained"
                startIcon={<BackupIcon/>} 
                endIcon={<ArrowBackIcon/>}
                gutterBottom
                >
                    Submit
                </Button><br/>

                <Button type="submit">Submit</Button>
                <Button type="submit" color="Secondary" variant="outlined">Submit</Button>

                <ButtonGroup color="Secondary" variant="contained">
                    <Button>One</Button>
                    <Button>Two</Button>
                    <Button>Three</Button>
                </ButtonGroup><br/><br/>

                 {/* For Icons  */}

                   <BackupIcon style={{color:'green'}} fontSize='large'/>
                <ArrowBackIcon fontSize='large'/><br/>
                {/* for icons style  */}
                <Button 
                variant="contained"
                 color="primary" 
                 startIcon={<ArrowBackIcon/>} 
                 endIcon={<ArrowBackIcon/>}>
                      click Icons
                      </Button><br/><br/>
        
            </>
        );
    }
}

export default Typo;
import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Container from 'react-bootstrap/esm/Container';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import GamesIcon from '@material-ui/icons/Games';
class Typo extends Component {
    render() {
        return (

            /////// Typography///////////

            <Container>
                
           <Typography
            variant = 'h3'
            component="h4"
            align="center"
             color = "secondary"
            
            >
                I am from Material UI
            </Typography>

                 
           <Typography
            variant = 'p'
            component="h1"
            align="center"
            color = "Primary"
            gutterBottom
            >
                softDev
            </Typography>
          

{/* Button  */}

            <Button type = "submit">Submit</Button>
            <Button variant="contained" color="Secondary" >Contained Button</Button>
            

            <ButtonGroup color = "Primary">
                <Button>Button1</Button>
                <Button>Button2</Button>
                <Button size="large">Button3</Button>
            </ButtonGroup>

            <Button
            onClick= {()=>console.log('Clicked me!')}

            type = "submit"
            color= "textSecondary"
            variant = "outlined"
            
            >
            Onclick Button
            </Button>

    {/* icon */}

<Button color = "secondary" variant="contained" startIcon= {<ArrowForwardIcon/>} > ArrowForward</Button>

<GamesIcon style={{color:"blue" }} fontSize= "large" ></GamesIcon>


            </Container>


  




        );
    }
}

export default Typo;
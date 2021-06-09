import React from 'react';
import Button from '@material-ui/core/Button';
import  TextField  from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import { Grid, Paper } from '@material-ui/core';


const Customthem = () => {

  const [value, setValue] = React.useState('female');

  const handleChange = (event) =>{
    setValue(event.target.value);
  };
    return (
        <>
        
           <Button variant="contained" color="secondary">Custom css</Button> <br/>
           <br/>
        <form  noValidate autoComplete="off">
            
            <TextField id="outlined-basic"
              label="softDev"
              variant="outlined"
              fullWidth
              required
              multiline
              rows={4}
             />



            <FormControl component="fieldset">
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormControlLabel value="other" control={<Radio />} label="Other" />
                <FormControlLabel value="disabled" disabled control={<Radio />} label="(Disabled option)" />
            </RadioGroup>
            </FormControl>
            
        </form>


        <br></br><br/>

        <Grid container>
           <Grid item sm={6} md={3} lg={8} >
             <Paper style={{backgroundColor:'green'}}>one</Paper>
           </Grid>
           <Grid item sm={6} md={3} lg={4}>
             <Paper style={{backgroundColor:'red'}}>Two</Paper>
           </Grid>
           <Grid item sm={6} md={3} lg={4}>
             <Paper style={{backgroundColor:'yellow'}}>three</Paper>
           </Grid>
           <Grid  item sm={6} md={3} lg={8}>
             <Paper style={{backgroundColor:'blue'}} >four</Paper>
           </Grid>

        </Grid>
        </>
    );
};

export default Customthem;
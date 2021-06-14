import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
const Customthem =()=>{

    const [value, setValue] = React.useState('female');

  const handleChange = (event) => {
    setValue(event.target.value);
  };
    
return (
            <>
                
                 <Button variant="contained" type='submit' color="secondary"> Customthem</Button>
                 <br/><br/><br/><br/>
                <form noValidate autoCapitalize ="off">
                     <TextField id="outlined-basic"
                     label="softDev"
                     fullwidth
                     required
                     multiline
                     rows={4}
                     />
                     <br/><br/><br/><br/>
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
      <Typography
           variant="h6"
           component="h1"
            align='center'
            color='primary'
            gutterBottom
           >
          <Grid container>
                <Grid item sm={6} md={3} lg={8}>
                <Paper style={{backgroundColor:'green'}}>sm=12</Paper>
                </Grid>
                <Grid item sm={6} md={3} lg={8}>
                <Paper style={{backgroundColor:'red'}}>sm=12 sm=6</Paper>
                </Grid>
                <Grid item sm={6} md={3} lg={8}>
                <Paper style={{backgroundColor:'blue'}}>sm=12 md=6</Paper>
                </Grid>
                <Grid item sm={6} md={3} lg={8}>
                <Paper style={{backgroundColor:'yellow'}}>sm=6 sm=3</Paper>
                </Grid>
          </Grid>             
      </Typography>
                 <br/><br/><br/><br/>
                 
            </>
        );
}

export default Customthem;

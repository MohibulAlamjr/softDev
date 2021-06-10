import React from 'react';
import Button from '@material-ui/core/Button';
import { Container, Grid, Paper } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';



const Customtheme = () => {
    const [value, setValue] = React.useState('female');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

    return (
        <>
        
            <Button variant="contained" color="primary">Custom Theme</Button>
            <br/>
            <form >
           <TextField id="outlined-basic" label="softDev" 
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
</form><br/><br/>
                            <Grid container>
                            <Grid  item  sm={6} md={3} lg={8}>
                                <Paper style={{background:'blue'}}>
                                one
                                </Paper >
                            </Grid>

                            <Grid item sm={6} md={3} lg={4}>
                                <Paper style={{background:'pink'}}>
                                two
                                </Paper>
                            </Grid>

                            <Grid item sm={6} md={3} lg={4}>
                                <Paper style={{background:'red'}}>
                                three
                                </Paper>
                            </Grid>

                            <Grid item sm={6} md={3} lg={8}>
                                <Paper style={{background:'green'}}>
                                four
                                </Paper>
                            </Grid>
                            </Grid >




        </>
    );
};

export default Customtheme;
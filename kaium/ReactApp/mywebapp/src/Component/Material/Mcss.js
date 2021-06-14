import React from 'react';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core';


const usestyle = makeStyles({
  btn:{
      font:60,
      background:'blue',
      '&:hover':{
          backgroundColor:'red'
      }

  }
})

const Mcss = () => {
    const classes=usestyle();
    return (
        <>
            <Button variant="contained" className={classes.btn} 
            >This is Mcss</Button><br/><br/><br/><br/><br/>


{/* <form className={classes.root} noValidate autoComplete="off">
  <TextField id="standard-basic" label="Standard" />
  <TextField id="filled-basic" label="Filled" variant="filled" />
  <TextField id="outlined-basic" label="Outlined" variant="outlined" />
</form><br/><br/><br/><br/><br/>

            <form className={classes.root} noValidate autoComplete="off">
  <Input defaultValue="Hello world" inputProps={{ 'aria-label': 'description' }} />
  <Input placeholder="Placeholder" inputProps={{ 'aria-label': 'description' }} />
  <Input defaultValue="Disabled"  inputProps={{ 'aria-label': 'description' }} />
  <Input defaultValue="Error"  inputProps={{ 'aria-label': 'description' }} />
</form>
<br/><br/><br/><br/><br/> */}
        </>
    );
};

export default Mcss;
import React from 'react';
import Button from '@material-ui/core/Button';
import {Container, makeStyles} from '@material-ui/core';

const usestyle=makeStyles({
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
            <Button  variant="contained" className={classes.btn}>Hello</Button>
        </>
    
    );
};

export default Mcss;
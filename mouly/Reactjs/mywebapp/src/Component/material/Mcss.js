import React from 'react';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core';

const usestyle = makeStyles({
    btn:{
        font:60,
        background:"red",
       '&:hover':{
           backgroundColor:'blue'
       }
    }
})

const Mcss = () => {
    const classes = usestyle();
    return (
        <div>
            <Button varitant = "contained"
            className = {classes.btn}
            
            >Button
            </Button>
        </div>
    );
};

export default Mcss;
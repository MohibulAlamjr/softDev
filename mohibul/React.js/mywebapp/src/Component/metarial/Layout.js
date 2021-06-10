import { makeStyles } from '@material-ui/core';
import React from 'react';
const usestyles= makeStyles({
    page:{
        backgroundColor:'gray'
    }
})

const Layout = ({children}) => {
    const classes=usestyles();
    return (
        <div className={classes.page}>
           {children}
        </div>
    );
};

export default Layout;
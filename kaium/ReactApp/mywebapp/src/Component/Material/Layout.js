import { makeStyles } from '@material-ui/core';
import React from 'react';
const usestyles= makeStyles({
    page:{
        backgroundColor:'#ffe082'
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
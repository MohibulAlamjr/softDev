import { makeStyles } from '@material-ui/core';
import React from 'react';

const usesStyle=makeStyles({
    page:{
        backgroundColor:"gray"
    }
})

const Layout = ({children}) => {
    const classes=usesStyle();
    return (
        <div className={classes.page}>
            {children}
        </div>
    );
};

export default Layout;
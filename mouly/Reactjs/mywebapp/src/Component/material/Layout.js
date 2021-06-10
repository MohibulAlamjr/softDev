import { makeStyles } from '@material-ui/core';
import React, { Children } from 'react';
const usesstyles = makeStyles({
   page:{
    backgroundColor:'gray'
   }
})

const Layout = ({children}) => {
    const classes = usesstyles();
    return (
        <div className = {classes.page}>
            {children}
        </div>
    );
};

export default Layout;
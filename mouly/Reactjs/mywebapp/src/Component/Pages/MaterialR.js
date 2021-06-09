import React, { Component } from 'react';
import { Redirect } from 'react-router';
import Typo from '../material/Typo';
import Mcss from '../material/Mcss';

class MaterialR extends Component {
    render() {
       
   if(sessionStorage.getItem ("username")== null){
    return <Redirect to = "/login"/>
}
else {

    return (
        <>
           <Typo >
              
            </Typo>
            <Mcss></Mcss>
        </>
    );
}
    }
}

export default MaterialR;
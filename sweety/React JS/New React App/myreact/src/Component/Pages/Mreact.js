import React, { Component } from 'react';
import { Redirect } from 'react-router';
import Typo from '../Metarial/Typo';
import Mcss from '../Metarial/Mcss';

class Mreact extends Component {
    render() {
        if (sessionStorage.getItem('userName')== null){

            return <Redirect to="/Login"/>   
        }else{
        return (
            <>
               <Typo/>
               <Mcss/>
            </>
        );
    }
}
}

export default Mreact;
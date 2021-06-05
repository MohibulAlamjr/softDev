import React from 'react';
import {useState} from 'react';
import { Redirect } from 'react-router';

const Demo = () => {

    const [name,setName]=useState({
        country:"Bangladesh"
    })
    const Change=()=>{
        setName({country:"India"})
    }
    if (sessionStorage.getItem('userName')== null){

        return <Redirect to="/Login"/>   
    }else{
        return (
            <div>
                <h1>{name.country}</h1>
                <button onClick={Change}>Change</button>
                
            </div>
        );
    }
    
};

export default Demo;
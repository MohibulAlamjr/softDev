import React from 'react';
import { useState } from 'react';
import { Redirect } from 'react-router';


const Hookdemo = () => {


    const [name,setName]= useState({
        country:"Bangladesh"
    })

   const change =()=>{
       setName({country : "Canada"})
   }
  
    if(sessionStorage.getItem ("username")== null){
        return <Redirect to = "/login"/>
    }else {
        
    return (
        <div>
            <h1>{name.country}</h1>
            <button onClick = {change}>Change</button>
            
        </div>
    );
    }

};

export default Hookdemo;
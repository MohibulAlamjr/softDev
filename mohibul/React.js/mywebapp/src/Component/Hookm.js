import React, { useState } from 'react';
import Button from 'react-bootstrap/esm/Button';

const Hookm = () => {

    const [name,add]= useState(
        {
            country:"Bangladesh"

        }
    )
   const namechange=()=>{
        add(
            {
                country:'Pakisthan'
            }
        )
    }
    return (
        <div>
            <h1>{name.country}</h1>
            <Button onClick={namechange}>Change</Button>
        </div>
    );
};

export default Hookm;
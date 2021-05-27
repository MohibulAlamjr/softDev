import React from 'react';


const Alert = (a,b) =>{
    alert (a + " " + b)
}


const Arrow = (props) =>{
    return (
        <button onClick = {Alert.bind(this,props.name,props.age)} className = "btn btn-primary">Hello</button>
    )
}

export default Arrow;
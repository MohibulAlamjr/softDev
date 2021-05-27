import React from 'react'


const Alert = (a) =>
{
    alert(a)
}



const Arrow =(props)=>{
    return (
        <button onClick={Alert.bind(this,props.text)} className="btn btn-danger">Arrow function</button>
    )
}

export default Arrow;
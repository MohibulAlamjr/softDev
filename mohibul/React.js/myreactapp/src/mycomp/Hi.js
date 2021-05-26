import React from 'react';


function Hi(props){
    function myFun(a){
        alert(a)
    }
    return(
    <div> 
        <button className='btn btn-primary' onClick={myFun.bind(this,props.name)}>click</button>
        <h1>Hellow I am from {props.name} Components</h1>
    </div>
       
    )
}
export default Hi;
import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'


const AlertMe=(a)=>{
    alert(a);
}
const Arrow=()=>{
    return(
        <button onClick={AlertMe.bind(this,"I AM FROM FUNCTION")} className="btn btn-danger m-5">My button</button>
    )
}
export default Arrow
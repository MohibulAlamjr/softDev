import React from 'react';

const alrt=(a,b)=>{
    alert(a + " " +b)
} 


const Arrowf = (props) => {
    return(
    <button onClick={alrt.bind(this,props.fruits,props.vagetable)} className="btn btn-success" >Hi I am from Arrow</button> 
    )
}
export default Arrowf;
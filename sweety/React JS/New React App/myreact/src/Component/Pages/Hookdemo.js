import React from 'react';
import {useState} from 'react';
import { Redirect} from 'react-router-dom';


const Hookdemo = () => {
    const [name,setName]=useState({
        country:"Bangladesh"
    })
    const Change=()=>{
        setName({country:"Norway"})
    }
    if (sessionStorage.getItem('userName')== null){

        return <Redirect to="/Login"/>   
    }else{
    return (
        <div>
            <h1 style={{textAlign:'center',marginTop:'200px',color:'blue'}}>{name.country}</h1>
           {/* <h5 style={{textAlign:'center'}}><button onClick={()=>setName({country:"America"})}>Change</button></h5>  */}
          <h5 style={{textAlign:'center'}} > <button onClick={Change}>Change</button></h5>

        </div>
    );
};
}
export default Hookdemo;
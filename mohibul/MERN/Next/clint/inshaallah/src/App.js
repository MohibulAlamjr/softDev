import React,{useEffect, useState} from 'react';
import axios from "axios";
const ENDPOINT="http://localhost:4002/api/login"
function App() {
  const [data,setData]=useState("");

useEffect (()=> {
try{
  axios
  .post(ENDPOINT)
  .then(function(response){
    console.log("check response ==>",response);
  }).catch(function(error){
    console.log('check error==>',error)
  }).then(function(){
    console.log("check excuted===>");
  });
}catch(err){
  alert(err);
}

}, [] );


  return (
    <div>
      <h1> Hellow world</h1>
    </div>
  );
}

export default App;
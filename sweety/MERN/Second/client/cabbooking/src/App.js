import React,{useEffect, useState} from 'react';
import axios from "axios";
const ENDPOINT="http://localhost:4002/api/login";
import LoginContainer from '../src/modules/LoginRoot/Login';
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
      <LoginContainer/>
    </div>
  );
}

export default App;
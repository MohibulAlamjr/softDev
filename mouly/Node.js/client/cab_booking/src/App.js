import React, {useState, useEffect} from 'react'
import axios from 'axios';
import LoginContainer from '../src/modules/LoginRoot/Login/Login.js';
const ENDPOINT = "http://localhost:4002/api/login";
function App() {
 
const [data, setData] = useState(" ");

useEffect (()=>{
  try {
    axios 
    .post (ENDPOINT)
    .then(function(response){
      console.log("check response ==>", response);
      // setData(response.data.response);
    })
    .catch (function (error){
      console.log("check error==>", error);
    })
    .then (function(){
      console.log("check executed == >");
    });
  }
  catch (err){
    alert(err);
  }
}, []);
  return (
    <div>
     <LoginContainer/>
    </div>
  )
}

export default App

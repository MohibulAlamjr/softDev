import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import About from'./Pages/About';
import Contact from './Pages/Contact';
import Protfolio from './Pages/Protfolio';
import {Route,Link,BrowserRouter as Router} from '../node_modules/react-router-dom'
import reportWebVitals from './reportWebVitals';
 
const myrouter=(
 
  <Router>
  
  <div>
  <ul>
  
  <Link to="/">Home</Link>
  <Link to="/About">About</Link>
  <Link to="/Contact">Contact</Link>
  <Link to="/Protfolio">Protfolio</Link>
  
  
  </ul>
  <Route exact path=""component={App}/>
  <Route path=""component={About}/>
  <Route path=""component={Contact}/>
  <Route path=""component={Protfolio}/>
  
  </div>
  
  
  
  
  </Router>
   
  
    
  )
  
  
  
  ReactDOM.render(
    myrouter,
    document.getElementById('root')
  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

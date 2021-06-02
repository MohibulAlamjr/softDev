import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Portfolio from './Pages/Portfolio';
import Style from './Pages/Style';
import {Route,Link,BrowserRouter as Router} from '../node_modules/react-router-dom';
import reportWebVitals from './reportWebVitals';
import '../node_modules/antd/dist/antd.css';
import Slider from './my components/Slider';
import Axios from './Pages/Axios';

const myRoute = (
  <Router>
    <div>
      <ul>
        <Link to = "/">Home</Link>
        <Link to = "/about">About</Link>
        <Link to = "/contact">Contact</Link>
        <Link to = "/portfolio">Portfolio</Link>
        <Link to = "/style">Style</Link>
        <Link to = "/carousel">Slider</Link>
        <Link to = "/axios">Axios</Link>

      </ul>
      <Route exact path = "/" component={App}/>
      <Route path = "/about" component={About}/>
      <Route path = "/contact" component={Contact}/>
      <Route path = "/portfolio" component={Portfolio}/>
      <Route path = "/style" component={Style}/>
      <Route path = "/carousel" component={Slider}/>
      <Route path = "/axios" component={Axios}/>
    </div>
  </Router>
)

ReactDOM.render(myRoute, document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();

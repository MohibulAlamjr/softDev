import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Style from './pages/Style';
import Axios from './pages/Axios'

import { Route, Link, BrowserRouter as Router} from '../node_modules/react-router-dom';
import reportWebVitals from './reportWebVitals';
import '../node_modules/antd/dist/antd.css';
import Slider from './pages/Slider';

const myrount=(
  <Router>
    <div>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/css">Style</Link>
        <Link to="/slider">Slider</Link>
        <Link to="/data">Axios</Link>
        

      </ul>
      <Route exact path="/" component={App} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/css" component={Style} />
      <Route path="/slider" component={Slider} />
      <Route path="/data" component={Axios} />

    </div>
  </Router>
)

ReactDOM.render(myrount, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

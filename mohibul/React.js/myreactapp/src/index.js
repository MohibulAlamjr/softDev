import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import About from './pages/About';
import Contact from './pages/Contact';
import Protfolio from './pages/Protfolio';
import Style from './pages/Style';
import Testcss from './pages/Testcss';
import Recss from './pages/Recss';
import Slider from './mycomp/Slider';
import Axiosd from './pages/Axiosd';
import Boots from './pages/Boots';
import Tabledata from './pages/Tabledata';
import { Route, Link, BrowserRouter as Router} from '../node_modules/react-router-dom';
import reportWebVitals from './reportWebVitals';

const myrount=(
  <Router>
    <div>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/css">ShowCSS</Link>
        <Link to="/module">Moudule</Link>
        <Link to="/recss">Recss</Link>
        <Link to="/slider">slider</Link>
        <Link to="/apidata">Axiosd</Link>
        <Link to="/table">Table</Link>
        <Link to="/boots">Bootstrap Navbar</Link>
      </ul>
      <Route exact path="/" component={App} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/portfolio" component={Protfolio} />
      <Route path="/css" component={Style} />
      <Route path="/module" component={Testcss} />
      <Route path="/recss" component={Recss} />
      <Route path="/slider" component={Slider} />
      <Route path="/apidata" component={Axiosd} />
      <Route path="/table" component={Tabledata} />
      <Route path="/boots" component={Boots} />

    </div>
  </Router>
)

ReactDOM.render(myrount, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

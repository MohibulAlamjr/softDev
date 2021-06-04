import logo from './logo.svg';
import './App.css';
import Myroute from '../src/Component/Myroute';
import Navbaarr from '../src/Component/Navbaarr';
import {BrowserRouter}  from 'react-router-dom';

import '../src/css/bootstrap.min.css';


function App() {
  return (
    <div >
     
     <BrowserRouter>
   <Navbaarr></Navbaarr>
   <Myroute></Myroute>
   

   </BrowserRouter>

    </div>
  );
}

export default App;

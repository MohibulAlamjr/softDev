import logo from './logo.svg';
import './App.css';

import Routee from './component/Routee';
import {BrowserRouter}  from 'react-router-dom';
import Linnk from './component/Linnk';

function App() {
  return (
    <div className="App">

<BrowserRouter>
        <Linnk></Linnk>
        <Routee></Routee>
        </BrowserRouter>

        
    </div>
  );
}

export default App;

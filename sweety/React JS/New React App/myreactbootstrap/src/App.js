import logo from './logo.svg';
import './App.css';
import {BrowserRouter}  from 'react-router-dom';
import Links from './component/Links';
import Routerb from './component/Routerb';


function App() {
  return (
    <div className="App">

<BrowserRouter>
        <Links></Links>
        <Routerb></Routerb>
        </BrowserRouter>

        
    </div>
  );
}

export default App;

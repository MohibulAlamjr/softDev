import './App.css';
import Navbard from './Component/Navbard';
import Routed from './Component/Routed';


import {BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbard></Navbard>
      <Routed></Routed>
      </BrowserRouter>
      
     
    </div>
  );
}

export default App;

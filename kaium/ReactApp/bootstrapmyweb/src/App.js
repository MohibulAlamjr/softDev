import './App.css';
import Routed from './Component/Routed';
import {BrowserRouter} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      
      <Routed></Routed>
      </BrowserRouter>
    </div>
  );
}

export default App;

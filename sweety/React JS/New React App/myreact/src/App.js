
import './App.css';
import Routes from '../src/Component/Routes';
import Navbar1 from '../src/Component/Navbar1';
import { BrowserRouter } from 'react-router-dom';




function App() {
  return (
    <div>
<BrowserRouter>
<Navbar1></Navbar1>
<Routes></Routes>


</BrowserRouter>

    </div>
  );
}

export default App;

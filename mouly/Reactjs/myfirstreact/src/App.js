import logo from './logo.svg';

import Hello from './firstcomponents/Hello'
import Welcome from './firstcomponents/Classcom'
import Arrow from './firstcomponents/Arrow'
import State from './firstcomponents/State'
import Setstate from './firstcomponents/Setstate'
import Condition1 from './firstcomponents/Condition1'
import Element from './firstcomponents/Element'
import Refresh from './firstcomponents/Refresh'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
function App() {
  return (
   <div className = "App">
     <h1>{1+4+7}</h1>
     <h1>Serajum Munira</h1>

     <Hello name = "Serajum" age = "24"></Hello>
    

     <Welcome district = "Jhenaidah"></Welcome>
    
    <Arrow text = "Welcome"></Arrow>
    <State></State>
    <Setstate name = "Munira"></Setstate>
    <Setstate name = "Era"></Setstate>
    <Setstate name = "Ema"></Setstate> <br />
    <Condition1></Condition1> 
    <Element></Element>
    <Refresh></Refresh>


   </div>
  );
}

export default App;

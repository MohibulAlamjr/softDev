import './App.css';
import Hello from './mycomponent/Hello'
import Welcome from './mycomponent/Welcome'
import Welcome1 from './mycomponent/Welcome1'
import Arrow from './mycomponent/Arrow'
import Welcome2 from './mycomponent/Welcome2'
import Welcome3 from './mycomponent/Welcome3'
import Welcome4 from './mycomponent/Welcome4'
import Refesh from './mycomponent/Refesh'
import Welcome5 from './mycomponent/Welcome5'
import Welcome6 from './mycomponent/Welcome6'
import Tabledata from './mycomponent/Mytable'


import Signup from './mycomponent/Signup'


function App() {
  return (
    <div className="App">
     <h1>MD AL Kaium</h1>
     <h1>{5+6+7}</h1>
     <Hello name="Mohibul" age="23" home="Rajshahi"></Hello>
     <Hello name="Sweety" age="22" home="Dhaka"></Hello>
     <Hello name="Mouly" age="21" home="Khulna"></Hello>
    
     
     <Welcome></Welcome>
     <Welcome name="Kaium" age="25" home="Barisal"></Welcome>

     <Welcome1></Welcome1>
     <Welcome2></Welcome2>
     <Arrow></Arrow>
     <Welcome3></Welcome3>
     <Welcome4></Welcome4> 
     <Refesh></Refesh>
     <Welcome5></Welcome5>
     <Welcome6></Welcome6>
     <Tabledata></Tabledata>
    










     <br/><br/><br/>

     <Signup></Signup>
    </div>
  );
}

export default App;

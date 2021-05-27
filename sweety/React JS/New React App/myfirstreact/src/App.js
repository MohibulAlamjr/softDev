import logo from './logo.svg';
import './App.css';
import Hello from './my components/Hello'
import Welcome from './my components/Classcomponent'
import Arrow from './my components/Arrow'
import Class from './my components/Class'
import Change from './my components/Change'
import Condition1 from './my components/Condition1'
import ConditionElement from './my components/ConditionElement'
import Refresh from './my components/Refresh'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
     <h1>{2+3+5}</h1>
     <h1>Shovhana Sweety</h1>
     <Hello name = "Shovhana"  age = "21"></Hello>
     <Hello name = "Sweety" age = "21"></Hello>
     <Hello name = "Mouly" age ="23"></Hello>
     <Hello name = "Serajum" age = "23"></Hello>

     <Welcome city = "Dhaka"></Welcome>
     <Welcome city = "Narshingdi"></Welcome>
     <Arrow name = "Oishi" age = "15"></Arrow>
     <Class></Class>
     <Change name = "Misty"></Change>
     <Change name = "Sweety"></Change>
     <Change age = "22"></Change>
     <Change age = "23"></Change><br/>

     <Condition1></Condition1>
     <ConditionElement></ConditionElement><br/>
     <Refresh></Refresh>
    </div>
  );
}

export default App;

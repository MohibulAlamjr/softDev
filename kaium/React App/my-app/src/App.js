
import './App.css';
import Form from './mycomponent/Form'
import Statevalue from './mycomponent/Statevalue'
import Condition1 from './mycomponent/Condition1'
import Refresh from './mycomponent/Refresh'
import Select1 from './mycomponent/Select1'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
     <Form></Form>
    <Statevalue></Statevalue> 
    <Condition1></Condition1>
    <Select1></Select1>
    <Refresh></Refresh>
    </div>
  );
}

export default App;

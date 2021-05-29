
import './App.css';
import Form from './mycomponent/Form'
import Statevalue from './mycomponent/Statevalue'
import Condition1 from './mycomponent/Condition1'
import Refresh from './mycomponent/Refresh'
import Newdemo from './mycomponent/Newdemo'
import Select1 from './mycomponent/Select1'
import List from './mycomponent/List'
import jsonlist from './mycomponent/jsonlist'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
     <Form></Form>
    <Statevalue></Statevalue> 
    <Condition1></Condition1>
    <Select1></Select1>
    <Refresh></Refresh>
    <Newdemo></Newdemo>
    <List></List>
    <jsonlist></jsonlist>
    </div>
  );
}

export default App;

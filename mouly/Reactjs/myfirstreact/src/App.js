import logo from './logo.svg';


import Hello from './firstcomponents/Hello'
import Welcome from './firstcomponents/Classcom'
import Arrow from './firstcomponents/Arrow'
import State from './firstcomponents/State'
import Setstate from './firstcomponents/Setstate'
import Condition1 from './firstcomponents/Condition1'
import Element from './firstcomponents/Element'
import Refresh from './firstcomponents/Refresh'
import Demo from './firstcomponents/Demo'
import FindDomnode from './firstcomponents/FindDomnode'
import Form from './firstcomponents/Form'
import Signup from './firstcomponents/Signup'
import Textarea from './firstcomponents/Textarea'
import Select from './firstcomponents/Select'
import List from './firstcomponents/List'
import Jsonlist from './firstcomponents/Jsonlist'
import Style from './pages/Style'
import Slider from './pages/Slider'
import Table from './pages/Table'
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
    <Demo></Demo>
    <FindDomnode></FindDomnode> <br></br>
    <Form></Form>
    <Signup></Signup>
    <Textarea></Textarea>
    <Select></Select>
    <List></List>
    <Jsonlist></Jsonlist>
    <Style></Style>
    <Slider></Slider>
    <Table></Table>
   


   </div>
  );
}

export default App;

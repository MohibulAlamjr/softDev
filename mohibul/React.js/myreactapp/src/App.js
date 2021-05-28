import Hi from './mycomp/Hi';
import Welcome from './mycomp/Welcome';
import Bio from './mycomp/Bio';
import Arrowf from './mycomp/Arrowf';
import Statec from './mycomp/Statec';
import Stchange from './mycomp/Stchange';
import Login from './mycomp/Login';
import Refresh from './mycomp/Refresh';
import Elements from './mycomp/Elements';
import Signup from './mycomp/Signup';
import Renderm from './mycomp/Renderm';
import Finddom from './mycomp/Finddom';
import Form from './mycomp/Form';
import Text from './mycomp/Text' ;
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <p>{1+8+9}</p>
      <h1>Mohibul Alam</h1>
      <Hi name="mohibul"></Hi>
      <Welcome  fname='Mohibul' lname='Alam' age='24'></Welcome>
      <Bio fname='Mohibul' lname='Alam' age='24'></Bio>
      <Bio fname='Serajum' lname='Munira' age='24'></Bio>
      <Bio fname='Sweety' lname='Aktar' age='21'></Bio>
      <Bio fname='Md. Al' lname='Kaium' age='22'></Bio>
      <Arrowf fruits="Mango" vagetable="Potato"> </Arrowf><br/> <br/>
      <Arrowf fruits="Banana" vagetable="All"> </Arrowf>
      <Statec></Statec><br/> <br/>
      <Stchange name="Alam"></Stchange>
      <Stchange name="mouly"></Stchange>
      <Stchange name="sweety"></Stchange>
      <Stchange name="kaium"></Stchange>
      <Login></Login>
      <Elements></Elements>
      <Refresh></Refresh>
      <Renderm></Renderm>
      <Finddom></Finddom>
      <Form></Form>
     <Signup></Signup>
     <Text></Text>

    </div>
  );
}

export default App;

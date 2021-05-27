import './App.css';
import Arrow from './mycomponent/Arrow'

import'../../myapp/node_modules/bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <div className="App">
      <Hello value="Mouly" age="20"></Hello>
      <Hello value="Sweettea" age="17"></Hello>
      <Hello value="Mohibul" age="33"></Hello>
      <Hello value="Kaium" age="50"></Hello>
      <Welcome value="Abdul" age="20"></Welcome>
      <Welcome value="Salam" age="23"></Welcome>
      <Welcome value="Kamal" age="25"></Welcome>
      <Welcome value="jamal" age="30"></Welcome>
      <Arrow></Arrow>
      
    </div>
  );
}

export default App;

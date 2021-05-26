import logo from './logo.svg';
import './App.css';
import Hello from './mycomponent/Hello'
import Welcome from './mycomponent/Welcome'
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
    </div>
  );
}

export default App;

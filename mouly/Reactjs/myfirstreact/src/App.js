import logo from './logo.svg';
import './App.css';
import Hello from './firstcomponents/Hello'
import Welcome from './firstcomponents/Classcom'
function App() {
  return (
   <div className = "App">
     <h1>{1+4+7}</h1>
     <h1>Serajum Munira</h1>

     <Hello name = "Serajum" age = "24"></Hello>
     <Hello name = "Munira" age = "25"></Hello>
     <Hello name = "Mouly" age = "26"></Hello>
     <Hello name = "Era" age = "16"></Hello>
     <Hello name = "Ema" age = "28"></Hello>

     <Welcome></Welcome>


   </div>
  );
}

export default App;

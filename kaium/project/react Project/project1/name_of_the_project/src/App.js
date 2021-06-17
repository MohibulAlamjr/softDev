import './App.css';
import Typical from 'react-typical'
import img from './Asset/img/photo.jpg'

function App() {
  return (
   
    <div className="App"> 
    
      <header className="App-header">
        {/* <h1>softDev</h1><br/> */}
        <img src={img} className="App-logo" alt="logo" /><br/>
      <h1>Hi, I'm Md AL Kaium</h1>
       <p>
         Hi, 
         <Typical
         loop={Infinity}
         wrapper="b"
         steps={[
        
          'I am developer 💂‍🧑‍🎓', 
          2000,
          'I am designer 👌', 
          2000,
          'I am YouTuber', 
          2000,
          'I can pause',
           4000,
          'I am Sourcer', 
          2000,
          'I am beatboxer(wannabe) 🤩', 
          2000,
          'I am husband 😀', 
          2000,
          'I am father 🧔', 
          2000,
          
         ]}

         />
         
       </p>
      
      </header>
    </div>
  );
}

export default App;

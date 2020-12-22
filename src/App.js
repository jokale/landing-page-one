import './App.css';
import Card from './Components/Card';
import Contact from './Components/Contact';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
      <div id="Header">    
        <Header/> 
      </div> <br></br>
      <div id="Card">
        <Card/>
      </div><br></br>
      <div id="Contact" >    
       <Contact/>
      </div> <br></br>
    </div>
  );
}

export default App;

import './App.css';
import Accordian from './components/accordian';
import RandomColor from './components/accordian/random-color';

function App() {
  return (
    <div className="App">
      {/*Accordion Component */}
      <Accordian/>

       {/*Random Color Component */}
      <RandomColor/>
    </div>
  );
}

export default App;

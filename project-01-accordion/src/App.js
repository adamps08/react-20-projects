import './App.css';
import Accordian from './components/accordian';
import RandomColor from './components/accordian/random-color';
import StarRating from './components/star-rating';

function App() {
  return (
    <div className="App">
      {/*Accordion Component */}
      <Accordian/>

       {/*Random Color Component */}
      <RandomColor/>
      {/* Star Rating Component */}
      <StarRating noOfStars={10}/>
    </div>
  );
}

export default App;

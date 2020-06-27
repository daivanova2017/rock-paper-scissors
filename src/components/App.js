import React, {useState} from 'react';
import '../css/style.css';
import Rules from './Rules'
import Score from './Score'
import PlayZone from './PlayZone';
import Footer from './Footer';

function App() {
  let [score, setScore] = useState(0)

  return (
    <div className="App">
      <Score score={score}></Score>
      <PlayZone score={score} setScore={setScore}></PlayZone>
      <Rules></Rules>
      <Footer></Footer>
    </div>
  )
}

export default App;
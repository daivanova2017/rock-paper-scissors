import React from 'react';
import '../css/style.css';
import Rules from './Rules'
import Score from '../containers/Score'
import PlayZone from '../containers/PlayZone';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Score></Score>
      <PlayZone></PlayZone>
      <Rules></Rules>
      <Footer></Footer>
    </div>
  )
}

export default App;
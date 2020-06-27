import React from 'react';
import logo from '../images/logo.svg';

function Score(props) {
  return (
    <div className="Score">
      <img src={logo} alt="Rock|Paper|Scissors" />
      <div className="Score-points">
        <p className="Score-points-text">score</p>
        <p>{props.score}</p>
      </div>
    </div>
  )
}

export default Score;
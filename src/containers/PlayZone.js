import React from 'react';
import Choice from './Choice';
import Timer from '../components/Timer';
import Result from './Result';
import { setScore, setChoice, setComputerChoice } from '../actions/ScoreActions'
import { connect } from 'react-redux';

function PlayZone(props) {
  const {choice, setComputerChoiceAction, computerChoice} = props

  if(!choice){
    return (
      <div className="StartZone">
        <Choice action='rock' />
        <Choice action='paper' />
        <Choice action='scissors' />
      </div>
    )  
  }
  else{
    let computerChoices = ['rock', 'paper', 'scissors']
    if(computerChoice === "none"){
      setTimeout(() => setComputerChoiceAction(computerChoices[getRandom(2)]), 3000)
    }

    function getRandom(max) {
      max = Math.floor(max)
      return Math.floor(Math.random() * (max + 1))
    }
    return (
      <div className="PlayZone">
        <div className="your-choice">
          <p>you picked</p>
          <Choice action={choice}/>
        </div>
        {computerChoice === 'none'
          ? <Timer />
          : <Result 
              computerChoice={computerChoice} 
              action={choice}
            />
        }
        <div className="computer-choice">
          <p>the house picked</p>
          <Choice action={computerChoice}/>
        </div>
      </div>
    )  
  }
}

const mapStateToProps = store => {
  return {
    score: store.score,
    choice: store.choice,
    computerChoice: store.computerChoice,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setScoreAction: score => dispatch(setScore(score)),
    setChoiceAction: choice => dispatch(setChoice(choice)),
    setComputerChoiceAction: computerChoice => dispatch(setComputerChoice(computerChoice)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PlayZone);

import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { setScore, setChoice, setComputerChoice } from '../actions/ScoreActions'

function Result(props) {
  const {computerChoice, setScoreAction, score, action, setChoiceAction, setComputerChoiceAction} = props
  useEffect(() => { 
    let res = winResult(computerChoice, action)
    if(res === "draw"){
      setScoreAction(+score + 1)
    }
    else if(res === "win"){
      setScoreAction(+score + 2)
    }   
  }, [])

  let result = winResult(computerChoice, action)
  console.log(result)
  return (
    <div className="Result">
      <p className="Result-header">
        {result === 'win'
          ? 'you win'
          : result === 'lose'
            ? 'you lose'
            : 'draw'
        }
      </p>
      <button onClick={() => {setChoiceAction(false); setComputerChoiceAction('none')}}>play again</button>
    </div>
  )
}

const winResult = (computerChoice, userChoise) => {
  if(computerChoice === userChoise){
    return 'draw'
  }
  else if(computerChoice === 'rock' && userChoise === 'scissors' || 
  computerChoice === 'paper' && userChoise === 'rock' || 
  computerChoice === 'scissors' && userChoise === 'paper'){
    return 'lose'
  }
  else
    return 'win'
}

const mapStateToProps = store => {
  console.log(store)
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
)(Result);

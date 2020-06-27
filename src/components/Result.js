import React, {useEffect} from 'react';

function Result(props) {
  let result, score = props.score
  console.log(props)
  if(props.computerChoice === props.action){
    result = 'draw';
    score += 1
  }
  else if(props.computerChoice === 'rock' && props.action === 'scissors' || 
  props.computerChoice === 'paper' && props.action === 'rock' || 
  props.computerChoice === 'scissors' && props.action === 'paper'){
    result = 'lose'
  }
  else{
    result = 'win'
    score += 2
  }

  useEffect(() => {
    props.setScore(score)
  }, []);

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
      <button onClick={() => {props.setChoiсe(false); props.setComputerChoice('none')}}>play again</button>
    </div>
  )
}

export default Result;
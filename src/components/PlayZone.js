import React, { useState } from 'react';
import Choice from './Choice';
import Timer from './Timer';
import Result from './Result';

function PlayZone(props) {
  let [madeСhoice, setChoiсe] = useState(false)
  let [computerChoice, setComputerChoice] = useState('none')

  if(!madeСhoice){
    return (
      <div className="StartZone">
        <Choice action='rock' setChoiсe={setChoiсe} />
        <Choice action='paper' setChoiсe={setChoiсe} />
        <Choice action='scissors' setChoiсe={setChoiсe} />
      </div>
    )  
  }
  else{
    let computerChoices = ['rock', 'paper', 'scissors']
    if(computerChoice === "none"){
      setTimeout(() => setComputerChoice(computerChoices[getRandom(2)]), 3000)
    }

    function getRandom(max) {
      max = Math.floor(max)
      return Math.floor(Math.random() * (max + 1))
    }

    return (
      <div className="PlayZone">
        <div className="your-choice">
          <p>you picked</p>
          <Choice action={madeСhoice}/>
        </div>
        {computerChoice === 'none'
          ? <Timer />
          : <Result 
              computerChoice={computerChoice} 
              action={madeСhoice} 
              setChoiсe={setChoiсe} 
              setComputerChoice={setComputerChoice} 
              score={props.score} 
              setScore={props.setScore}
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

export default PlayZone;
import React from 'react';
import rock from '../images/icon-rock.svg';
import paper from '../images/icon-paper.svg';
import scissors from '../images/icon-scissors.svg';

function Choice(props) {
  let image = 'default', className = 'Choice-' + props.action;
  switch(props.action) {
    case 'rock':
      image = rock
      break
    case 'paper':
      image = paper
      break
    case 'scissors':
      image = scissors
      break
    default:
      break
  }
  
  if(image === 'default'){
    return(
      <div className={className}></div>
    )
  }
  else{
    if(props.setChoiсe){
      return(
        <div className={className} onClick={() => props.setChoiсe(props.action)}>
          <img src={image} alt={props.action} />
        </div>
      )
    }
    else{
      return(
        <div className={className}>
          <img src={image} alt={props.action} />
        </div>
      )
    }
  }
}

export default Choice;
import React from 'react';
import rock from '../images/icon-rock.svg';
import paper from '../images/icon-paper.svg';
import scissors from '../images/icon-scissors.svg';
import { setChoice } from '../actions/ScoreActions'
import { connect } from 'react-redux';

function Choice(props) {
  const {setChoiceAction, action} = props

  let image = 'default', className = 'Choice-' + action;
  switch(action) {
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
    if(setChoice){
      return(
        <div className={className} onClick={() => setChoiceAction(action)}>
          <img src={image} alt={action} />
        </div>
      )
    }
    else{
      return(
        <div className={className} >
          <img src={image} alt={action} />
        </div>
      )
    }
  }
}
const mapStateToProps = store => {
  return {
    choice: store.choice,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setChoiceAction: choice => dispatch(setChoice(choice)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Choice);
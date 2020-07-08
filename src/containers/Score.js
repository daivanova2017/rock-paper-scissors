import React, {useEffect} from 'react';
import logo from '../images/logo.svg';
import { connect } from 'react-redux';
import { setScore } from '../actions/ScoreActions'

function Score(props) {
  const {score} = props

  useEffect(() => {
    localStorage.setItem('score', score)
  })

  return (
    <div className="Score">
      <img src={logo} alt="Rock|Paper|Scissors" />
      <div className="Score-points">
        <p className="Score-points-text">score</p>
        <p>{score}</p>
      </div>
    </div>
  )
}

const mapStateToProps = store => {
  return {
    score: store.score,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setScoreAction: score => dispatch(setScore(score)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Score);

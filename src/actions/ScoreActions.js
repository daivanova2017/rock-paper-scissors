export function setScore(score) {
  return {
    type: 'SET_SCORE',
    payload: score,
  }
}

export function setChoice(choice) {
  return {
    type: 'SET_CHOICE',
    payload: choice,
  }
}

export function setComputerChoice(computerChoice) {
  return {
    type: 'SET_COMPUTER_CHOICE',
    payload: computerChoice,
  }
}
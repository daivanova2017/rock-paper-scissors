export const initialState = {
  score: localStorage.getItem('score'),
  choice: false,
  computerChoice: 'none',
}

export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_SCORE':
      return { ...state, score: action.payload }
    case 'SET_CHOICE':
      return { ...state, choice: action.payload }
    case 'SET_COMPUTER_CHOICE':
      return { ...state, computerChoice: action.payload }

    default:
      return state
  }
}
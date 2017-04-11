import { SET_WINNER } from './constants';

const winner = (state = null, action) => {
  switch (action.type) {
    case SET_WINNER:
      return action.playerId;
    default:
      return state;
  }

  return state;
}

export default winner;

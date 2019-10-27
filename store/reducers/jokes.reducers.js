import * as actionTypes from '../actions/jokes.actions';


function addJoke(state = [], action) {
  if (state.find(_joke => _joke.id === action.joke.id)) {
    return state;
  }

  return [...state, action.joke];
}

function removeJoke(state = [], action) {
  action.joke = action.joke || {};

  return state.filter(_joke => _joke.id !== action.joke.id)
}

export default (state = {}, action) => {
  switch(action.type) {
    case actionTypes.ADD_JOKE:
      return addJoke(state, action);
    case actionTypes.REMOVE_JOKE:
      return removeJoke(state, action);
    default:
      return state;
  }
};

export const ADD_JOKE    = 'ADD_JOKE';
export const REMOVE_JOKE = 'REMOVE_JOKE';

export function addJoke(joke) {
  return {
    type: ADD_JOKE,
    joke,
  };
}

export function removeJoke(joke) {
  return {
    type: REMOVE_JOKE,
    joke,
  };
}

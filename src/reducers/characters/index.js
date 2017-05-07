import {SET_CHARACTERS} from './actions';
const initialState = [];

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_CHARACTERS:
      return action.characters;
    default:
      return state;
  }
}
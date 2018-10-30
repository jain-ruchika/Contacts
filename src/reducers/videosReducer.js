import {FETCH_VIDEOS, SELECTED_VIDEO} from '../actions/types';

const initialState = {
  items: [],
  item: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_VIDEOS:
      return {
        ...state,
        items: action.payload
      };
    case SELECTED_VIDEO:
      return {
        ...state,
        item: action.payload
      };
    default:
      return state;
  }
}

import { ADD_POSTS, FETCH_POSTS } from '../actions/types';

const initialState = {
  items: [],
  item: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        items: action.payload,
      };
    case ADD_POSTS:
      return {
        ...state,
        item: action.payload,
      };
    default:
      return state;
  }
}

import {GET_BOOKS} from "../actions/types";

const initialState = {
  items: [],
  isLoaded: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOKS:
      return {
        ...state,
        items: action.payload,
        isLoaded: true
      };
    default:
      return state;

  }
}

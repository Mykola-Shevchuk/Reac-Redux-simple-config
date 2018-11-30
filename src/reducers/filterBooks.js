import {FILTER_BOOKS} from "../actions/types";

const initialState = {
  filterBy: 'all'
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FILTER_BOOKS:
      return {
        ...state,
        filterBy: action.payload
      };
    default:
      return state;

  }
}

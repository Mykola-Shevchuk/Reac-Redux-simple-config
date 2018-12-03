import {SEARCH_BOOKS, FILTER_BOOKS} from "../actions/types";

const initialState = {
  searchQuery: '',
  filterBy: 'all'
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_BOOKS:
      return {
        ...state,
        searchQuery: action.payload
      };
    case FILTER_BOOKS:
      return {
        ...state,
        filterBy: action.payload
      };
    default:
      return state;

  }
}

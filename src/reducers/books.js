import { GET_BOOKS, ADD_BOOKS } from "../actions/types";

const initialState = {
    books: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_BOOKS: 
          return {
            books: action.payload
          };
        case ADD_BOOKS:
            return {
                ...state,
                books: action.payload
            };
        default:
            return state;

    }
}

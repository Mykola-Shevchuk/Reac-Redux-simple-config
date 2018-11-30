import { GET_BOOKS, FILTER_BOOKS } from "./types";

const getBooks = () => dispatch => {
  fetch('/books.json')
    .then(res => res.json())
    .then(data => dispatch({
    type: GET_BOOKS,
    payload: data
  }));
};

const filterBooks = typeFilter => dispatch => {
  return dispatch ({
    type: FILTER_BOOKS,
    payload: typeFilter
  })
};

export {
  getBooks,
  filterBooks
}


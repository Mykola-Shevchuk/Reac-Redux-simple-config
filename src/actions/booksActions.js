import { GET_BOOKS } from "./types";

const getBooks = () => dispatch  => {
  fetch('/books.json')
    .then(res => res.json())
    .then(data => dispatch({
    type: GET_BOOKS,
    payload: data
  }));
};

export {
  getBooks
}

import { GET_BOOKS } from "./types";

const getBooks = () => dispatch  => {
  dispatch({
    type: GET_BOOKS
  });
};

export {
  getBooks
}
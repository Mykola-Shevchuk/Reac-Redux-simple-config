import {FILTER_BOOKS, SEARCH_BOOKS} from "./types";

const filterBooks = typeFilter => ({
    type: FILTER_BOOKS,
    payload: typeFilter
  });

const searchBooks = value => ({
  type: SEARCH_BOOKS,
  payload: value
});

export {
  filterBooks,
  searchBooks
}

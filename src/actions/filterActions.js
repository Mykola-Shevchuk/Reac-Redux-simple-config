import {FILTER_BOOKS} from "./types";

const filterBooks = typeFilter => ({
    type: FILTER_BOOKS,
    payload: typeFilter
  });

export {
  filterBooks
}

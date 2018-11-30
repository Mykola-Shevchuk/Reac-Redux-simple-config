import {combineReducers} from 'redux';
import booksReducer from './books';
import cartReducer from './cart';
import filterReducer from './filterBooks';

export default combineReducers({
  booksReducer,
  cartReducer,
  filterReducer
});

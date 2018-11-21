import { combineReducers } from 'redux';
import booksReducer from './books';
import cartReducer from './cart';

export default combineReducers({
    booksReducer,
    cartReducer
});

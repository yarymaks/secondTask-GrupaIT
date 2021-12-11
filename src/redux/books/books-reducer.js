import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './books-actions';

const initialBooks = [];

const items = createReducer(initialBooks, {
  [actions.addBook]: (state, { payload }) => [payload, ...state],
  [actions.deleteBook]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [actions.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});

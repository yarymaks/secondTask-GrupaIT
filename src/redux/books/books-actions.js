import { createAction } from '@reduxjs/toolkit';
import shortid from 'shortid';
const addBook = createAction(
  'books/AddBooks',
  (name, autor, priority, genres) => ({
    payload: {
      id: shortid.generate(),
      name,
      autor,
      priority,
      genres,
    },
  }),
);
const deleteBook = createAction('books/DeleteBook');
const changeFilter = createAction('books/ChangeFilter');

// eslint-disable-next-line import/no-anonymous-default-export
export default { addBook, deleteBook, changeFilter };

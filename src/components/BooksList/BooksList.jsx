import { createUseStyles } from 'react-jss';
import { connect } from 'react-redux';
import booksActions from '../../redux/books/books-actions';
import PropTypes from 'prop-types';
import BookItem from '../BookItem';

const useStyles = createUseStyles({
  BooksList: {
    padding: '20px',
    width: '700px',
    border: '2px solid black',
    borderRadius: '10px',
    marginBottom: '20px',
  },
  Empty: {
    textAlign: 'center',
  },
});

const BooksList = ({ books, onDeleteBook }) => {
  const classes = useStyles();

  return (
    <table className={classes.BooksList}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Autor</th>
          <th>Priority</th>
          <th>Genres</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {books.length !== 0 ? (
          books.map(({ id, name, autor, priority, genres }) => (
            <BookItem
              key={id}
              id={id}
              name={name}
              autor={autor}
              priority={priority}
              genres={genres}
              onDeleteBook={onDeleteBook}
            />
          ))
        ) : (
          <tr>
            <td className={classes.Empty} colSpan="4">
              Library is empty
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

BooksList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

const getFilteredBooks = (allItems, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return allItems.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter),
  );
};

const mapStateToProps = ({ books: { items, filter } }) => ({
  books: getFilteredBooks(items, filter),
});
const mapDispatchToProps = dispatch => ({
  onDeleteBook: bookId => dispatch(booksActions.deleteBook(bookId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);

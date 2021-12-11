import PropTypes from 'prop-types';
import useStyles from './BookItemStyles';
const BookItem = ({ id, name, autor, priority, genres, onDeleteBook }) => {
  const classes = useStyles();
  return (
    <tr>
      <td>
        <p className={classes.BookName}>{name}</p>
      </td>
      <td>
        <p className={classes.BookInfo}>{autor}</p>
      </td>
      <td>
        <p className={classes.BookInfo}>{priority}</p>
      </td>
      <td>
        <ul className={classes.BookInfo}>
          {genres.map(x => (
            <li key={x + name}>{x}</li>
          ))}
        </ul>
      </td>
      <td>
        <button className={classes.BookButton} onClick={() => onDeleteBook(id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

BookItem.propTypes = {
  name: PropTypes.string.isRequired,
  autor: PropTypes.string.isRequired,
  priority: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
  onDeleteBook: PropTypes.func.isRequired,
};
export default BookItem;

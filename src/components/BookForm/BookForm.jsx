import { useState } from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';
import booksActions from '../../redux/books/books-actions';
import PropTypes from 'prop-types';
import useStyles from './BookFormStyles';

const initialState = {
  name: '',
  autor: '',
  priority: '',
  genres: '',
};

const priorityOptions = [
  { value: '1', label: '1' },
  { value: '2', label: '2' },
  { value: '3', label: '3' },
  { value: '4', label: '4' },
  { value: '5', label: '5' },
];
const genresOptions = [
  { value: 'Action', label: 'Action' },
  { value: 'Adventure', label: 'Adventure' },
  { value: 'Fantasy', label: 'Fantasy' },
  { value: 'Romance', label: 'Romance' },
  { value: 'Contemporary', label: 'Contemporary' },
  { value: 'Dystopian', label: 'Dystopian' },
  { value: 'Mystery', label: 'Mystery' },
  { value: 'Horror', label: 'Horror' },
  { value: 'Thriller', label: 'Thriller' },
];

const BookForm = ({ books, onSubmit }) => {
  const classes = useStyles();
  const [inputValue, setInputValue] = useState(initialState);
  const [inputValueSelect, inputValueSelectValue] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const { name, autor, priority, genres } = inputValue;

  const handleSubmit = e => {
    e.preventDefault();
    const hasEmptyField = Object.values(inputValue).some(item => !item);
    if (hasEmptyField) {
      alert('fill all lines');
      return;
    }
    if (books.find(book => book.name.toLowerCase() === name.toLowerCase())) {
      alert(`${name} is already in library`);
      setInputValue(initialState);
      inputValueSelectValue([]);
      setSelectedOptions([]);
      e.currentTarget.reset();
      return;
    }

    if (genres.length !== 0) {
      onSubmit(name, autor, priority, genres);
      setInputValue(initialState);
      inputValueSelectValue([]);
      setSelectedOptions([]);
      e.currentTarget.reset();
    } else {
      alert('Fill all lines');
    }
    return;
  };

  const changeInput = e => {
    const { name, value } = e.currentTarget;

    setInputValue({ ...inputValue, [name]: value });
  };

  const changeSelect = option => {
    let value = '';
    if (option !== null) {
      value = option.value;
    }
    inputValueSelectValue({ label: value, value: value });
    setInputValue({ ...inputValue, priority: value });
  };

  const changeSelectMulti = option => {
    const value = option.map(({ value }) => value);
    setSelectedOptions(option);
    setInputValue({ ...inputValue, genres: value });
  };

  return (
    <form onSubmit={handleSubmit} className={classes.Library}>
      <label className={classes.LibraryInput}>
        <span>Name</span>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="The name can only consist of letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan, etc."
          required
          autoFocus
          placeholder="Enter your name"
          onChange={changeInput}
        />
      </label>

      <label className={classes.LibraryInput}>
        <span>Autor</span>
        <input
          type="text"
          name="autor"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="The autor can only consist of letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan, etc."
          required
          placeholder="Enter autor"
          onChange={changeInput}
        />
      </label>

      <label className={classes.LibraryInput}>
        <span>Priority</span>
        <Select
          value={inputValueSelect}
          options={priorityOptions}
          name="priority"
          required
          onChange={changeSelect}
          isClearable
        />
      </label>

      <label className={classes.LibraryInput}>
        <span>Genres</span>
        <Select
          defaultValue={selectedOptions}
          value={selectedOptions}
          name="genres"
          required
          onChange={changeSelectMulti}
          isMulti
          options={selectedOptions.length === 3 ? [] : genresOptions}
          noOptionsMessage={() => {
            return selectedOptions.length === 3
              ? `You've reached the max options value`
              : `No options available`;
          }}
        />
      </label>

      <button type="submit" className={classes.LibrarySubmit}>
        Add Book
      </button>
    </form>
  );
};

BookForm.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      autor: PropTypes.string.isRequired,
      priority: PropTypes.string.isRequired,
      genres: PropTypes.array.isRequired,
    }),
  ),
  onSubmit: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  books: state.books.items,
});

const mapDispatchToProps = dispatch => ({
  onSubmit: (name, autor, priority, genres) => {
    dispatch(booksActions.addBook(name, autor, priority, genres));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BookForm);

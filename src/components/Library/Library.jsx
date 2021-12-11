import BooksList from '../BooksList';
import BookForm from '../BookForm';

const Library = () => {
  return (
    <>
      <h2>Library</h2>
      <BookForm />
      <h2>Books</h2>
      <BooksList />
    </>
  );
};
export default Library;

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const BooksList = ({ isLoading, books, deleteBook, getSingleBook }) => {
  const { isLoggedIn } = useSelector((state) => {
    return state.auth;
  });
  const dispatch = useDispatch();

  const bookList = books.length ? (
    books.map((book) => {
      const { id, title } = book;
      return (
        <li
          className='list-group-item d-flex  justify-content-between align-items-center'
          key={id}
        >
          <div>{title}</div>
          <div className='btn-group' role='group'>
            <button
              type='button'
              className='btn btn-primary'
              disabled={!isLoggedIn}
              onClick={() => getSingleBook(id)}
            >
              Read
            </button>
            <button
              type='button'
              className='btn btn-danger'
              disabled={!isLoggedIn}
              onClick={() => {
                dispatch(deleteBook(id));
              }}
            >
              Delete
            </button>
          </div>
        </li>
      );
    })
  ) : (
    <h6>No books found</h6>
  );
  return (
    <div>
      <h2>Books List</h2>
      {isLoading ? (
        <h6>Loading...</h6>
      ) : (
        <ul className='list-group'>{bookList}</ul>
      )}
    </div>
  );
};

export default BooksList;

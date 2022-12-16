import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBooks, deleteBook } from '../../store/bookSlice';

import BookInfo from './BookInfo';
import BooksList from './BooksList';

import './book.css';
import { useState } from 'react';

const PostContainer = () => {
  const [selectedBook, setSelectedBook] = useState({});
  const { loading, books } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  const getSingleBook = (bookId) => {
    const book = books.find((book) => book.id === bookId);
    setSelectedBook(book);
  };

  return (
    <Fragment>
      <hr className='my-5' />
      <div className='row'>
        <div className='col'>
          <BooksList
            isLoading={loading}
            books={books}
            deleteBook={deleteBook}
            getSingleBook={getSingleBook}
          />
        </div>
        <div className='col side-line'>
          <BookInfo selectedBook={selectedBook} />
        </div>
      </div>
    </Fragment>
  );
};

export default PostContainer;

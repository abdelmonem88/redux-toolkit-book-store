import React, { Fragment } from 'react';

const BookInfo = ({ selectedBook }) => {
  console.log(selectedBook);
  return (
    <Fragment>
      <h2>Book Details</h2>

      {Object.keys(selectedBook).length ? (
        <div>
          <p className='fw-bold'>Title: {selectedBook.title}</p>
          <p className='fw-light'>Description: {selectedBook.description}</p>
          <p className='fst-italic'>Price: {selectedBook.price}</p>
        </div>
      ) : (
        <div className='alert alert-secondary' role='alert'>
          There is no post selected yet. Please select!
        </div>
      )}
    </Fragment>
  );
};

export default BookInfo;

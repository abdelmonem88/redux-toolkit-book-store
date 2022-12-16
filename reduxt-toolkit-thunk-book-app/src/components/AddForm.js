import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { addBook } from '../store/bookSlice';

const Addform = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => {
    return state.auth;
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const price = e.target.price.value;
    const description = e.target.Description.value;
    dispatch(
      addBook({
        title,
        price,
        description,
      })
    )
      .then(() => {
        e.target.reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className='row'>
      <div className='col-6 offset-3 mt-3'>
        <h2>Insert Book</h2>
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor='title'>Title</label>
            <input type='text' className='form-control' id='title' required />
          </div>
          <div className='form-group'>
            <label htmlFor='price'>Price</label>
            <input type='number' className='form-control' id='price' required />
          </div>
          <div className='form-group'>
            <label htmlFor='Description'>Description</label>
            <textarea
              className='form-control'
              id='Description'
              rows='3'
              required
            ></textarea>
          </div>
          <button
            type='submit'
            className='btn btn-primary'
            disabled={!isLoggedIn}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addform;

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setLogInOut } from '../store/authSlice';

const Header = () => {
  const { isLoggedIn } = useSelector((state) => {
    return state.auth;
  });
  const dispatch = useDispatch();
  const authHandler = () => {
    dispatch(setLogInOut());
  };
  console.log(isLoggedIn);
  return (
    <nav className='navbar navbar-dark bg-dark'>
      <span className='navbar-brand mb-0 h1'>My Books</span>
      <button
        className='btn btn-outline-primary'
        type='submit'
        onClick={authHandler}
      >
        {isLoggedIn ? 'Log out' : 'Log In'}
      </button>
    </nav>
  );
};

export default Header;

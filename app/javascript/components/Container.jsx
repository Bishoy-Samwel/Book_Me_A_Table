/* eslint-disable arrow-body-style */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { loggedIn } from './redux/auth';

export const Container = () => {
  const dispatch = useDispatch();

  dispatch(loggedIn);
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/restaurants">Home</Link>
          </li>
          <li>
            <Link to="/randomMessage">Random Message</Link>
          </li>
          <li>
            <Link to="/signUp">SignUp</Link>
          </li>
          <li>
            <Link to="/logIn">logIn</Link>
          </li>
        </ul>
      </nav>

    </div>
  );
};

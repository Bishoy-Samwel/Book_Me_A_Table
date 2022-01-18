/* eslint-disable import/prefer-default-export */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { loggedIn } from './redux/auth';

export const Container = () => {
  const dispatch = useDispatch();

  useEffect(dispatch(loggedIn), []);
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

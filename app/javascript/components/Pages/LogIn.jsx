/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable import/prefer-default-export */
/* eslint-disable arrow-body-style */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login, logOut } from '../redux/auth';
import { currentUser } from '../selectors';

export const LogIn = () => {
  const user = useSelector(currentUser);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(login({ email, password }));
  };

  const handleLogout = () => {
    console.log('Bye Bye');
    dispatch(logOut());
  };

  const renderForm = (
    <div>
      <form onSubmit={handleSubmit}>
        <div>Sign In</div>
        <div>
          <label>Email </label>
          <input type="text" required onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Password </label>
          <input type="password" required onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div>
          <input type="submit" />
        </div>
        <span>Dont have an account? </span>
        <Link to="/signUp">SignUp</Link>
      </form>
    </div>
  );
  return (
    <>
      {(Object.keys(user).length !== 0)
        ? (
          <div>
            <h1>The user logged in</h1>
            <button type="button" onClick={handleLogout}>Log Out</button>
          </div>
        )
        : renderForm}
    </>
  );
};

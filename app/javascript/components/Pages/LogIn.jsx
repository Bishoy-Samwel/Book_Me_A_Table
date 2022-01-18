/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable import/prefer-default-export */
/* eslint-disable arrow-body-style */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/auth';
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

  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
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
      </form>
    </div>
  );
  return (
    <>
      <div className="app">
        <div className="login-form">
          <div className="title">Sign In</div>
          {renderForm}
          {(user) ? <h1>The user logged in</h1> : true}
        </div>
      </div>
      <span>Dont have an account? </span>
      <Link to="/signUp">SignUp</Link>
    </>
  );
};

/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable import/prefer-default-export */
/* eslint-disable arrow-body-style */
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/auth';
import { currentUser } from '../selectors';

export const LogIn = () => {
  const user = useSelector(currentUser);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(login({ email, password }));
  };

  const renderForm = (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email address:</label>
          <input type="email" className="form-control" placeholder="Enter email" id="email" required onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="pwd">Password:</label>
          <input type="password" className="form-control" placeholder="Enter password" id="pwd" required onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="form-group form-check">
          <label className="form-check-label">
            <input className="form-check-input" type="checkbox" />
            {' '}
            Remember me
          </label>
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
      <span>Dont have an account? </span>
      <Link to="/signUp">SignUp</Link>

    </div>
  );
  return (
    <>
      {(Object.keys(user).length !== 0)
        ? navigate('/')

        : renderForm}
    </>
  );
};

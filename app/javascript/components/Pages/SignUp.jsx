/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable import/prefer-default-export */
/* eslint-disable arrow-body-style */
import React, { useReducer, useState } from 'react';
import { Link } from 'react-router-dom';

export const SignUp = () => {
  const formReducer = (state, event) => {
    return {
      ...state,
      [event.name]: event.value,
    };
  };

  const [formData, setFormData] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
    }, 3000);
  };

  const handleChange = (event) => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  };
  return (
    <>
      <div className="wrapper">
        <form onSubmit={handleSubmit}>
          <fieldset>
            <label>
              {' '}
              Username
              <input required name="username" onChange={handleChange} value={formData.username || ''} />
            </label>
            <br />
            <label>
              {' '}
              Email
              <input required name="email" onChange={handleChange} value={formData.email || ''} />
            </label>
            <br />
            <label>
              {' '}
              Password
              <input required name="password" type="password" onChange={handleChange} value={formData.password || ''} />
            </label>
          </fieldset>
          <button type="submit">Submit</button>
        </form>
      </div>

      <span>Already have and account? </span>
      <Link to="/logIn">Log in</Link>
    </>

  );
};

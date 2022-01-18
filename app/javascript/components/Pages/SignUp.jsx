/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable import/prefer-default-export */
/* eslint-disable arrow-body-style */
import React from 'react';
import { Link } from 'react-router-dom';

export const SignUp = () => {
  return (
    <>
      <h1>Sign up Page</h1>

      <span>Already have and account? </span>
      <Link to="/logIn">Log in</Link>
    </>

  );
};

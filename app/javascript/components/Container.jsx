/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
/* eslint-disable import/prefer-default-export */
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Navbar from './navbar';
import { loggedIn } from './redux/auth';
import ElementDetails from './ElementDetails/Details';
import Elements from './Elements/Elements';
import Reservations from './reservations';
import { LogIn } from './Pages/LogIn';
import { SignUp } from './Pages/SignUp';

export const Container = () => {
  const dispatch = useDispatch();
  useEffect(() => { dispatch(loggedIn()); }, [dispatch]);
  const [menuCollapse, setMenuCollapse] = useState(false);
  const menuIconClick = () => {
    (menuCollapse) ? setMenuCollapse(false) : setMenuCollapse(true);
  };
  return (
    <div>
      <Navbar menuCollapse={menuCollapse} menuIconClick={menuIconClick} />
      <div className={menuCollapse ? 'ml-2' : 'ml-5'}>
        <Routes>
          <Route path="/" element={<Elements />} />
          <Route path="/restaurants" element={<Elements />} />
          <Route path="/myReservations" element={<Reservations />} />
          <Route path="/details/:itemId" element={<ElementDetails />} />
          <Route path="/logIn" element={<LogIn />} />
          <Route path="/signUp" element={<SignUp />} />
        </Routes>
      </div>
    </div>
  );
};

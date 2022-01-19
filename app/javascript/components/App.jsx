/* eslint-disable no-unused-expressions */
import ReactDOM from 'react-dom';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

import { Provider } from 'react-redux';
import { Container } from './Container';
import { LogIn } from './Pages/LogIn';
import { SignUp } from './Pages/SignUp';

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './navbar';
import Reservations from './reservations';
import Restaurants from './restaurants';
import './navbar.css';
import './App.css';
import ElementDetails from './ElementDetails/Details';
import Elements from './Elements/Elements';
import { configureStore } from './redux/configureStore';

const store = configureStore();

export default function App() {
  // menuCollapse state using useState hook
  const [menuCollapse, setMenuCollapse] = useState(false);
  // custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    // condition checking to change state from true to false and vice versa
    (menuCollapse) ? setMenuCollapse(false) : setMenuCollapse(true);
  };
  return (
    <Provider store={store}>
      <Router>
        <Container store={store} />
        <Navbar menuCollapse={menuCollapse} menuIconClick={menuIconClick} />
        <div className={menuCollapse ? 'ml-2' : 'ml-5'}>
          <Routes>
            <Route path="/" element={<Restaurants />} />
            <Route path="/myReservations" element={<Reservations />} />
            <Route path="/restaurants" element={<Elements />} />
            <Route path="/details/:itemId" element={<ElementDetails />} />
            <Route path="/logIn" element={<LogIn />} />
            <Route path="/signUp" element={<SignUp />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);

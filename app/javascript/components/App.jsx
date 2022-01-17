import ReactDOM from 'react-dom';
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
} from 'react-router-dom';

import { Provider } from 'react-redux';
import configureStore from '../configureStore.js';
import Navbar from './navbar.jsx';
import Reservations from './reservations.jsx';

const store = configureStore();

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          
          <Navbar />
          <Routes>
            <Route path="/" element={<Reserve />} />
            <Route path="/randomMessage" element={<Reservations />} />
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

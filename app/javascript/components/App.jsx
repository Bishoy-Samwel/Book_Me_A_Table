import ReactDOM from 'react-dom';
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

import { Provider } from 'react-redux';
import { configureStore } from './redux/configureStore';
import Message from './message';
import Elements from './Elements/Elements';
import ElementDetails from './ElementDetails/Details';
// import { loggedIn } from './redux/authentication';
import { Container } from './Container';
import { LogIn } from './Pages/LogIn';
import { SignUp } from './Pages/SignUp';

const store = configureStore();

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <Container store={store} />
        <Routes>
          <Route path="/randomMessage" element={<Message msg="hi" />} />
          <Route path="/restaurants" element={<Elements />} />
          <Route path="/details/:itemId" element={<ElementDetails />} />
          <Route path="/logIn" element={<LogIn />} />
          <Route path="/signUp" element={<SignUp />} />

        </Routes>
      </Router>
    </Provider>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);

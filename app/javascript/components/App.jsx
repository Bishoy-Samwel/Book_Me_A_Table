import ReactDOM from 'react-dom';
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
} from 'react-router-dom';

import { Provider } from 'react-redux';
import { store } from './redux/configureStore';
import Message from './message';
import Elements from './Elements/Elements';
import ElementDetails from './ElementDetails/Details';

const storeConfig = store();

export default function App() {
  return (
    <Provider store={storeConfig}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/randomMessage">Random Message</Link>
              </li>
              <li>
                <Link to="/restaurants">Restaurants </Link>
              </li>
            </ul>
          </nav>

        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/randomMessage" element={<Message msg="hi" />} />
          <Route path="/restaurants" element={<Elements />} />
          <Route path="/details/:itemId" element={<ElementDetails />} />
        </Routes>
      </Router>
    </Provider>
  );
}

function Home() {
  return <h2>Home</h2>;
}

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);

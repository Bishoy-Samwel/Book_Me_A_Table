import ReactDOM from 'react-dom';
import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
} from 'react-router-dom';

import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './navbar.jsx';
import Reservations from './reservations.jsx';
import Restaurants from './restaurants.jsx';
import './navbar.css';
import './App.css';
import ElementDetails from './ElementDetails/Details';
import Elements from './Elements/Elements';
import Restaurant from './restaurant.jsx';
import { store } from './redux/configureStore';
const storeConfig = store();

export default function App() {
   // menuCollapse state using useState hook
   const [menuCollapse, setMenuCollapse] = useState(false)
   // custom function that will change menucollapse state from false to true and true to false
   const menuIconClick = () => {
       // condition checking to change state from true to false and vice versa
       menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
   };
  return (
    <Provider store={storeConfig}>
      <Router>
          
          <Navbar menuCollapse={menuCollapse} menuIconClick={menuIconClick} />
          <div className={menuCollapse ? 'ml-2' : 'ml-5'} > 
        <Routes>
          <Route path="/" element={<Restaurants />} />
          <Route path="/myReservations" element={<Reservations />} />
          <Route path="/restaurants" element={<Elements />} />
          <Route path="/details/:itemId" element={<ElementDetails />} />
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

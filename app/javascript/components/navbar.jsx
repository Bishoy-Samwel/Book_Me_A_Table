/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
// import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (

        // <div>
        // <Navbar bg="light" expand="lg" className="flex-column">
        // <Nav.Link as={Link} to="/#">Restaurants</Nav.Link>
        // <Nav.Link as={Link} to="/">Reservations</Nav.Link>
        // <Nav.Link as={Link} to="/myReservations">My Reservations</Nav.Link>
        // </Navbar>
        // </div>
        <div>
            <div className="side-navbar active-nav d-flex justify-content-between flex-wrap flex-column" id="sidebar">
                <ul className="nav flex-column text-white w-100">
                    <a href="#" className="nav-link h3 text-white my-2">
                        Logo
                    </a>
                    <li href="#" className="nav-link">
                        <Link to="/">
                            <i className="bx bxs-dashboard" />
                            <span className="mx-2">Restaurants</span>
                        </Link>
                    </li>
                    <li href="#" className="nav-link">
                        <Link to="/#">
                            <i className="bx bx-user-check" />
                            <span className="mx-2">Reserve</span>
                        </Link>

                    </li>
                    <li href="#" className="nav-link">
                        <Link to="/myReservations">
                            <i className="bx bx-conversation" />
                            <span className="mx-2">My Reservations</span>
                        </Link>
                    </li>
                </ul>
                {/* <span href='' className="nav-link h4 w-100 mb-5">
<a href><i className="bx bxl-instagram-alt text-white" /></a>
<a href><i className="bx bxl-twitter px-2 text-white" /></a>
<a href><i className="bx bxl-facebook text-white" /></a>
</span> */}
            </div>
            {/* Main Wrapper */}
        </div>
    );
}

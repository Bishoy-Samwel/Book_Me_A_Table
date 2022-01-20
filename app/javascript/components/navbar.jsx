/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React from 'react';
// react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from 'react-pro-sidebar';
// icons from react icons
import { FaRegHeart } from 'react-icons/fa';
import {
  FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle,
} from 'react-icons/fi';
import { RiPencilLine } from 'react-icons/ri';
import { BiCog } from 'react-icons/bi';
import { SiApacheairflow } from 'react-icons/si';
// sidebar css from react-pro-sidebar module
import 'react-pro-sidebar/dist/css/styles.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { currentUser } from './selectors';
import { logOut } from './redux/auth';

const Navbar = ({ menuCollapse, menuIconClick }) => {
  const user = useSelector(currentUser);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logOut());
  };
  return (
    <>
      <div id="header">
        {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
            <div className="logotext">
              {/* Icon change using menucollapse state */}
              <p className="text-primary pt-2 pl-2 text-center">
                {!menuCollapse ? (
                  <>
                    <SiApacheairflow />
                    {' '}
                    Book A Table
                  </>
                ) : <SiApacheairflow />}

              </p>
            </div>
            <div role="button" className="closemenu" onClick={menuIconClick}>
              {menuCollapse ? (
                <FiArrowRightCircle />
              ) : (
                <FiArrowLeftCircle />
              )}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem active icon={<FiHome />}>
                Restaurant
                <Link to="/" />

              </MenuItem>
              <MenuItem icon={<FaRegHeart />}>
                <Link to="/reserve" />
                Add a Restaurant
              </MenuItem>
              <MenuItem icon={<RiPencilLine />}>
                My Reservations
                <Link to="/myReservations" />
              </MenuItem>
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
              {
                  (Object.keys(user).length !== 0)

                    ? (
                      <MenuItem
                        icon={<FiLogOut />}
                        onClick={handleLogout}
                      >
                        Logout
                      </MenuItem>
                    )
                    : (
                      <>
                        <MenuItem icon={<BiCog />}>
                          Sign In
                          <Link to="/logIn" />
                        </MenuItem>
                        <MenuItem icon={<RiPencilLine />}>
                          Sign Up
                          <Link to="/signUp" />
                        </MenuItem>
                      </>
                    )
              }
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
  );
};
export default Navbar;

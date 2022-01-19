import React, { useState } from "react";
//react pro sidebar components
import {
    ProSidebar,
    Menu,
    MenuItem,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
} from "react-pro-sidebar";
//icons from react icons
import { FaList, FaRegHeart } from "react-icons/fa";
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";
import { SiApacheairflow } from "react-icons/si";
import { GiAbstract050 } from "react-icons/gi";
//sidebar css from react-pro-sidebar module
import "react-pro-sidebar/dist/css/styles.css";
import { Link } from "react-router-dom";

const Navbar = ({menuCollapse, menuIconClick}) => {
   
    return (
        <>
            <div id="header">
                {/* collapsed props to change menu size using menucollapse state */}

                <ProSidebar collapsed={menuCollapse}>
                    <SidebarHeader>
                        <div className="logotext">
                            {/* Icon change using menucollapse state */}
                            <p>{menuCollapse ? <GiAbstract050 /> : <SiApacheairflow />}</p>
                        </div>
                        <div className="closemenu" onClick={menuIconClick}>
                            {/* changing menu collapse icon on click */}
                            {menuCollapse ? (
                                <FiArrowRightCircle />
                            ) : (
                                <FiArrowLeftCircle />
                            )}
                        </div>
                    </SidebarHeader>
                    <SidebarContent>
                        <Menu iconShape="square">
                            <MenuItem active={true} icon={<FiHome />}>
                                    Restaurant
                                <Link to="/"/>
                                
                            </MenuItem>
                            <MenuItem icon={<FaRegHeart />}>
                                <Link to="/" />
                                    Reserve
                            </MenuItem>


                            <MenuItem icon={<RiPencilLine />}>
                                    My Reservations
                                <Link to="/myReservations" />
                               
                            </MenuItem>
                            {/* 

                            <Link to="/#">
                                <MenuItem icon={<BiCog />}>Settings</MenuItem>
                            </Link> */}
                        </Menu>
                    </SidebarContent>
                    <SidebarFooter>
                        <Menu iconShape="square">
                            <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
                        </Menu>
                    </SidebarFooter>
                </ProSidebar>
            </div>
        </>
    );
}
export default Navbar
import React from 'react'
import './Header.css'
import {Link} from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Avatar } from '@material-ui/core';
import {Button} from "@material-ui/core";

function Header() {
    return (
        <div className="Header">
        <Link to='./home'><img className="Header__logo" src="/images/logo.jpg" alt=""/></Link>
        <div className="header__search">
        <input type="text" placeholder="Search for events,workshops..."/>
        <Link to='./search'><SearchIcon/></Link>
        </div>
        <div className="header__right">
        <Button><Link to='./Planner'><p>Become a Planner</p></Link></Button>
        <Link to='#'><Badge badgeContent={1} color="secondary"><NotificationsIcon/> </Badge></Link>
        <Link to='./login'><Avatar src="/images/IMG_2959.JPG"></Avatar></Link>


        </div>
    </div>
    )
}

export default Header

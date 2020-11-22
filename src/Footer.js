import React from 'react'
import './Footer.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import {Link} from "react-router-dom";

function Footer() {
    return (
      <div>
        <div className="footer">
        <div className="social">
            <h1>Follow Us</h1>
            <p> on our social platforms</p>
            <div className="sociallinks">
            <Link to='./home'><FacebookIcon/></Link>
            <Link to='./home'><InstagramIcon/></Link>
            <Link to='./home'><TwitterIcon/></Link>
           <Link to='./home'><YouTubeIcon/></Link>
        </div>
        </div>
        <div className="social">
        <h3>For latest updates enter your email.</h3>
            <input type="text" placeholder="xyz@gmail.com"/><Link to="#"><ArrowForwardIosIcon className="arrow"/></Link>
        </div>
        <div className="pages">
        <h1>Pages</h1>
        <div className="links">
        <div className="links1">
        <Link to='./home'><h3>Home</h3></Link>
        <h3>Events</h3>
        <Link to='./plans'><h3>Plans</h3></Link>
        <h3>Planners</h3><br/>
        </div>
        <div className="links2">
        <h3>Contact Us</h3>
        <h3>About Us</h3>
        <Link to='./login'><h3>Login</h3></Link>
        </div>
        </div>
        </div>
        </div>
        <div className="footer2">
        <p class="pt-4 text-muted">Copyright ©2020 DoyenClub.All rights reserved.Powered By Proshala.</p>
        </div>
        </div>
    )
}

export default Footer

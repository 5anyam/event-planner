import React from 'react'
import './Mobfooter.css'
import {Link} from "react-router-dom";
function Mobfooter() {
    return (
        <div className="mobfoot">
        <Link to="./home"><div className="home">
        <i class="fas fa-home"></i>
        <h6> Home </h6>
        </div></Link>
        <div className="trend">
        <i class="fas fa-fire"></i>
        <h6> Trending </h6>
        </div>
        <div className="new">
        <i class="fas fa-star"></i>
        <h6> New </h6>
        </div>
        <Link to="./login"><div className="login">
        <i class="fas fa-user"></i>
        <h6> Login </h6>
        </div> </Link>   
        </div>
    )
}

export default Mobfooter

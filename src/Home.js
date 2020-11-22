import React , {useEffect}from 'react';
import './Home.css';
import Header from './Header.js';
import Banner from './Banner.js';
import Card from './Card.js';
import Footer from './Footer.js';
import Mobfooter from './Mobfooter.js';
import Navbar from './Navbar.js';
import {Link} from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css"




function Home() {

    useEffect(() => {
        Aos.init ({duration:2000}) 
    }, [])

    return (
        <div className="Home">
            <Header/>
            <Navbar/>
            <Banner />
            <div className="cardinfo">
            <h3>Popular Events</h3>
            <Link to='./events'><p>See All</p></Link>
            </div>
            <div data-aos ="fade-left" className="cards">
            <Card src="/images/virtual.jpg"
            title="Virtual and Hybrid Events"
            description="Hybrid events are a fantastic way to keep improving our green footprints and we will help you to step ahead"
            price="ENQUIRE"/>

            <Card src="/images/concert.jpg"
            title="Concerts"
            description=" Looking for some spark and excitement so come on and Jam out with your calm out"
            price="ENQUIRE"/>

            <Card src="/images/special.jpg"
            title="Someone Special"
            description="Make someone feel for you,create a romantic place for you two."
            price="Enquire for price"/>
            </div>
            <div className="cardinfo">
            <h3>Nearby Events</h3>
            <Link to='./events'><p>See All</p></Link>
            </div>
            <div data-aos ="fade-left" className="cards">
            <Card src="/images/house.jpg"
            title="House Party"
            description="Home alone for a day or two? Organize a party at your place"
            price="1000 onwards"/>

            <Card src="/images/birthday.jpg"
            title="Birthday Party"
            description="Plan a birthday party for your loved ones."
            price="Enquire for price"/>

            <Card src="/images/edu.jpg"
            title="Educational"
            description="Educational events are fun.Plan an Education event in your institution."
            price="Enquire for price"/>
            </div>
            <div className="cardinfo">
            <h3>Latest Events</h3>
            <Link to='./events'><p>See All</p></Link>
            </div>
            <div data-aos ="fade-left" className="cards">
            <Card src="/images/house.jpg"
            title="House Party"
            description="Home alone for a day or two? Organize a party at your place"
            price="1000 onwards"/>

            <Card src="/images/birthday.jpg"
            title="Birthday Party"
            description="Plan a birthday party for your loved ones."
            price="Enquire for price"/>

            <Card src="/images/edu.jpg"
            title="Educational"
            description="Educational events are fun.Plan an Education event in your institution."
            price="Enquire for price"/>
            </div>
            <Footer/>
            <Mobfooter/>
        </div>
    )
}

export default Home

import React from 'react'
import Header from './Header.js'
import './Search.css'
import {Button} from "@material-ui/core";
import Searchresult from './Searchresult.js'

function Search() {
    return (
        <div>
            <Header/>

            <div className="Search__info">
            <h1>Search Results</h1>
            <Button>Virtual Events</Button>
            <Button>Hybrid Events</Button>
            <Button>Concerts</Button>
            <Button>Birthday Plans</Button>
            <Button>Private Party</Button>
            <Button>Marriage Plans</Button>
            <p>Showing Search Results..</p>

            <Searchresult 
            img="/images/concert.jpg"
            location="Rohini"
            title="Concerts"
            description=" Looking for some spark and excitement so come on and Jam out with your calm out"
            star="4.7"
            price="1000"
            ></Searchresult>
            </div>


        </div>
    )
}

export default Search

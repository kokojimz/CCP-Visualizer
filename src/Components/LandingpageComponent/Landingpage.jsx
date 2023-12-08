import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Explanation from './Explanation'
import Example from './Example'
import "../../index.css";
import Cards from './Cards'
import Footer from './Footer'

function Landingpage() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Explanation/>
            <Example />
            <Cards />
            <Footer />
        </div>
    )
}

export default Landingpage
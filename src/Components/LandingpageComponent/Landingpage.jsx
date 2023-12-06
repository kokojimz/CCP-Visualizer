import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Explanation from './Explanation'
import Example from './Example'
import "../../index.css";

function Landingpage() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Explanation/>
            <Example />
        </div>
    )
}

export default Landingpage
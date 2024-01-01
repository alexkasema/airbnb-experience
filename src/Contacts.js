
import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import Contact from './components/Contact'

import bike from "./images/mountain-bike.png"
import wedding from "./images/wedding.png"
import swimming from "./images/image1.png"


export default function App() {
    // <Hero />
    // <Card/>
    return (
        <div>
            <Navbar />
            <div className='contacts'>
                <Contact 
                    img={bike}
                    name="Mr. Whiskerson"
                    phone="(212) 555-1234"
                    email="mr.whiskaz@catnap.meow" 
                />
                <Contact 
                    img={wedding}
                    name="Fluffykins"
                    phone="(212) 555-2345"
                    email="fluff@me.com" 
                />
                <Contact 
                    img={swimming}
                    name="Felix"
                    phone="(212) 555-4567"
                    email="thecat@hotmail.com"
                />
                <Contact 
                    img={bike}
                    name="Pumpkin"
                    phone="(0800) CAT KING"
                    email="pumpkin@scrimba.com"
                />
            </div>
        </div>
    )
}

import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import data from './data'

export default function App() {
    const cardContent = data.map(content => {
        return (
            <Card
                key={content.id}
                content={content}
            />
        )
    })
    
    return (
        <div>
            <Navbar />
            <Hero />
            <div className='card--list'>
                {cardContent}
            </div>
        </div>
    )
}

import React from 'react'
import group from '../images/group.png'

export default function Hero(){
    return (
        <section className='main--hero'>
            <img className='hero--image' src={group} alt='group' />
            <h1 className='hero--title'>Online Experiences</h1>
            <p className='hero--text'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}
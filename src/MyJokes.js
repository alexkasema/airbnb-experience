
import React from "react"
import Joke from "./components/Joke"
import jokesData from "./jokesData"

export default function MyJokes(){
    const jokeElements = jokesData.map(joke => {
        return <Joke 
            setup={joke.setup}
            punchline={joke.punchline}
        />
    })
    return (
        <section>
             {jokeElements}
        </section>
    )
}

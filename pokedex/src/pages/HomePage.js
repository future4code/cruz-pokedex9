import React from 'react'
import PokemoCard from '../components/Card/PokemoCard'
import Header from '../components/Header/Header'

export default function HomePage() {
    return (
        <div>
            <Header title='Lista de pokémons'/>
            <h1>HomePage</h1>
            <PokemoCard/>
        </div>
    )
}

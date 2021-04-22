import React, { useEffect, useContext, useState } from 'react'
import Header from '../components/Header/Header'
import { GlobalStateContext } from "../global/GlobalStateContext"
import { useParams } from 'react-router-dom'
import DetailsComponent from '../components/PokemonDetails/DetailsComponent';

export default function PokemoDetailsPage() {
    const { states } = useContext(GlobalStateContext);
    const { id } = useParams()
    const [pokemon, setPokemon] = useState([])


    useEffect(() => {
        const pokemonDetails = states.staticListPokemons.filter((pokemon) => {
            return pokemon.id === id
        })
        setPokemon(pokemonDetails)
    }, [id, states.staticListPokemons])

    console.log(pokemon)

    return (
        <div>

            <Header title='Detalhes do Pokémon' hasSecondButton />
            {pokemon.length >0 &&  <DetailsComponent data={pokemon[0]}/>}
            
        </div>
    )
}

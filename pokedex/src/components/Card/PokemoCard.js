import React from 'react'
import { CardButton, ContainerButton, Main, PokemonImg, PokemonName } from './style'

export default function PokemoCard() {
    return (
        <Main>
            <PokemonImg src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/201.png" alt="pokemon"/>
            <PokemonName>Unown</PokemonName>
            <ContainerButton>
                <CardButton>Adicionar a pokédex</CardButton>
                <CardButton>Ver detalhes</CardButton>
            </ContainerButton>
        </Main>
    )
}

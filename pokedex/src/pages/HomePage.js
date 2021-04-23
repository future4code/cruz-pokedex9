import React, { useContext } from "react";
import PokemoCard from "../components/Card/PokemoCard";
import Header from "../components/Header/Header";
import { GlobalStateContext } from "../global/GlobalStateContext";

export default function HomePage() {
  const { states, setters, changes } = useContext(GlobalStateContext);

  return (
    <div>
      <Header title="Lista de pokémons" />
      {states.currentListPokemons.length > 0 &&
        states.currentListPokemons.map((pokemon) => {
          return (
            <PokemoCard
              key={pokemon.id}
              id={pokemon.id}
              name={pokemon.name}
              photo={pokemon.details.photos.front}
              textButton="Adicionar a pokédex"
              onClick={changes.addToPokedex}
            />
          );
        })}
      <h1>HomePage</h1>
    </div>
  );
}

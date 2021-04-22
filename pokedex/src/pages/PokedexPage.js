import React, { useContext } from "react";
import PokemoCard from "../components/Card/PokemoCard";
import Header from "../components/Header/Header";
import { GlobalStateContext } from "../global/GlobalStateContext";

export default function PokedexPage() {
  const { states, setters, changes } = useContext(GlobalStateContext);

  return (
    <div>
      <Header title="Pokédex" hasSecondButton closeButton />
      {states.pokedex.length > 0 &&
        states.pokedex.map((pokemon) => {
          return (
            <PokemoCard
              key={pokemon.id}
              id={pokemon.id}
              name={pokemon.name}
              photo={pokemon.details.photos.front}
              textButton='Remover da pokédex'
              onClick={changes.removeToPokedex}
            />
          );
        })}
      <h1>PokedexPage</h1>
    </div>
  );
}

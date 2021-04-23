import React, { useContext } from "react";
import PokemoCard from "../components/Card/PokemoCard";
import Container from "../components/Container/Container";
import Header from "../components/Header/Header";
import { GlobalStateContext } from "../global/GlobalStateContext";

export default function PokedexPage() {
  const { states,  changes } = useContext(GlobalStateContext);

  return (
    <div>
      <Header goTohome title="Pokédex" hasSecondButton closeButton />
      <Container>
        {states.pokedex.length > 0 &&
          states.pokedex.map((pokemon) => {
            return (
              <PokemoCard
                key={pokemon.id}
                id={pokemon.id}
                name={pokemon.name}
                photo={pokemon.details.photos.front}
                textButton="Remover da pokédex"
                onClick={changes.removeToPokedex}
              />
            );
          })}
      </Container>
    </div>
  );
}

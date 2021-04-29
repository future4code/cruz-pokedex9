import { faBolt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import PokemoCard from "../components/Card/PokemoCard";
import Container from "../components/Container/Container";
import Header from "../components/Header/Header";
import { theme } from "../constants/paletteColor";
import { GlobalStateContext } from "../global/GlobalStateContext";

export default function HomePage() {
  const { states, changes } = useContext(GlobalStateContext);

  return (
    <div>
      <Header title="Lista de pokémons" />

      <Container>
        {states.currentListPokemons.length === 0 && (
          <FontAwesomeIcon icon={faBolt} spin color={theme.yellow} size="10x" />
        )}

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
      </Container>
    </div>
  );
}

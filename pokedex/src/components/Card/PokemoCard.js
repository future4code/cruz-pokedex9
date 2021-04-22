import React from "react";
import {useHistory} from "react-router-dom"
import { goToPokemonDetailPage } from "../../Router/cordinators";

import {
  CardButton,
  ContainerButton,
  Main,
  PokemonImg,
  PokemonName,
} from "./style";

export default function PokemoCard({ id, name, photo, textButton, onClick }) {
    const history = useHistory()

  return (
    <Main>
      <PokemonImg src={photo} alt={name} />
      <PokemonName>{name}</PokemonName>
      <ContainerButton>
        <CardButton onClick={() => onClick(id)}>
          {textButton}
        </CardButton>
        <CardButton onClick={() => goToPokemonDetailPage(history, id)}>Ver detalhes</CardButton>
      </ContainerButton>
    </Main>
  );
}

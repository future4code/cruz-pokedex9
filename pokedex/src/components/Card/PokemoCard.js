import React from "react";
import {
  CardButton,
  ContainerButton,
  Main,
  PokemonImg,
  PokemonName,
} from "./style";

export default function PokemoCard({ id, name, photo, textButton, onClick }) {

  return (
    <Main>
      <PokemonImg src={photo} alt={name} />
      <PokemonName>{name}</PokemonName>
      <ContainerButton>
        <CardButton onClick={() => onClick(id)}>
          {textButton}
        </CardButton>
        <CardButton>Ver detalhes</CardButton>
      </ContainerButton>
    </Main>
  );
}

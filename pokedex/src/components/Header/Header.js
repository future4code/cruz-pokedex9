import React from "react";
import { useHistory } from "react-router-dom";
import { Main, Title, Nav, NavItem } from "./style";

import { goToPokedexPage, goBack } from "../../Router/cordinators";

export default function Header({ hasSecondButton, closeButton, title }) {
  const history = useHistory();

  return (
    <Main>
      <Title>{title}</Title>
      <Nav>
        {!closeButton &&
            <NavItem onClick={() => goToPokedexPage(history)}>
            Ir para pokedex
            </NavItem>
        }

        {hasSecondButton && (
          <NavItem onClick={() => goBack(history)}>Voltar</NavItem>
        )}

      </Nav>
    </Main>
  );
}

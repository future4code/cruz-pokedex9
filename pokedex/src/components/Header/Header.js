import React from "react";
import { useHistory } from "react-router-dom";
import { Main, Title, Nav, NavItem } from "./style";

import {
  goToPokedexPage,
  goBack,
  goToHomePage,
} from "../../Router/cordinators";

export default function Header({
  goTohome,
  hasSecondButton,
  closeButton,
  title,
}) {
  const history = useHistory();

  return (
    <Main>
      <Title>{title}</Title>
      <Nav>
        {!closeButton && (
          <NavItem onClick={() => goToPokedexPage(history)}>
            Ir para pokedex
          </NavItem>
        )}

        {hasSecondButton && (
          <NavItem
            onClick={() => {
              return goTohome ? goToHomePage(history) : goBack(history);
            }}
          >
            Voltar
          </NavItem>
        )}
      </Nav>
    </Main>
  );
}

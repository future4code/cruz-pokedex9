import React, { useState, useEffect } from "react";
import { getPokemonList } from "../services/getPokemonList";

import { GlobalStateContext } from "./GlobalStateContext";

export const GlobalState = ({ children }) => {
  const [currentListPokemons, setCurrentListPokemon] = useState([]);
  const [pokedex, setPokedex] = useState([]);
  const [staticListPokemons, setStaticListPokemon] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await getPokemonList();
      setCurrentListPokemon(result);
      setStaticListPokemon(result);
    })();
  }, []);

  const addToPokedex = (id) => {
    const pokemon = currentListPokemons.filter((item) => {
      return item.id === id;
    });
    setPokedex([...pokedex, ...pokemon].sort((item1, item2) => item1.id - item2.id ));
    removePokemon(id, 'currentList')
  };

  const removeToPokedex = (id) => {
    const pokemon = pokedex.filter((item) => {
      return item.id === id;
    });
    setCurrentListPokemon([...currentListPokemons, ...pokemon].sort((item1, item2) => item1.id - item2.id ));
    removePokemon(id, 'pokedex')
  };

  const removePokemon = (id, pageFlag) => {
    if (pageFlag === "currentList") {
      const listPokemon = currentListPokemons.filter((item) => {
        return item.id !== id;
      });
      setCurrentListPokemon([...listPokemon]);
    } else if (pageFlag === "pokedex") {
      const listPokedex = pokedex.filter((item) => {
        return item.id !== id;
      });
      setPokedex([...listPokedex]);
    }
  };

  const states = { currentListPokemons, pokedex, staticListPokemons };
  const setters = { setCurrentListPokemon, setPokedex, setStaticListPokemon };
  const changes = { addToPokedex, removeToPokedex };

  return (
    <GlobalStateContext.Provider value={{ states, setters, changes }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;

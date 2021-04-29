import { BrowserRouter, Route, Switch } from "react-router-dom"
import HomePage from "../pages/HomePage"
import NotFoundPage from "../pages/NotFoundPage"
import PokedexPage from "../pages/PokedexPage"
import PokemoDetailsPage from "../pages/PokemoDetailsPage"

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>

        <Route exact path="/pokemon/details/:id">
          <PokemoDetailsPage />
        </Route>

        <Route exact path="/pokedex">
          <PokedexPage />
        </Route>

        <Route>
          <NotFoundPage />
        </Route>
        
      </Switch>
    </BrowserRouter>
  )
}

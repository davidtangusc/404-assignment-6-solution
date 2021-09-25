import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PokemonsTable from "./PokemonsTable";
import PokemonDetails from "./PokemonDetails";

export default class App extends React.Component {
  render() {
    return (
      <div className="container mt-3">
        <Router>
          <Switch>
            <Route path="/pokemons/:name" component={PokemonDetails} />
            <Route path="/">
              <PokemonsTable />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

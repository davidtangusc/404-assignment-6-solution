import React from "react";
import { Link } from "react-router-dom";

export default class PokemonsTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemons: [],
    };
  }

  componentDidMount() {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=100&offset=200")
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        this.setState({
          pokemons: json.results,
        });
      });
  }

  render() {
    return (
      <>
        <h1>Pokemons</h1>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {this.state.pokemons.map((pokemon) => {
              return (
                <tr key={pokemon.url}>
                  <td>{pokemon.name}</td>
                  <td>
                    <Link to={`/pokemons/${pokemon.name}`}>Details</Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
  }
}

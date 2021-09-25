import React from "react";
import { Link } from "react-router-dom";

export default class PokemonDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemonDetails: {
        moves: [],
        abilities: [],
        sprites: {},
      },
    };
  }

  componentDidMount() {
    const name = this.props.match.params.name;

    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((response) => {
        return response.json();
      })
      .then((pokemonDetails) => {
        this.setState({ pokemonDetails });
      });
  }

  render() {
    return (
      <>
        <nav className="mb-3">
          <Link to="/">Back to list of Pokemons</Link>
        </nav>

        <h1>{this.state.pokemonDetails.name}</h1>

        <div>
          <img
            src={this.state.pokemonDetails.sprites.front_default}
            alt="front"
          />
          <img
            src={this.state.pokemonDetails.sprites.back_default}
            alt="back"
          />
        </div>

        <p>
          {this.state.pokemonDetails.name} has a weight of{" "}
          {this.state.pokemonDetails.weight} and a height of{" "}
          {this.state.pokemonDetails.height}.
        </p>

        <div>
          <h3>Moves</h3>
          <p>
            {this.state.pokemonDetails.moves
              .map((move) => {
                return move.move.name;
              })
              .join(", ")}
          </p>
        </div>

        <div>
          <h3>Abilities</h3>
          <p>
            {this.state.pokemonDetails.abilities
              .map((ability) => {
                return ability.ability.name;
              })
              .join(", ")}
          </p>
        </div>
      </>
    );
  }
}

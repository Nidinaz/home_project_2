import "./App.css";
import axios from "axios";
import { useState } from "react";

const App = () => {
  const [response, setResponse] = useState();

  //return the button and its answer
  return (
    <div>
      <button
        onClick={() => {
          setResponse(<Poke key={Math.random()} pokemon={"1"}></Poke>);
        }}
      >
        Pokemon
      </button>
      <button
        onClick={() => {
          setResponse(<Poke key={Math.random()} pokemon={"2"}></Poke>);
        }}
      >
        Pokemon 2
      </button>

      {response}
    </div>
  );
};

const Poke = (props) => {
  const [Pokemon, setPokemon] = useState();
  if (!Pokemon) {
    axios
      .get("https://pokeapi.co/api/v2/pokedex/" + props.pokemon)
      .then((response) => {

        //desturcting response into data it is an JS feature
        const {data} = response

        // pokemonJson
        /**
         * 
                          {
                              "entry_number": 1,
                              "pokemon_species": {
                                  "name": "bulbasaur",
                                  "url": "https://pokeapi.co/api/v2/pokemon-species/1/"
                              }
                          },
         * */
        const pokemon = data.pokemon_entries.map((pokemonJson) => <div>{pokemonJson.pokemon_species.name}</div>)

        setPokemon(
          <div>
            {pokemon}
          </div>
        );
      })
      .catch((e) => {
        console.log("Error: " + e);
      });
  }
  return <div>{Pokemon}</div>;
};

export default App;

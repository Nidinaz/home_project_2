import "./App.css";
import axios from "axios";
import { useState } from "react";

const App = () => {
  const [response, setResponse] = useState();

  //return the button and its answer
  return (
    <div>
      {response}
      <button
        onClick={() => {
          //setResponse from useState
          setResponse(<Poke pokemon={'name'}></Poke>);
        }}
      >
        Pokemon
      </button>
    </div>
  );
};

// const Header = (props) => {
//   return (
//     <div>
//       <div>{props.pokemon.pokemon.name}</div>
//       <img src={props.pokemon.pokemon.url} alt={props.poke.pokemon.name} />
//     </div>
//   );
// };

//object of Poke using prop
//way depends on the file above
//the img cointains an url json link, warning about cross-origin read Blokking in console

// const Pokemons = (props) => {
//   const [Pokemons, setPokemons] = useStat();
//   if (!Pokemons) {
//     axios
//       .get("https://pokeapi.co/api/v2/pokedex/2"+props.name)
//       .then((response) => {
//         const pokemon = response.pokemon_entries.pokemon_species.name
//       })
//       setPokemon(
//         <div>
//           {pokemon}
//         </div>
//       )
//   })
// }


const Poke = (props) => {
  const [Pokemon, setPokemon] = useState();
  if (!Pokemon) {
    axios
      .get("https://pokeapi.co/api/v2/pokedex/2"+props.name)
      .then((response) => {
        console.log(response)
        console.log(response.);
        const pokemon = response.data

        const types = pokemon.types.map((type) => {
          return <div>{type.type.name}</div>;
        });
        setPokemon(<div>
          {pokemon.name}
          {types}
        </div>);
      })
      .catch((e) => {
        console.log("Error: " + e);
      });
  }
  return <div>{Pokemon}</div>;
};

export default App;

// const pokeJson = require("./Poke.json");

// const App = () => {
//   const pk = pokeJson.pokemon.map((poke) => {
//     return <Poke poke={poke}></Poke>;
//   });
//   return <div>{pk}</div>;
// }

// //object of Poke using prop
// //way depends on the file above
// //the img cointains an url json link, warning about cross-origin read Blokking in console
// const Poke = (props) => {
//   return (
//   <div>
//   <div>{props.poke.pokemon.name}</div>
//   <img src={props.poke.pokemon.url} alt={props.poke.pokemon.name}/>
//   </div>
//   )
// };

// export default App;

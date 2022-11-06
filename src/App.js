import "./App.css";

const pokeJson = require("./Poke.json");

function App() {
  const pk = pokeJson.pokemon.map((poke) => {
    return <Poke poke={poke}></Poke>;
  });
  return <div>{pk}</div>;
}

//object of Poke using prop
//way depends on the file above
const Poke = (props) => {
  return <div>{props.poke.pokemon.name}</div>;
};

export default App;

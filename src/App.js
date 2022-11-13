import "./App.css";
import axios from "axios";
import { useState } from "react";

const App = () => {
  // const [response, setResponse] = useState();
  //variable pokemon contains opgeslagen data ; setPokemon is een functie om de state aan te passen

  // const App = () => {

  //   const [pokemon, setPokemon] = useState("ditto");
  
  //   const pokeButtons = ["ditto", "pidgey", "cubone"]
  
  //   const mappedPokemonButtons = pokeButtons.map((poke) => 
  // { return <button onClick={() => 
  //{ return setPokemon(poke)}} >{poke}</button>})
    
  // }
  const [pokemon, setPokemon] = useState("ditto");
  

  const pokeButtons = ["ditto", "pidgey", "cubone"]

  //return the button and its answer
  //rendering in return and in de state sla je data op...
    //hoe werken de twee pijlen? Er lijkt geen returnfunctie of iets dergelijks nodig te zijn.
  //wat is het concrete verschil tussen gerenderede en statische data?  --- waar ligt de grens en hoe identificeer ik deze?
  //met pijl = returnexpression -- return inlcuded


  //.map heeft 1 argument; map krijgt 1 functie; map heeft 1 exprssion (achter de pijs)-- haakjes volgen
  //fucntie die een butten returnd

  // let testfunctie = (test) => "hoi" 

  return (
    <div>
      {pokeButtons.map((poke) => <button onClick={() => setPokemon(poke)} >{poke}</button>)}
      <button
        onClick={() => {
          // setResponse(<Poke key={1} pokemon={"ditto"}></Poke>);
          setPokemon("ditto")
        }}
      >
        Pokemon 1
      </button>
      <button
        onClick={() => {
          // setResponse(<Poke key={2} pokemon={"pidgey"}></Poke>);
          setPokemon("pidgey")
        }}
      >
        Pokemon 2
      </button>


      {/* //de variabelnamen zijn vaak hetzelfde, waardoor ik de referentie en de logica minder goed na kan trekken
//verwijst de eerste pokemon verwijst naar de const [pokemon, setPokemon] = useState("ditto") ? maar wat betekend {pokemon? */}
  {/* als (if) pokemon een waarde heeft, geef een Pokeobject weer, anders geef niets weer */}
  {/* de eerste, tweede, vierde pokemon komen van useState; de deerde is de naam die je geeft aan de props van de pokeopbject */}
  
      {pokemon ? <Poke key={pokemon} pokemon={pokemon} /> : ""}
    </div>
  );
};



const Poke = (props) => {
  const [Pokemon, setPokemon] = useState();

  if (!Pokemon) {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/" + props.pokemon)
      .then((response) => {
        //desturcting response into data it is an JS feature
        //deconstructing is een andere manier om elementen uit een object te halen
        const { data } = response;
        //in plaats van let data = response.data --- kan alleen bij objects niet zo maar bij arrays

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
        const pokemon = data.abilities.map((ability) => {
          return (
            <div>
              <div>{ability.ability.name}</div>
            </div>
          );
        });

        // const pokemonImage = data.sprites.other['official-artwork'].front_default

        // const pokemon = data.pokemon_entries.map((pokemonJson) => <div>{pokemonJson.pokemon_species.name}</div>)

        setPokemon(data)
        setPokemon(
          <div>
            <div>{data.name}</div>
            <div>{pokemon}</div>
            <div>
              <img src={data.sprites.other['official-artwork'].front_default} alt='pictureofpokemon'/>
            </div>
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

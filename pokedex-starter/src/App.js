import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Axios from "axios";
function App() {
  const [pokemon, updatePokemon] = useState({})
  const [pokemonName, updatePokemonName] = useState('pikachu')
  const [inputText, updateInputText] = useState('')
  useEffect(() => {
    const callApi = async () => {
      const res = await Axios(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      updatePokemon(res.data)
    }
    callApi()
  }, [pokemonName])
  return (
    <>
      <header className="bg-dark d-flex justify-content-between px-5">
        <nav className="navbar navbar-dark">
          <div className="nav">
            <a className="navbar-brand d-flex align-items-center" href="#">
              <img
                src="https://www.freeiconspng.com/uploads/pokeball-transparent-png-2.png"
                width="55"
                height="55"
                className="d-inline-block align-top m-2 d-inline"
                alt="Pokéball"
              />
              <span className="navbar-text text-white font-weight-bold">
                Pokédex
              </span>
              <input type="text" onChange={e => updateInputText(e.target.value)}/>
              <button onClick={() => updatePokemonName(inputText)}>search</button>
            </a>
          </div>
        </nav>
      </header>
      <main className="d-flex justify-content-center align-items-center">
        <section
          id="results"
          className="d-flex justify-content-center flex-wrap col-10"
        >
          <h1>{pokemon.name}</h1>
          <img src={pokemon.sprites && pokemon.sprites.front_default} />
        </section>
      </main>
    </>
  )
}
export default App;
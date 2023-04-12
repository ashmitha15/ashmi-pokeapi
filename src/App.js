import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import CardList from './CardList';
import pikachu1  from './pikachu1.jpg';

import PokemonDetails from './PokemonDetails';
import ParticlesBg from 'particles-bg';

const App = () => {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setPokemon(data);
      });
  }, []);

  return (
    <div>
    <ParticlesBg type="cobWeb" color='#FFFFFF' num={150} bg={true} />
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
            <div className='logo-div'>
             
             <h1> <img id='logo' src= {pikachu1} alt='pokemon_logo'/>Welcome to the world of Pokemons!!!</h1>
             </div>
              
                <CardList pokemon={pokemon} />
             
            </>
          }
        />
        <Route path="/pokemon/:id" element={<PokemonDetails />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;

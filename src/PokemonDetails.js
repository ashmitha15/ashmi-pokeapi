import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {Link} from 'react-router-dom';

const  PokemonDetails = () => {
  const [pokemonDetails, setPokemonDetails] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((response) =>response.json())
    .then((data) => {setPokemonDetails(data)})}, [id]);

  if (!pokemonDetails) {
    return <div> Loading Pokemon Details!!!</div>;
  }

  return (
    <div className='container-pok'>
    <div className='container-pokemon'>
      
      <p><img id="poke-img" src={pokemonDetails.sprites.front_default} alt={pokemonDetails.name} /></p>
      <h3> {pokemonDetails.name} </h3>
      <h1> Weight: {pokemonDetails.weight} </h1>
      <p> Abilities: </p>
      <div className='moves'>
      <ul>
        {pokemonDetails.abilities.map((ability) => {
          return <li key={ability.ability.name}> {ability.ability.name} </li>;
        })}
      </ul>
      </div>

      <p> Moves: </p>
      <div className='moves'> 
      <ul>
       
        {pokemonDetails.moves.map((move) => {
          return <li key={move.move.name}> {move.move.name} </li>;
        })}
        
      </ul>
      </div>
      <p><button ><Link to={{ pathname: `/`}}  style={{color: 'black'}}> Back </Link></button></p>

    </div>
    </div>
  );
}

export default PokemonDetails;

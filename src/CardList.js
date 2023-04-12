import React from 'react';
import Card from './Card';

const CardList = ({pokemon}) => {
    console.log(pokemon)
    if (! pokemon || ! pokemon.results){
        return <div> <h2> Loading... </h2></div>
    } 

    const  cardArray = pokemon.results.map( (poke,index) => {
        console.log(index)
        return <Card key = {index} id = {index + 1} pkname= {poke.name} url = {poke.url} />
        });

        return(
            <div>
                {cardArray}
            </div>
        );
    }

    export default CardList;
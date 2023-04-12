import React from 'react';
import {Link} from 'react-router-dom';

const Card = ({id,pkname,url}) => {
    return(
        
        <div className='container-card'>
           <p> <img alt='pokemon' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png?`} /></p>
            <div >
           <h3> { pkname } </h3>
           <h4> { url } </h4>
           <p><button ><Link to={{ pathname: `/pokemon/${id}`}}  style={{color: 'black'}}> View me </Link></button></p>
           </div>
        </div>
        

    );
}

export default Card;
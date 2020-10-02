import React from 'react';
import './Cardsr.css';

function Cardsr ({ cardsr }) {
    return (
        <div className='indicard '>
            
            <img src={cardsr.Poster} alt='card'/>
            <h3>{cardsr.Title}</h3>
            
         
        </div>
    )
}
export default Cardsr;
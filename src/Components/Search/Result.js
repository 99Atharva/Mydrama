import React from 'react';
import Cardsr from './Cardsr';
import './Result.css';


function Result ({result}){
    return (
        <div className='Rcards'>
               {result.map(cardsr=>(
                <Cardsr key={cardsr.imdbID} cardsr={cardsr} />
            )) }
        </div>
         
        
    )
} 
export default Result; 
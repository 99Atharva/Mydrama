import React from 'react';
import './Search.css';

const Search = ( {handleInput , search})=> {
  return (
      <div className='pa5 '>
                      
            <input className='box pa3 tc pr4 pl4 ba b--silver bw2 br3' type='text'
             placeholder='Tell me your fav Series'
             onChange={handleInput}
             onKeyPress={search}
             />
        
      </div>
   
  );
}
export default Search; 
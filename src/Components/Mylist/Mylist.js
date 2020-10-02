import React from 'react';
import Cards from './Cards';
import './Mylist.css';

const Mylist = ({List}) => {

    return(
        <div className='nxt tc '> 
          <div className='tc pt2 f3 hea'><h1>My Top 10</h1></div>
          <div>
          { 
        
        List.map((series,i)=>{
        return (  
            <Cards key={i} id={List[i].id} Title={List[i].Title}
           Rate={List[i].Rate}
           Year={List[i].Year} Des={List[i].Des} 
           Poster={List[i].Poster} />
           ); 
         })
        }    
          </div>
       
        </div>
  );
}

export default Mylist;
 

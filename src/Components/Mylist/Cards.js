import React from 'react';
import './Cards.css'


const Cards = (props) => {
    return(
        
   <div className='card dib pa2 w-25 flex-box grow '>
       <article className="br2 ba dark-gray b--black-10 bg-white ma2 mv4 mw5 center " >
  <img src={props.Poster} className="im db br2
   br--top" alt=" 
   of a kitten looking menacing." />
    <div className=" tc">
    <h2 className="f5 mv0">{props.Year}</h2>
      </div>
  <div className="pa2 ph3-ns pb3-ns">
    <div className="dt w-100 mt1">
      <div className="dtc">
        <h1 className="f5 f4-ns mv0">{props.Title}</h1>
      </div>
    </div>
    <p className="f6 lh-copy measure mt2 mid-gray">
      {props.Des}
    </p>
    <div className="dtc tr">
    <h2 className="f5 mv0">{props.Rate}</h2>
    <h5 className='flex red'>IDBM</h5>
      </div>
  </div>
</article>
   </div>
        
 
    );
}

export default Cards;

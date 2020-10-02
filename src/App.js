import React, {useState} from 'react';
import Footer from './Components/Footer/Footer';
import './App.css';
import 'tachyons';
import Head from './Components/Head/Head';
import Mylist from './Components/Mylist/Mylist';
import {List} from './Components/Mylist/List';
import Search from './Components/Search/Search';
import Result from './Components/Search/Result';
import Axios from 'axios';

 

function App() {
  const [state, setState] = useState({
    s:"",
    result: [],
    selected: {},
  })
  const apiurl="http://www.omdbapi.com/?apikey=27bdd901&s="
 
  const search = (e) => {
    if (e.key === "Enter") {
      Axios(apiurl+state.s)
      .then(({ data }) => {
        let result = data.Search;

        setState(prevState => {
          return { ...prevState, result: result }
        })
      });
      
    }
  }
  
  const handleInput = (e)=> {
    let s=e.target.value;
    setState(prevState =>{
      return { ...prevState, s:s }
    });
    
  }

  return (
    <div className="App tc">
     <Head />
     <Mylist List={List} />
     <main className='tc'>
     <h1 className='head pt5'>Search your series</h1>
       <Search handleInput={handleInput} search={search} />
    
     <Result result={state.result} />
     </main>

     <Footer />
    </div>
  );
}
 
export default App;
 
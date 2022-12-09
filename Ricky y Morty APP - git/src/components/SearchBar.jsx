import styled from './searchBar.module.css'
import { useState } from 'react';


export default function SearchBar(props) {
   
   const [characters, setCharacters] = useState(
      ''
   )
   const pepe = (e)=>{setCharacters(e.target.value)}
   return (
      <div className={styled.divSearchBar}>
         <input onChange={pepe} type='search' className={styled.inputSearch} />
      <button onClick={()=> props.onSearch(characters)}>Agregar</button>
      </div>
   );
}

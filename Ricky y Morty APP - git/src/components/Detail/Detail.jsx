import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import styled from './Detail.module.css'



export default function Detail() {
    const { detailId } = useParams()

    const [character, setCharacter] = useState([])

    useEffect(() => {
      fetch(`https://rickandmortyapi.com/api/character/${detailId}`)  
         .then((response) => response.json())
         .then((char) => {
            if (char.name) {
               setCharacter(char);
            } else {
               window.alert('No hay personajes con ese ID');
            }
         })
         .catch((err) => {
            window.alert('No hay personajes con ese ID');
         });
      return setCharacter({});
   }, [detailId]);

  return (
    <div>
      {character ?(
        <div className={styled.Detail}> 
          <div className={styled.DetailInfo}>
            <h2>
              Nombre: {character.name}
            </h2>
            <h5>Status: {character.status}</h5>
            <h5>Especie: {character.species}</h5>
            <h5>Genero: {character.gender}</h5>
            <h5>Origen: {character.origin?.name}</h5>
          </div>
          <div>
          <img className={styled.DetailImg}
            src={character.image} 
            alt={character.name}
             />
          </div>
        </div>
          
          ):('cargando')}
          </div>
    ) }

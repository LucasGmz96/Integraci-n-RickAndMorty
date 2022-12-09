import styled from './cards.module.css'
import Card from './Card';

export default function Cards(props) {
   const { characters } = props;
   return (
   <div className = {styled.divCards}>
      
      {characters.map((char) =>( 
      <Card 
         id = {char.id}
         key = {char.name}
         name={char.name}
         species={char.species}
         gender={char.gender}
         image={char.image}
         onClose={props.onClose}
      />
      ))}
   </div>
   )
   }

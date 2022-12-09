import styled from './card.module.css'
import {Link} from 'react-router-dom'
import {fav, unFav} from "./Accions/Accions"
import { connect } from "react-redux";
import { useEffect,useState } from 'react';

export function Card(props) {

   const [isFav, setIsFav] = useState(false);

   const handleFavorite= ()=>{
      if(isFav === true){
         setIsFav(false);
         props.unFav(props.id);
      }else {
         setIsFav(true);
         props.fav(props);
      }
   }

   useEffect(() => {
      props.myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [props.id]);

   return (

      <div>
         {
   isFav ? (
      <button onClick={handleFavorite}>❤️</button>
   ) : (
      <button onClick={handleFavorite}>🤍</button>
   )
}
      <div className={styled.cardDiv}>
         <button className={styled.cardButton} onClick= {()=>props.onClose(props.id)}>X</button>

         <Link to={`/detail/${props.id}`}>
         <h2 className={styled.h2}>{props.name}</h2>
         </Link>

         <h2 className={styled.h2}>{props.species}</h2>
         <h2 className={styled.h2}>{props.gender}</h2>
         <img className={styled.cardimg} src={props.image} alt={props.name} />
      </div>
   </div>
   );

}
export function mapStateToProps(state){
   return{
      myFavorites: state.myFavorites,
   }
}
export function mapDispatchToProps(dispatch){
   return{
      fav: function(character){
        dispatch(fav(character))
      },
      unFav: function(id){
        dispatch(unFav(id))
      },
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)

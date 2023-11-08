
/* eslint-disable react/prop-types */

import { useGlobalContext } from "../context/context";


export default function FavouritePage() {
  const {liked} = useGlobalContext()

  return (
     <div 
    className="liked_container">
   
      <h2>liked</h2>
      {liked.map((item) =>{
        const{id,title,image,price} = item ;
        return (
           <div key={id}>
           <img src={image} alt="" />
           <h2>{title}</h2>
           <p>{price}</p>
           </div>
        )
      })}


    </div>
  )
}


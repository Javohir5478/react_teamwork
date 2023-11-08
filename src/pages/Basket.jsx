/* eslint-disable react/prop-types */

import { useGlobalContext } from "../context/context";

export default function Basket() {

  const {basket} =useGlobalContext();

  return (
    <div 
    className="basket_container">
   
      <h2>basket</h2>
      {basket.map((item) =>{
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
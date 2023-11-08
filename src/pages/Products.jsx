// import NewCard from "../components/card/NewCard"
import { useGlobalContext } from "../context/context"

export default function Products() {

    const {data,handleBasket,handleLiked} = useGlobalContext();
  return (
    <div>

      {data.map((item) => {
        return <div key={item.id}>
            <img src={item.images} alt="" />  
             
               <h1>{item.title}</h1>
              <h2>{item.price}</h2>
               <button className="btn_add" onClick={() => handleBasket(item.id)}>basket</button>
            <button className="btn_add" onClick={() => handleLiked(item.id)}>liked</button>
        </div>
      })}     

    </div>
  )
}


export default function NewCard(images,title,id,price) {
  return (
   <div className="Newcard_container">

    <img src={images} alt="" />
    <h2>{id}</h2>
    <h1>{title}</h1>
    <p>{price}</p>
   </div>
     
  )
}

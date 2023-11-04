import { useParams } from "react-router-dom"
import NewCard from "../components/card/NewCard";
import { useGlobalContext } from "../context/context";

export default function SinglePage() {

  const {data} = useGlobalContext()
    const {id}= useParams();
    const SingleItem = data.find((item) => item.id == id);


  return <NewCard {...SingleItem}/>
}

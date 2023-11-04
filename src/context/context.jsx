/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */



import { useEffect, useState } from "react";
import { createContext, useContext } from "react";
import Loading from "../components/loading/Loading";
import getStore from "../getStore/getStore";



const AppContext =createContext();
const url ="https://api.escuelajs.co/api/v1/products";




const AppProvider =( {children}) =>{


  const [loading ,setLoading] = useState(false);
  const [liked,setLiked] = useState(getStore("liked"));
  const [basket,setBasket] = useState(getStore("basket"));
  const [data, setData] = useState([]);
  const [list,setList] = useState(getStore("list"))


  if (loading) {
    return <Loading/>
  }

  const handleBasket =(id) => {
  const newItem = data.find((item) => item.id===id);
  setBasket([...basket,newItem]);
};

  const handleLiked =(id) => {
  const newItem = data.find((item) => item.id===id);
  setLiked([...liked,newItem]);
};




    const getData = async () => {
    setLoading (true);

    try{
    const res= await fetch(url);
    const data = await res.json();
    setData(data);
    setList(data);
    }
    catch(error) {
        console.log(error);
        setLoading(false);
    }
};
useEffect(() =>{
         getData(url);

           localStorage.setItem("liked", JSON.stringify(liked))
           localStorage.setItem("basket", JSON.stringify(basket))
           localStorage.setItem("list", JSON.stringify(list))

           


        },[liked,basket,list]);


// if (loading) {
//     return <Loading/>;
// }


    


return(
        <AppContext.Provider  value={{
            data,
            setData,
            liked,
            setLiked,
            basket,
            setBasket,
            handleBasket,
            handleLiked,


        }} >
        
            {children}
        </AppContext.Provider>)
}



export const useGlobalContext = () =>{
    return useContext(AppContext);
}

export {AppContext,AppProvider};
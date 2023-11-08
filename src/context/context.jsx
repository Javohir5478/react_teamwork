/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { createContext, useContext, useState } from "react";
import request from "../server";



const AppContext =createContext();

const AppProvider =( {children}) =>{

    const [loading ,setLoading] = useState(false);
    const [data , setData] = useState([]);



    const getData = async () => {
    setLoading (true);

    try{
    const resp = await fetch(request);
    const data = await resp.json();
    setData(data);
    console.log(data);
    }
    catch(error) {
        console.log(error);
        setLoading(false);
    }
};
useEffect(() =>{
         getData(request);
},[]);





return(
        <AppContext.Provider value={{
            data,
            setData,
            loading,
            setLoading

        }}>
            {children}
        </AppContext.Provider>)
}



export const useGlobalContext = () =>{
    return useContext(AppContext);
}

export {AppContext,AppProvider};
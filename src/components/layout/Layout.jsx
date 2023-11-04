import { Fragment } from "react";
import Header from "../header/Header";
import {Outlet} from 'react-router-dom';
import Footer from "../footer/Footer";

export  function Layout() {
  return (
    <Fragment>
    
    <Header/>
    <main>
      <Outlet/>
    </main>
    <Footer/>
        
    </Fragment>
  )
}
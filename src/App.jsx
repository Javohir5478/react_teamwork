
<<<<<<< HEAD
import { Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'



import { Layout } from './components/layout/Layout.jsx';
import Basket from './pages/Basket';
import HomePage from './pages/HomePage';
import Liked from './pages/Liked';
import Products from './pages/Products.jsx';
import SinglePage from './pages/SinglePage.jsx';






function App() {

  return  <Fragment>
    <h1>salom</h1>
    <Products/>
  
<Routes>
  <Route>

   <Route path="/" element={<Layout/>}>

       <Route path='' element={<HomePage/>}/>
       <Route path='/products' element={<Products/>}/>
       <Route path='/single/:id' element={<SinglePage/>}/>
       <Route path='/liked' element={<Liked/>}/>
       <Route path='/basket' element={<Basket/>}/>




   </Route>

  </Route>
</Routes>

  </Fragment>
=======
import { Route, Routes } from 'react-router-dom'
import './App.css'
import AllCategoris from './pages/categories/AllCategoris'
import Moloko from './pages/categories/Moloko'

function App() {

  return (
    <>
     <Routes>
        <Route>
          
          <Route path="/" element={ <AllCategoris/>}/>
          <Route path="/moloko" element={<Moloko/>}/>
          
        </Route>
     </Routes>
    </>
  )
>>>>>>> origin/Doniyor
}

export default App;

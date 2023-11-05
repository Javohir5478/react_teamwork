
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
}

export default App

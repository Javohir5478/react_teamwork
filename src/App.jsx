
import { Route, Routes } from 'react-router-dom'
import './App.css'
import AllCategoris from './pages/categories/AllCategoris'
import Moloko from './pages/categories/Moloko'
import Xleb from './pages/categories/xleb'
import Fruct from './pages/categories/fruct'
import Zamarojinnie from './pages/categories/zamarojinnie'
import Napitki from './pages/categories/napitki'
import Konditerski from './pages/categories/Konditerski'
import Cofe from './pages/categories/Cofe'
import Bakaleya from './pages/categories/Bakaleya'
import Zdarovie from './pages/categories/Zdarovie'

import Detski from './pages/categories/Detski'
import Myasa from './pages/categories/Myasa'
import Clear from './pages/categories/Clear'
import Zootovar from './pages/categories/Zootovar'

function App() {

  return (
    <>
  
     <Routes>
        <Route>
          <Route path="/" element={ <AllCategoris/>}/>
          <Route path="/moloko" element={<Moloko/>}/>
          <Route path="/xleb" element={<Xleb/>}/>
          <Route path="/fruct" element={<Fruct/>}/>
          <Route path="/zamarojinnie" element={<Zamarojinnie/>}/>
          <Route path="/napitki" element={<Napitki/>}/>
          <Route path="/kontiterski" element={<Konditerski/>}/>
          <Route path="/cofe" element={<Cofe/>}/>
          <Route path="/bakaleya" element={<Bakaleya/>}/>
          <Route path="/zdarovie" element={<Zdarovie/>}/>
          <Route path="/zootovar" element={<Zootovar/>}/>
          <Route path="/detski" element={<Detski/>}/>
          <Route path="/myasa" element={<Myasa/>}/>
          <Route path="/clear" element={<Clear/>}/>
        </Route>
     </Routes>
    
    </>
  )
}

export default App

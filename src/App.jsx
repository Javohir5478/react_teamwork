
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/footer/Footer'
import { Header } from 'antd/es/layout/layout'
import Compony from './components/footer/Compony'
import Kontackt from './components/footer/Kontackt'
import Vacation from './components/footer/Vacation'

function App() {

  return (
    <>
    <BrowserRouter >
    <Header />
    <Routes>
      <Route>
        <Route path='Compony' element={<Compony />} />
        <Route path='Kontackt' element={<Kontackt />} />
        <Route path='Vacation' element={<Vacation />} />
      </Route>
    </Routes>
     <Footer />
    </BrowserRouter>
    </>
  )
}

export default App

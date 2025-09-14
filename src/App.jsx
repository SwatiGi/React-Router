import React from 'react'
import { Router,Route,Routes,} from "react-router-dom"
import Products from './pages/Products'
import Header from './components/Header'
import Home from './pages/Home'
import Welcome from './pages/Welcome'
import ProductDetail from './pages/ProductDetail'
const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' exect element={<Home />} />
        <Route path='/welcome' element={<Welcome/>}/>
        <Route path='/products' element={<Products />} />
        <Route path='/products/:productId' element={<ProductDetail/>} />
       
    
        
    </Routes>
    </div>
  )
}

export default App

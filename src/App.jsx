import React from 'react'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import About from './components/About/About'
import Shop from './components/Shop/Shop'
import {Routes,Route} from 'react-router-dom'
import Cart from './components/Cart/Cart'
import Brands from './components/Brands/Brands'
import BrandPage from './components/Brands/BrandPage/BrandPage'
import PerfumeDetail from './components/PerfumeDetail/PerfumeDetail'
const App = () => {
  return (
    <div >
      
     
      <Header />
        <Routes>
      
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/shop' element={<Shop/>}/>
      <Route path='/cart' element={<Cart/>}></Route>
      <Route path='/brands' element={<Brands/>}></Route>
      <Route path='/brands/:id' element={<BrandPage/>}></Route>
      <Route path='/perfumeDetail/:id' element={<PerfumeDetail/>}></Route>
      </Routes>
      <Footer/>
      
      
    </div>
  )
}

export default App
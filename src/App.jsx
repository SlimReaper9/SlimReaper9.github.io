import React from 'react'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import About from './components/About/About'
import Shop from './components/Shop/Shop'
import {Routes,Route} from 'react-router-dom'
const App = () => {
  return (
    <div>
      
     
      <Header />
        <Routes>
      
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/shop' element={<Shop/>}/>
      
      </Routes>
      <Footer/>
      
      
    </div>
  )
}

export default App
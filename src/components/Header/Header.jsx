import React from 'react' 
import s from './Header.module.scss'
import cart from '../../assets/cart.png'
import logo from '../../assets/Logo.png'
import menu from '../../assets/menu.png'
import {Link} from 'react-router-dom'
const Header = () => {
  return (
    <header className={s.header}>
   <section className={s.flex}>
      <div className={s.logo}><img src={logo}></img></div>
      <nav className={s.navbar}>
         <Link to='/'>home</Link>
         <Link to='/about'>about</Link>
         <Link to='/shop'>shop</Link>
         <a href="orders.html">brands</a>
         <a href="contact.html">contact</a>
      </nav>
        <div className={s.icons}><img src={cart}></img><div className={s.menu}><img src={menu}></img></div></div>
   </section>
</header>

  )
}

export default Header
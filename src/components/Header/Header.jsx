import React from 'react' 
import s from './Header.module.scss'
import cart from '../../assets/cart.png'
import logo from '../../assets/Logo.png'
import menuimg from '../../assets/menu.png'
import ximg from '../../assets/x.png'
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setMenu } from '../../redux/perfumeSlice'
const Header = () => {
    const menu = useSelector(state => state.allPerfumes.menu)
    const dispatch = useDispatch()
    const showMenu = () => {
      dispatch(setMenu(false));
      document.body.style.overflow = ''
    }
    const count = useSelector(state => state.cart.cart.reduce((sum,elem) => {
    return sum + elem.count
  },0))
  return (
    <>
    
    <header className={s.header}>
    <div className={s.boxmenu} style={menu == false ? {display : 'none'} : {display:'flex'} }>
            <Link to='/' onClick={() => showMenu()}>home</Link>
         <Link to='/about'  onClick={() => showMenu()}>about me</Link>
         <Link to='/shop'  onClick={() => showMenu()}>shop</Link>
         <Link to='/brands'  onClick={() => showMenu()}>brands</Link>
         
            </div>
   <section className={s.flex}>
      <div className={s.logo}><Link to='/'><img src={logo}></img></Link></div>
      <nav className={s.navbar}>
         <Link to='/'>home</Link>
         <Link to='/about'>about me</Link>
         <Link to='/shop'>shop</Link>
         <Link to='/brands'>brands</Link>
         
      </nav>
        <div className={s.icons}>
          <span>{count}</span>
          <Link to='/cart' className={s.cart}><img src={cart}></img></Link>
          <div className={s.menu}><img src={menu ==false ? menuimg : ximg} onClick={() => {
            dispatch(setMenu(!menu));
            document.body.style.overflow= menu == true ? '' : 'hidden'
            
          }}></img></div>
            
            </div>
        
   </section>
</header>
</>
  )
}

export default Header
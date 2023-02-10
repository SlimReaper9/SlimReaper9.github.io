import React from 'react'
import { Link } from 'react-router-dom'
import s from './Footer.module.scss'
import {media,cards} from '../../constants/constant'
import { useSelector } from 'react-redux';
const Footer = () => {
  const menu = useSelector(state => state.allPerfumes.menu)
  let scrollTop = () => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
 }
  return (
    <footer className={s.footer} style={menu ==true ? {display: 'none'} : {display: ''}}>
        <div className={s.flex}>
            <div className={s.menu}>
              <Link to='/' onClick={() => scrollTop()}>Home</Link>
              <Link to='/about' onClick={() => scrollTop()}>About</Link>
              <Link to='/shop' onClick={() => scrollTop()}>Shop</Link>
              <Link to='/brands' onClick={() => scrollTop()}>Brands</Link>
              <Link to='contact' onClick={() => scrollTop()}>Contact</Link>
            </div>
            <div className={s.media}>
              {media.map((elem,key) => {
                return <div className={s.mediaBox}><img src={elem.imgUrl}></img></div>
              })}
            </div>
            <div className={s.cards}>
              {cards.map((elem,key) => {
                return <div className={s.cardBox}><img src={elem.imgUrl}></img></div>
              })}
            </div>
        </div>
        <div className={s.name}>by Mladen Simic</div>
    </footer>
  )
}

export default Footer
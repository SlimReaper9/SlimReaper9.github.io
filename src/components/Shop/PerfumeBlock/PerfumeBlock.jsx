import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToCart } from '../../../redux/cartSlice'
import s from './PerfumeBlock.module.scss'
const PerfumeBlock = (props) => {
  let dispatch = useDispatch()
  let cart = useSelector(state => state.cart.cart);
  const [total,setTotal] = useState(0)
 
  return (
    <div className={s.block}>
       {total > 0 ?  <div className={s.count}><span>{cart.find(obj => obj.id === props.id) ? total : ''}</span></div> : ''}
        <Link to={'/perfumeDetail/' + props.id}><div className={s.image}><img src={props.imageUrl}></img></div></Link>
        <div className={s.designer}>{props.designer}</div>
        <div className={s.name}>{props.title}</div>
        <div className={s.ml}>Eau de Toilette  {props.sizes} ml</div>
        <div className={s.box}><div className={s.price}>{props.price}$</div><div className={s.rating}>{props.rating}/10</div></div>
    <div className={s.button} onClick={()=> {dispatch(addToCart(props));setTotal(total + 1)}}>Buy Now</div>
    </div>
  )
}

export default PerfumeBlock
import React from 'react'
import s from './CartItem.module.scss'
import x from '../../../assets/x-solid.svg'
import plus from '../../../assets/plus-solid.svg'
import minus from '../../../assets/minus-solid.svg'
import { useDispatch } from 'react-redux'
import { deleteCategory, setCountMinus, setCountPlus } from '../../../redux/cartSlice'
const CartItem = (props) => {
  const dispatch = useDispatch()
  return (
    <div className={s.item}>
        
        <div className={s.image}><img src={props.imageUrl}></img></div>
        <div className={s.designer}>{props.designer}</div>
        <div className={s.name}>{props.title}</div>
        <div className={s.price}><span>Price : </span> {props.price} $</div>
        <div className={s.box}>
          
          <div className={s.changer}><img src={minus} onClick={() => dispatch(setCountMinus(props.id))}></img> <span>{props.count >0 ? props.count : dispatch(deleteCategory(props.id))}</span> <img src={plus} onClick={()=> dispatch(setCountPlus(props.id))}></img></div>
        </div>
        <div className={s.price}><span>Total : </span> {props.count * props.price} $ </div>
        <div className={s.deleteItem}><img src={x} onClick={() => dispatch(deleteCategory(props.id))}></img></div>
    </div>
  )
}
export default CartItem
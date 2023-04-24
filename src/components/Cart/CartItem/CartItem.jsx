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
        
        <div className={s.description}>
        <div className={s.image}><img src={props.imageUrl}></img></div>
        <div className={s.info}>
        <div className={s.designer}>{props.designer}</div>
        <div className={s.name}>{props.title}</div>
        </div>
        </div>
        <div className={s.size}><div>{props.sizes}ml</div></div>
        <div className={s.box}>
          
          <div className={s.changer}><div className={s.minus} onClick={() => dispatch(setCountMinus(props.id))}>-</div> <div className={s.count}>{props.count >0 ? props.count : dispatch(deleteCategory(props.id))}</div> <div className={s.plus} onClick={()=> dispatch(setCountPlus(props.id))}>+</div></div>
        </div>
        <div className={s.deleteItem}><img src={x} onClick={() => dispatch(deleteCategory(props.id))}></img></div>
        <div className={s.price}>${props.price}</div>
        
    </div>
  )
}
export default CartItem
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import s from './Cart.module.scss'
import CartItem from './CartItem/CartItem'
import x from '../../assets/trash-can-regular.svg'
import { clearCart } from '../../redux/cartSlice'
import emptyCart from '../../assets/empty-cart.png'
import {Link} from 'react-router-dom'
const Cart = () => {
  const cartItems = useSelector(state=> state.cart)
  const dispatch = useDispatch()
  const cartItemsMap = cartItems.cart.map((elem,key) => {
        return <CartItem {...elem}></CartItem>
    })
  const count = cartItems.cart.reduce((sum,elem) => {
    return sum + elem.count
  },0)
  return (
    <>
    {cartItems.totalPrice == 0 ? <div className={s.emptyCart}>
     <div> <img src={emptyCart}></img></div>
      <div ><span>Sorry, your cart is empty</span></div>
      <Link to='/shop'><button>Back to Shop</button></Link>
      </div> :
    <section className={s.cart}>      
    <div className={s.totalItems}>Your Cart ({count} Items)</div>
    <div className={s.cartItemsBox}>{cartItemsMap}</div>
    <div className={s.box}>
        <div className={s.total}>Total : {cartItems.totalPrice} $</div>
        <div className={s.clear}><img title='Clear Cart' onClick={()=> dispatch(clearCart())} src={x}></img></div>      
    </div>
    <div className={s.pay}>checkout</div>
</section>}
    </>
  )
}

export default Cart
import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link}  from 'react-router-dom'
import {getTotals,removeFromCart,clearCart,addToCart,decCart} from '../state/CartSlice'
const Cart = () => {
  const cartData = useSelector((state)=>state.cart)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getTotals())
  }, [cartData,dispatch])
  const remove = (product)=>{
    dispatch(removeFromCart(product))
  }
  
  const decrease = (product)=>{
    dispatch(decCart(product))
  }
  const add = (product)=>{
    dispatch(addToCart(product))
  }
  const clear = (product)=>{
    dispatch(clearCart(product))
  }
  return (
    <div className='cart-container'>
     <h1>Shopping Cart</h1>
     {cartData.cartItems.length === 0 ? (<div className='cart-empty'>
      <p>Your cart is currently empty</p>
      <div className='start-shopping' >
        <Link to="/">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
</svg>          <span>Start Shopping</span>
        </Link>
      </div>
     </div>):(<>
      <div className="titles">
        <h3 className="product-title">Product</h3>
        <h3 className='price'>Price</h3>
        <h3 className='quantity'>Quantity</h3>
        <h3 className='total'>Total</h3>
      </div>
      <div className='cart-items'>

       {cartData.cartItems.map((cartItem)=>{
        return(
          <div className='cart-item' key= {cartItem.id}>
               <div className='cart-product'>
                 <img src={cartItem.image} alt={cartItem.name}/>
               <div>
                <h3>{cartItem.name}</h3>
                <p>{cartItem.desc}</p>
                 <button onClick={()=>remove(cartItem)}>Remove</button>
               </div>
               </div>
             <div className='cart-product-price'>
                 ${cartItem.price}
             </div>
             <div className='cart-product-quantity'>
                <button onClick={()=>decrease(cartItem)}>-</button>
                <div className='count'> {cartItem.cartQuantity} </div>
                <button onClick={()=> add(cartItem)}>+</button>

              </div>
              <div className='cart-product-total-price'>
              ${cartItem.price*cartItem.cartQuantity}
               </div>
          </div>
        )
       })}
      </div>
      <div className='cart-summary'>
        <button onClick={()=> clear(cartData.cartItem)} className='clear-cart' >Clear Cart</button>
        <div className='cart-checkout'>
          <div className='subtotal'>
            <span>Subtotal</span>
            <span className='amount'>${cartData.cartTotalAmount}</span>
          </div>
          <p>Taxes and shipping calculated at checkout</p>
          <button>Checkout</button>
          <div className='continue-shopping'>

          <Link to="/">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
</svg>          <span>Continue Shopping</span>
        </Link>
          </div>
        </div>
      </div>
     </>)}
    </div>
  )
}

export default Cart

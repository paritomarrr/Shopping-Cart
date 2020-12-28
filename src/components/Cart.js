import React from 'react'
import {CartContext} from '../components/Global/CartContext'
import {useContext} from 'react';
import './Cart.css';


const Cart = () => {
    const {shoppingCart,updatedPrice, totalPrice, qty, dispatch} = useContext(CartContext);
   
    return (
        <div className="cart-container">
            <div className="cart-details">
               { shoppingCart.length  > 0 ? 
               shoppingCart.map(cart => (
                   <div className="cartt" key={cart.id}>
                       <span className="cart-image"><img src={cart.image} alt="image" /></span>
                       <span className="cart-product-name">{cart.name}</span>
                       <span className="cart-product-price">{cart.price}</span>
                       <span className="increment" onClick={() => dispatch({type: 'INC', id: cart.id, cart})}><i className="fas fa-plus"></i></span>
                       <span className="quantity">{cart.qty}</span>
                       <span className="decrement" onClick={() => dispatch({type: 'DEC', id: cart.id, cart})}><i className="fas fa-minus"></i></span>
                       <span className="product-total-price">{cart.price * cart.qty} INR</span>
                       <span className="delete-product" onClick={() => dispatch({type: 'DELETE', id: cart.id, cart})}><i className="fas fa-trash-alt"></i></span>


                   </div> 
               )) 
               : 'Sorry Your Cart is empty. Add something to it!'}
            </div>
           
        </div>
    )
}

export default Cart

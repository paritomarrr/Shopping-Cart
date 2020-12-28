import React, { createContext,useReducer } from 'react'

import {CartReducer} from './CartReducer' 
export const CartContext = createContext();

const CartContextProvider = (props) => {
    const [cart, dispatch] = useReducer(CartReducer, {shoppingCart: [], totalprice: 0, qty: 0}); 
    return (
        <div>
            <CartContext.Provider value={{...cart, dispatch}} >
                {props.children}
            </CartContext.Provider>
        </div>
    )
}

export default CartContextProvider

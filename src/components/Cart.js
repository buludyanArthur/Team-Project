import React, { useContext } from 'react';
import {CartContext} from './CartContext';

function Cart() {
    const [cart, setCart] = useContext(CartContext);
    
    const totalPrice = cart.reduce((sum, current) => sum + current.price, 0)
    
    return(
        <div>
            <span>Items in Cart: {cart.length}</span>
            <br/>
            <span>Total price: {totalPrice}</span>
        </div>

    )
}

export {Cart}
import React, { useContext } from 'react';
import {CartContext} from './CartContext';

function Cart() {
    const [cart, setCart] = useContext(CartContext);

    const totalPrice = cart.reduce((sum, current) => sum + current.price*current.count, 0); 
    const  totalCount = cart.reduce((sum, item) => sum + item.count, 0);
    return(
        <div>
            
            <span>Items in Cart: {totalCount}</span>
            <br/>
            <span>Total price: {totalPrice}</span>
        </div>
    )
}

export {Cart}

    
   

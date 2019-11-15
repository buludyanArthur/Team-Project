import React, { useContext } from 'react';
import {CartContext} from './CartContext';
import { TranslationContext } from '../translations/translations';

function Cart() {
    const [cart] = useContext(CartContext);
    const {translate} = useContext(TranslationContext);

    const totalPrice = cart.reduce((sum, current) => sum + current.price*current.count, 0); 
    const  totalCount = cart.reduce((sum, item) => sum + item.count, 0);
    return(
        <div>
            
            <span>{translate('itemsInCard')}: {totalCount}</span>
            <br/>
            <span>{translate('totalPrice')}: {totalPrice}</span>
        </div>
    )
}

export {Cart}

    
   

import React from 'react';
export const CartBook = (props) => {
    return(               
        <div className="book-context">
            <h3 className="cart-book-info">{props.title}</h3>
            <p className="caty-book-info text-muted">{props.author}</p>
            <p className="cart-bookprice">{props.price} AMD</p>
                       
        </div> 
    )
}
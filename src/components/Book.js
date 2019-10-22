import React, { useContext, useState } from 'react';
import { CartContext } from './CartContext';

export const Book = (props) => {
    const [cart, setCart] = useContext(CartContext);

    const book = { title: props.title, price: props.price, src: props.src };
    //const [inCart, setInCart] = useState(true);
    function AddToCart(e) {
        e.preventDefault();


        setCart(current => [...current, book])

        // console.log(cart)

    }
    const style = { visibility: "hidden" };

    return (
        <>
            <div className="book-img-cont">
                <img className="book-img" src={props.src} alt="" />
            </div>
            <div className="book-context">
                <h3 className="book-info">{props.title}</h3>
                <p className="book-info text-muted">{props.author}</p>
                <p className="price">{props.price} AMD</p>
                <p style={style}>{props.category} </p>
                <button className="add-to-cart" onClick={AddToCart}>Add To Cart</button>
            </div>
        </>
    )
}
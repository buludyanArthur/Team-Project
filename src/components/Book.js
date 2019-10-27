import React, { useContext, useState } from 'react';
import { CartContext } from './CartContext';

export const Book = (props) => {
    const [cart, setCart] = useContext(CartContext);
    const [text, setText] = useState(`Add to cart`);

    const book = {id: props.id, title: props.title, category:props.category, price: props.price, src: props.src, count: 1};

    function AddToCart(e) {
        e.preventDefault();
        let {name} = e.target; 
        if (text === `Add to cart` ){        
            setCart(current => [...current, book] );        
            setText(`In cart`);                   
        } else{
            setCart(cart.filter(current => current.title !== name));
            setText(`Add to cart`);
        }
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
                <p style={style}>{props.id} </p>
                <button  name={props.title} className={(text === `Add to cart`) ?`add-to-cart`:`in-cart`} onClick={AddToCart}>{text}</button>
            </div>
        </>
    )
}

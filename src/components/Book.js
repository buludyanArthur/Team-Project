import React, { useContext, useState } from 'react';
import { CartContext } from './CartContext';
import { UserContext } from './UserContext';

export const Book = (props) => {
    const [cart, setCart] = useContext(CartContext);
    const [text, setText] = useState(`Add to cart`);
    const userContext = useContext(UserContext);

    const book = {id: props.id, title: props.title, category:props.category, price: props.price, src: props.src, count: 1};

    function AddToCart(e) {
        e.preventDefault();
        if(userContext){
            if(userContext.email === 'admin@gmail.com') {                
                return null;                
            }
        }
        let {name} = e.target; 
        if (!cart.find(current=> current.title===name)){  
            setCart(current => [...current, book]);            
            setText(`In cart`);                           
        } else{
            setCart(cart.filter(current => current.title !== name));
            setText(`Add to cart`);
        }
    }
    
    const style = { display: "none" };

    return (
        <>
            <div className="book-img-cont">
                <img className="book-img" src={props.src} alt="" />
            </div>
            <div className="book-context">
                <div className ="book-info">
                    <h3>{props.title}</h3>
                    <p className="text-muted">{props.author}</p>
                </div>
                <p className="price">{props.price} AMD</p>
                <p style={style}>{props.category} </p>
                <p style={style}>{props.id} </p>
               
                <button  name={props.title} className={(text === `Add to cart`) ?`add-to-cart`:`in-cart`} onClick={AddToCart}>{text}</button>
            </div>
        </>
    )
}

import React, {useContext, useRef, useState} from 'react';
import {CartContext} from '../components/CartContext';

function CartPage(props){
    
    const [cart, setCart] = useContext(CartContext);
    
   
   const totalPrice = cart.reduce((sum, current) => sum + current.price, 0); 
   function remove(e){
    e.preventDefault();
    let {name} = e.target;
    
    
    setCart(cart.filter((current) => current.title !== name));
    //setCart(cart.filter((_, current) => [...cart.slice(0, current.price), ...cart.slice(current.price +1)]));
   }
    
          
    return(
        <div className="shopping-cart">{(cart.length === 0)? <h1>Your basket is empty</h1>:
            <div>
                <h3>Shopping Cart</h3>
                 
                    <ol> {cart.map(item =>
                       <li key = {item.title}> 
                       <div className="cart-img-cont">
                           <img className="cart-book-img"src={item.src}/>
                       </div> 
                       
                       <p>{item.title}</p>   
                       <h3 className="cart-book-info" >{item.title}</h3>         
                       
                       <p className="cart-book-price">{item.price}</p>

                       <div>
                           <h3>Quantity</h3>
                           <button>-</button>
                           <input type="number" value = "1"/>
                           <button>+</button>
                           <button className="remove-from-cart" onClick={remove} name={item.title}>Remove</button>
                       </div>
                       <hr/>
                   </li>
                   
                    )}
                   </ol>
                
                   <hr/>

                    <div>       
                        <span>Items in Cart: {cart.length}</span>
                        <br/>
                        <span>Total price: {totalPrice}</span>
                    </div>
            </div>
        }
        </div>
        
    )
    
}
export {CartPage};
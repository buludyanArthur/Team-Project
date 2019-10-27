import React, {useContext} from 'react';
import {CartContext} from '../components/CartContext';
import {Cart} from '../components/Cart';
import {CartPage} from '../pages/CartPage';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
function ShowCart(props){

    const [cart, setCart] = useContext(CartContext);
    const totalPrice = cart.reduce((sum, current) => sum + current.price*current.count, 0); 
    
    
    return(
        <div className="show-cart">{(cart.length === 0)? 
            <div className="show-cart-futter"> 
                <div className="total">Total price: {totalPrice}</div>                       
                <Link className="show-cart-button" to='/'>Checkout </Link> 
                  <Link className="show-cart-button" to='pages/CartPage'>Veiw Cart </Link>
                        
            </div> :
            <div className="show-cart-list">                                 
                <ol> {cart.map(item =>
                
                    <li key = {item.title}>                         
                        <div  className="show-cart-cont">
                        <h3 className="show-cart-name" >{item.title}</h3>
                        <p >X{item.count}</p> 
                        <p className="show-cart-price text">{item.price}</p>
                        </div>  
                        <hr/>                 
                    </li>
                    
                   
                )}
                 
                </ol>
                
                <div className="show-cart-futter">
                
                    <div className="total">Total price: {totalPrice}</div> 
   
    
                    <Link className="show-cart-button" to='/'>Checkout </Link> 
                   <Link className="show-cart-button" to='pages/CartPage'>Veiw Cart </Link>
                              
                            {/* <a className="show-cart-button">Checkout</a>
                            <a className="show-cart-button">Veiw Cart</a> */}
                        </div>
                        
                
            </div>
            
        }
        </div>
    )

}
export {ShowCart};
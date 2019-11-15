import React, {useContext} from 'react';
import {CartContext} from '../components/CartContext';
import { TranslationContext } from '../translations/translations';
import {Link} from "react-router-dom";
import { UserContext } from './UserContext';

function ShowCart(props){

    const [cart, setCart] = useContext(CartContext);
    const {translate} = useContext(TranslationContext);
    const userContext = useContext(UserContext);

    const totalPrice = cart.reduce((sum, current) => sum + current.price*current.count, 0); 

    function checkout(){
        if(userContext){
            if(userContext.email === 'admin@gmail.com')
            {
                return null;
            }
            if(cart.length > 0){
                alert(`Thank you for your purchase, your order has been sent to: ${userContext.address}`)
                setCart([])
            }
            else{
                alert('Your cart is empty')
            }
        }
        else{
            alert(translate("error"))
        }
    }
    
    return(
        <div className="show-cart">{(cart.length === 0)? 
            <div className="show-cart-futter"> 
                <div className="total">{translate("totalPrice")} {totalPrice}</div>                       
                <button className="show-cart-button"  onClick={checkout}>{translate("checkout")}</button>
                <Link className="show-cart-button" to='pages/CartPage'>{translate("viewCart")} </Link>                        
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
                    <div className="total">{translate('price')}: {totalPrice}</div> 
                    <button className="show-cart-button"  onClick={checkout}>{translate("checkout")}</button>
                    <Link className="show-cart-button" to='pages/CartPage'>{translate("viewCart")} </Link>
                </div>
            </div>
        }
        </div>
    )
}

export {ShowCart};
    
                    
                        
                        
                

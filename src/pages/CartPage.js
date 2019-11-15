import React, {useContext} from 'react';
import {CartContext} from '../components/CartContext';
import {Cart} from '../components/Cart';
import x1 from '../image/x1.png'
import { UserContext } from '../components/UserContext';
import { TranslationContext } from '../translations/translations';

function CartPage(){
    const userContext = useContext(UserContext);
    const [cart, setCart] = useContext(CartContext);
    const {translate} = useContext(TranslationContext);

    function remove(e){
        e.preventDefault();
        let {name} = e.target;     
        setCart(cart.filter(current => current.title !== name));
    }

    function increase (e) {
    let {name} = e.target; 
    setCart(cart => cart.map(item => {
        if(item.title === name){
            return { ...item,  count: item.count + 1 };
        }
        return item;
        })    
      );
    }

    function decrease(e){
        let {name} = e.target;
        setCart(cart => cart.map(item => {
            if (item.count > 1 && item.title === name) {
                return { ...item, count: item.count - 1 };
            } else {
            return item;
            }
        })
      );
    };

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
        <div className="shopping-cart">{(cart.length === 0)? <p className="ph1"><h1 >{translate('basket')}</h1></p>:
            <div className = "divShopping">
                <h3 id = "title">{translate("ShoppingCart")}</h3> 
           
                <div> {cart.map(item =>
                    <div key = {item.title}> 
                        <div className="cart-img-cont">
                            <img className="img"src={item.src} alt={item.title}/>
                        </div>
                        <div className = "priceAndName">
                        <h3 className="name" >{item.title}</h3> 
                        <p className="price">{item.price} {translate('AMD')} </p>
                            </div> 
                        <div className = "buttons">                        
                            <button id = "button-" name={item.title} onClick={decrease}>-</button>
                            <button   id = "buttonCount"disabled >{item.count}</button>
                            <button id = "button-" name={item.title} onClick={increase}>+</button>
                             {/* <button className="remove"  onClick={remove} name={item.title}><i className="fas fa-trash-alt" ></i></button>  */}
                             <img src = {x1} className="remove" onClick={remove} name={item.title} alt="remove"/>  
                        </div>
                        <hr/>
                    </div>
                )}
                </div>
                <Cart/>
                <button className ="checkout" onClick={checkout}>{translate("checkout")}</button>
            </div>
        }
        </div>
    )

}
export default CartPage;
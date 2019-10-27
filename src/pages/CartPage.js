import React, {useContext} from 'react';
import {CartContext} from '../components/CartContext';
import {Cart} from '../components/Cart';

function CartPage(props){
    const [cart, setCart] = useContext(CartContext);

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
        setCart(cart => cart.map(item => {
            if (item.count > 1) {
                return { ...item, count: item.count - 1 };
            } else {
            return item;
            }
        })
      );
    };
    
    return(
        <div className="shopping-cart">{(cart.length === 0)? <h1>Your basket is empty</h1>:
            <div>
                <h3>Shopping Cart</h3>                 
                <ol> {cart.map(item =>
                    <li key = {item.title}> 
                        <div className="cart-img-cont">
                            <img className="cart-book-img"src={item.src}/>
                        </div> 
                        <h3 className="cart-book-info" >{item.title}</h3> 
                        <p className="cart-book-price">{item.price}</p>
                        <div>                        
                            <button onClick={decrease}>-</button>
                            <p>{item.count}</p>
                            <button  name={item.title} onClick={increase}>+</button>
                            <button className="remove-from-cart" onClick={remove} name={item.title}>Remove</button>
                        </div>
                        <hr/>
                    </li>
                )}
                </ol>
                <hr/>
                <Cart/>
            </div>
        }
        </div>
    )

}
export {CartPage};
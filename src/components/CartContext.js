import React, { useState, useEffect, useRef } from 'react';
import fire from '../Config/Fire';

export const CartContext = React.createContext();
export const CartProvider = (props) => {
  
    const [cart, setCart] = useState([]);
    
    let firstRender = useRef(true);
    useEffect(() => {
        fire.auth().onAuthStateChanged((user) => {
            if (user) {
                fire.firestore()
                    .collection('users')
                    .doc(`${fire.auth().currentUser.email}`).get().then(doc => {
                        if (doc.exists && doc.data().cart) {
                            setCart(doc.data().cart);
                        }
                    });

            } else {
                setCart([]);
            }
        })
    }, []);
 
    useEffect(() => {
        if (fire.auth().currentUser && cart && !firstRender.current) {
            fire.firestore()
                .collection('users')
                .doc(`${fire.auth().currentUser.email}`).update({
                    cart: cart,
              });
        }
        firstRender.current = false;
    }, [cart]); 
    return (
        <CartContext.Provider value={[cart, setCart]} >
            {props.children}
        </CartContext.Provider>
    )
}
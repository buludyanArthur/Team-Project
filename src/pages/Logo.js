import React, {useState, useRef, useEffect} from 'react';
import {Cart} from '../components/Cart';
import LogReg from '../components/LogReg'
import{Switch,Route} from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {CartProvider} from '../components/CartContext'
import {Navbar,NavDropdown,FormControl,Form,Button,Nav,ButtonToolbar, Overlay,Popover} from 'react-bootstrap';
import {ShowCart} from '../components/ShowCart'
import {CartPage} from '../pages/CartPage'
import logo from '../image/logo.png'
import fire from '../Config/Fire'
import SignedIn from '../components/SignedIn'

function Logo(){
    const[Showlist, setShowList]=useState(true)
    const[user, setUser]=useState(null)

    useEffect(() => {
            authListener();
        })

    function authListener() {
        fire.auth().onAuthStateChanged((user) => {
            if(user){
                setUser(user);
                } else{
                setUser(null);
                }
            });
    }

    return(
        <div className='logo'>
            
            <div><img src={logo}  alt='logo'/></div>
            <div className='logo-child'>
            
              {!Showlist ? <div onMouseLeave={(e) => {setShowList(true)}}>
                         <ShowCart/>
                     </div> :
                     <div className="cart" onMouseOver={(e) => {setShowList(false)}} >
                     <i className="fas fa-cart-arrow-down fa-2x"></i>
                     <p className="total"><Cart /></p>
                 </div> }         
            
            
            <div><span>|</span></div>
            <div>
                {!user ?  (<LogReg />) : (<SignedIn />)}
            </div>
            </div>
            
        </div>
    )
}
export default Logo;


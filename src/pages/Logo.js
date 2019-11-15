import React, {useState, useContext} from 'react';
import {Cart} from '../components/Cart';
import LogReg from '../components/LogReg'
import {ShowCart} from '../components/ShowCart'
import logo from '../image/logo.png'
import SignedIn from '../components/SignedIn'
import { UserContext } from '../components/UserContext';
function Logo(){

    const[Showlist, setShowList]=useState(true)
    const userContext = useContext(UserContext);    

    return(
        <div className='logo'>            
            <div><img src={logo}  alt='logo'/></div>
            <div className='logo-child'>            
              {!Showlist ? <div className="popup" onMouseLeave={(e) => {setShowList(true)}}>
                         <ShowCart/>
                     </div> :
                     <div className="cart" onClick={(e) => {setShowList(false)}} >
                     <i className="fas fa-cart-arrow-down fa-2x"></i>
                     <div className="total"><Cart /></div>
                 </div> }             
            
            <div><span>|</span></div>
            <div className="login">
                {!userContext ?  (<LogReg />) : (<SignedIn />)}
            </div>
            </div>            
        </div>
    )
}
export default Logo;


import React from 'react';
import {render} from 'react-dom'
import './App.css';
import AddBookForm from './components/add-books-form';
import BooksList from './components/BooksList';
//import AddToCart from './components/addToCart'
import {Cart} from './components/Cart'
import {CartProvider} from './components/CartContext'
import {CartPage} from './pages/CartPage'
import ShoppingCart from './components/ShoppingCartButton'
import Reduceer from './components/reducer'

function App() {
  return (   
    <div className="App">
      {/* <Reduceer/>
      <br/>
       <BooksList/> 
     
     </div>    */} 
        <CartProvider> 
         <Cart/>
         <CartPage/>
         <AddBookForm/>  
        <ShoppingCart/>  
        
        {/* <Cart/> 
       <AddBookForm/> 
       <AddToCart/>  */}  
       {/* <BooksList/>   */}
       
       </CartProvider>  
        </div>
    
  );
}

export default App;

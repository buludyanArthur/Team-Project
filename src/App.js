import React, { useState, useEffect } from 'react';
import {render} from 'react-dom'
import './App.css';
import AddBookForm from './components/add-books-form';
import BooksList from './components/BooksList';
import {Cart} from './components/Cart'
import {CartProvider} from './components/CartContext'
import {CartPage} from './pages/CartPage'

import fire from './Config/Fire'
import {BrowserRouter as Router} from 'react-router-dom';
import {ShowCart} from './components/ShowCart'
import Loading from './components/loading'
import Header from './pages/Header'
import Logo from './pages/Logo';
import{Switch,Route} from 'react-router-dom';
import AboutUs from './pages/AboutUs'; 
import Home from './pages/Home';
import Contact from './pages/Contact';
import Books from './pages/Books'
import BookCart from './components/BooksList';


function App() {

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


  return (   
    
    <div className="App">
       
      <Router>
       <CartProvider>
       <Logo/>      
    
            <Header/> 
            {fire.auth().currentUser ? fire.auth().currentUser.email === 'admin@gmail.com' ? <AddBookForm /> : null : null}         
            
            <Switch>
              <Route path='/' exact component={Home}/>
              <Route path='/aboutus' exact component={AboutUs}/>
              <Route path='/contact' exact component={Contact}/>
              <Route path='/books' exact component={Books}/>
              <Route path='/pages/cartPage' exact component={CartPage}/>
            </Switch>    
            
       </CartProvider>
       </Router>
      
       
        </div>
       
       
  );
}

export default App;
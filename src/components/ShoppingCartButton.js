import React from "react";
import {CartPage} from '../pages/CartPage'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import BooksList from './BooksList'



export default function ShoppingCartButton() {
  return (
    <Router>
      <div>
             <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/CartPage">CartPage</Link>
          </li>
          
        </ul>
        
        <hr />
        

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <BooksList />
          </Route>
          <Route path="/CartPage">
            <CartPage />
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.







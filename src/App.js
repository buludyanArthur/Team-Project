import React, { useState, useEffect, useContext, Suspense, lazy } from 'react';
import './App.css';
import { CartProvider } from './components/CartContext';
import { BrowserRouter as Router } from 'react-router-dom';
import Loading from './components/loading';
import Header from './pages/Header';
import Logo from './pages/Logo';
import Footer from './pages/Footer';
import { Switch, Route, Link } from 'react-router-dom';
import LanguageSelect from './translations/LanguageSelect';
import ErrorBoundary from './components/ErrorBoundary';
import { UserContext } from './components/UserContext';

const Home = lazy(() => import("./pages/Home"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const Contact = lazy(() => import("./pages/Contact"));
const Books = lazy(() => import("./pages/Books"));
const AddBooks = lazy(() => import("./pages/AddBooks"));
const CartPage = lazy(() => import('./pages/CartPage'));


function App() {

  const userContext = useContext(UserContext)

  let [showTopButton, setShowTopButton] = useState(false);
  useEffect(() => {
    
    function scrollListener(e) {
      setShowTopButton(document.body.scrollTop > 200);
    }
    document.body.addEventListener("scroll", scrollListener);
    return () => {
      document.body.removeEventListener("scroll", scrollListener);
    }
  }, [])

  const scrollTop = (
    <div
      className='scrollTop-button'
      onClick={(e) => document.body.scrollTop = 0}
    >
    </div>
  )

  return (
    <div className="App">
      <ErrorBoundary>
        <Router>
          <CartProvider>
            <Logo as={Link} to='/' />
            <LanguageSelect/>
            <Header />
            <Suspense fallback={<Loading/>}>
              <Switch>
              {userContext ? userContext.email === 'admin@gmail.com' ?
                <Route path='/addbooks' exact component={AddBooks} />: null : null}            
                <Route path='/' exact component={Home} />
                <Route path='/aboutus' exact component={AboutUs} />
                <Route path='/contact' exact component={Contact} />
                <Route path='/books' exact component={Books} />
                <Route path='/pages/cartPage' exact component={CartPage} />
              </Switch>
              <Footer/>
            </Suspense>
          </CartProvider>
        </Router>      
      </ErrorBoundary>
      {showTopButton ? scrollTop : null}
     
    </div>
  );
}

export default App;
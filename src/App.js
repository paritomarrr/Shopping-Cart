import React from 'react'
import Navbar from '../src/components/navbar';
import NotFound from './components/NotFound';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ProductsContext from './components/Global/ProductsContext';
import Products from '../src/components/Products';
import './App.css';
import Cart from './components/Cart';
import CartContextProvider from '../src/components/Global/CartContext';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <ProductsContext>
        <CartContextProvider>
        <Router>
           <Navbar />
          <Switch>
            <Route path="/" exact component={Products} />
            <Route path="/cart" exact component={Cart} /> 
             <Route component={NotFound} />        
          </Switch>
        </Router>
        </CartContextProvider>
      </ProductsContext>
      <Footer />
    </div>
  )
}

export default App

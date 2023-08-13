import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Navbar from '../src/components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Error404 from './components/Error404';
import { Checkout } from './components/Checkout';
import CartProvider from "./components/CartContext";
import { Cart } from "./components/Cart";

function App() {
  return (
    <div className="App">
        <CartProvider>
          <BrowserRouter >
            <Navbar />
            <Routes>
              <Route path={"/"} element={<ItemListContainer />} />
              <Route path={"/category/:categoryId"} element={<ItemListContainer />} />
              <Route path={"/item/:id"} element={<ItemDetailContainer/>} />
              <Route path={"*"} element={<Error404 />} />
              <Route path={"/checkout"} element={<Checkout />} />
              <Route path="/Cart" element={<Cart />} />
              
            </Routes>           
          </BrowserRouter>
        </CartProvider>  
    </div>
  );
}

export default App;

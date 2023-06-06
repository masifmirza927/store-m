import { useEffect, useState } from 'react';
import './App.css';

import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import Categories from "./pages/Categories"
import Cart from "./pages/Cart"
import ProductDetails from './pages/ProductDetails';

import { Routes, Route } from 'react-router-dom';

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [query, setQuery] = useState("");

  // fetching data from api
  useEffect(() => {
    fetch("https://fakestoreapi.com/products").then((data) => {
      return data.json();
    }).then((res) => {
      setProducts(res);
      setFilteredProducts(res);
    }).catch((err) => { console.log(err) })
  }, []);

const addToCart = (product) => {
   const newAr = [...cart, product];
   setCart(newAr);
}  

const removeFromCart = (index) => {
  const newAr = cart.toSpliced(index, 1);
  setCart(newAr);
}  

const searchproducts = (search) => {
  const newAr = products.filter( (item) => {
    return item.title.toLowerCase().includes(search.toLowerCase());
  });
  setFilteredProducts(newAr);
}


  return (
    <div className="container">
      <Header cart={cart} />
    <input  type='text' onChange={(e) => searchproducts(e.target.value)} />
        <Routes>
          <Route path='/' element={<Home addToCart={addToCart} products={filteredProducts} />} />
          <Route path='/categories' element={<Categories />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/product/:id' element={<ProductDetails />} />
        </Routes>

      <Footer />
    </div>
  );
}

export default App;

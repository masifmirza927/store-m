import { useEffect, useState } from 'react';
import './App.css';

import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import Categories from "./pages/Categories"
import Cart from "./pages/Cart"

import { Routes, Route } from 'react-router-dom';

function App() {
  const [products, setProducts] = useState([]);

  // fetching data from api
  useEffect(() => {
    fetch("https://fakestoreapi.com/products").then((data) => {
      return data.json();
    }).then((res) => {
      setProducts(res);
    }).catch((err) => { console.log(err) })\
  }, []);


  return (
    <div className="container">
      <Header />

        <Routes>
          <Route path='/' element={<Home products={products} />} />
          <Route path='/categories' element={<Categories />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>

      <Footer />
    </div>
  );
}

export default App;

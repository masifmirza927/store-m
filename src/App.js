import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);




  useEffect(() => {

    fetch("https://fakestoreapi.com/products").then((data) => {
      return data.json();

    }).then((res) => {

      setProducts(res);
      console.log(res)

    }).catch((err) => {

      console.log(err);

    })

  }, []);


  return (
    <div className="container">
      <h1>Our Products</h1>
      <div className='row'>
        {
          products.map((product) => {
            return (
              <div className='col-md-3' style={{ marginBottom: "10px" }}>
                <div className="card" style={{width: "18rem"}}>
                  <img src={product.image} className="card-img-top" alt="..." style={{ width: "100%", height: '150px' }} />
                    <div className="card-body">
                      <h5 className="card-title text-truncate">{product.title}</h5>
                      <p className="card-text"><h2>${product.price}</h2></p>
                      <a href="#" className="btn btn-primary">Add to cart</a>
                    </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;


import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"

function ProductDetails() {
    const [product, setProduct] = useState([]);

    const params = useParams();
    const productId = params.id;

    // fetching data from api
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${productId}`).then((data) => {
            return data.json();
        }).then((res) => {
            setProduct(res);
        }).catch((err) => { console.log(err) })
    }, []);


    if (Object.keys(product).length > 0) {
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <img src={product.image} height="250px" />
                        </div>
                        <div className="col-md-6">
                            <h1>{product.title}</h1>
                            <p>{product.description}</p>
                            <div><b>Category: </b>{product.category}</div>
                            <div><b>Price: </b>${product.price}</div>
                            <div>{product.rating['rate']}</div>
                        </div>
                    </div>
                </div>
            </>
        )
    } else {
        return (
            <>
                <div className="d-block mx-auto my-4 text-center">
                    <div className="spinner-border text-danger" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>

            </>
        )
    }
}

export default ProductDetails
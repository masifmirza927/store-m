
import { Link } from "react-router-dom"

function ProductCard(props) {
    
    return(
        <div className='col-md-3' style={{ marginBottom: "10px" }}>
        <div className="card" style={{width: "18rem"}}>
          <img src={props.product.image} className="card-img-top" alt="..." style={{ width: "100%", height: '150px' }} />
            <div className="card-body">
              <h5 className="card-title text-truncate">{props.product.title}</h5>
              <p className="card-text">${props.product.price}</p>
              <a href="#" className="btn btn-primary mx-2">Add to cart</a>
              <Link to={`/product/${props.product.id}`} className="btn btn-primary">View</Link>
            </div>
        </div>
      </div>
    )
}

export default ProductCard
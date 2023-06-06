
import ProductCard from "../components/ProductCard"


function Home(props) {

    if (props.products.length > 0) {
        return (
            <>
                <h1 className='my-3'>Our Products</h1>
                <div className='row'>
                    {
                        props.products.map((product) => {
                            return (
                                <ProductCard addToCart={props.addToCart} product={product} key={product.id} />
                            )
                        })
                    }
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

export default Home
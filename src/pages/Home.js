
import ProductCard from "../components/ProductCard"

function Home(props) {
    return (
        <>
            <h1 className='my-3'>Our Products</h1>
            <div className='row'>
                {
                   props.products.map((product) => {
                        return (
                            <ProductCard product={product} key={product.id} />
                        )
                    })
                }
            </div>
        </>
    )
}

export default Home
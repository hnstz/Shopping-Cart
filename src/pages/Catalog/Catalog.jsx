import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import "./Catalog.css"

export default function Catalog(){
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        fetch("https://fakestoreapi.noksha.dev/api/products")
            .then(res => res.json())
            .then(json => setProducts(json.data||json))
            .catch(err => {
                setError(err)
                console.log('fetching error ', err)
            })
            .finally(()=>setLoading(false))
    },[])

    if(loading) {
        return (
            <div className="catalog-status">
                <div className="loader-pulse"></div>
                <p>Loading products...</p>
            </div>
        )
    }

    if(error) {
        return (
            <div className="catalog-status error-state">
                <p>A network error was encountered.</p>
                <span className="error-hint">Please check your connection and try again.</span>
            </div>
        )
    }

    return(
        <div className="catalog-container">
            <div className="products-grid">
                {products.map((product) => (
                    <Card 
                        key={product._id} 
                        id={product._id} 
                        title={product.title}
                        imgSource={product.image}
                        price={product.price}
                    />
                ))}
            </div>
        </div>
    )
}
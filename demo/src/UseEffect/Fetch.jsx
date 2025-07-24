import { useState, useEffect} from "react";

function ProductList(){            //to store product details
    const [products,setProducts] = useState([]);       //[]:now the Product list is empty      products:to store Product details
    const [loading,setLoading] = useState(true);       //Loading:USe to calculate the loading time

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => {
            setProducts(data); 
            setLoading(false);
        });
    },[]);
    if(loading) return <p className="loading">Loading...</p>

    return(
        <div className="product-list">
            {products.map(product=>(
                <div key={product.id} className="product-card">
                    <h3 className ="product-title">{product.title}</h3>
                    <p className="product-price">{product.price}</p>
                    <img src={product.image} alt={product.title} width={100} className="product-image" />
        </div>
    ))}
    </div>
    );
}
export default ProductList;
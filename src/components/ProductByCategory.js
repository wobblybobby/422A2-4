import React, {useContext} from 'react';

import ProductContext from '../context/ProductContext';
import ProductItemCard from './ProductItemCard';

const ProductByCategory = (props) => {

    const {products} = useContext(ProductContext);

    return (
        <section id="section-product-list">
            <div className="container">
                <h1>Viewing All {props.cat} Products</h1>
                <div id="list-container">
                    {products.map((product, index) => 
                    (<ProductItemCard key={index} id={product.prodID} name={product.prodName} 
                    price={product.prodPrice} description={product.prodDesc} 
                    category={product.prodCategory} quantity={product.prodQty} 
                    bestseller={product.bestSeller} image={product.prodPhoto}  />))}
                </div>
            </div>
        </section>
    )
}

export default ProductByCategory

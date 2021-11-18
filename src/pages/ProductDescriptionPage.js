import { useEffect, useState} from "react";
import { useParams } from "react-router";

import Header from "../components/Header";
import ProductDetails from "../components/ProductDetails";
import Footer from "../components/Footer";

const ProductDescriptionPage = () => {

    const {id} = useParams();

    const [product, setProducts ] = useState([]);

    useEffect(()=> {
        fetch(`${process.env.REACT_APP_BACK_END_API_DOMAIN}/product?id=${id}`)
        .then(response=>response.json())
        .then(json=>{
            setProducts(json.data)
        })
        .catch(err=> {
            console.log(`Error ${err}`)
        })
    })

    return (
        <div>
            <Header/>
            <main>
                <ProductDetails  id={product.prodID} name={product.prodName} 
                    price={product.prodPrice} description={product.prodDesc} 
                    category={product.prodCategory} quantity={product.prodQty} 
                    bestseller={product.bestSeller} image={product.prodPhoto} /> 
            </main>
            <Footer/>
        </div>
    )
}

export default ProductDescriptionPage

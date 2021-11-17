import { useEffect, useContext } from "react";
import ProductContext from "../context/ProductContext";

import Header from "../components/Header";
import AllProducts from "../components/AllProducts";
import Footer from "../components/Footer";

const ProductListingPage = () => {

    const {setProducts} = useContext(ProductContext);

    useEffect(()=> {
        /* fetch(`${process.env.REACT_APP_BACK_END_API_DOMAIN}/product`) */
        fetch(`https://w422a1.herokuapp.com/product`)
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
                <AllProducts/>
            </main>
            <Footer/>
        </div>
    )
}

export default ProductListingPage

import { useEffect, useContext } from "react";
import ProductContext from "../context/ProductContext";

import Header from "../components/Header";
import Hero from "../components/Hero";
import AllCategories from "../components/AllCategories";
import Bestseller from "../components/Bestseller";
import Footer from "../components/Footer";


const HomePage = () => {

    const {setProducts} = useContext(ProductContext);

    useEffect(()=> {
        /* fetch(`${process.env.REACT_APP_BACK_END_API_DOMAIN}/product?bestseller=yes`) */
        fetch(`https://w422a1.herokuapp.com/product?bestseller=yes`)
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
                <Hero/>
                <AllCategories/>
                <Bestseller/>
            </main>
            <Footer/>
        </div>
    )
}

export default HomePage

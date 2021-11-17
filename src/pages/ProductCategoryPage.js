import { useEffect, useContext } from "react";
import { useParams } from "react-router";
import ProductContext from "../context/ProductContext";

import Header from "../components/Header";
import ProductByCategory from "../components/ProductByCategory";
import Footer from "../components/Footer";

import React from 'react'

const ProductCategoryPage = () => {
    const {category} = useParams();

    const {setProducts} = useContext(ProductContext);

    useEffect(()=> {
        fetch(`https://w422a1.herokuapp.com/product?category=${category}`)
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
                <ProductByCategory cat={category}/>
            </main>
            <Footer/>
        </div>
    )
}

export default ProductCategoryPage

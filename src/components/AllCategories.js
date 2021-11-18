import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";

const AllCategories = () => {

    const [categories, setCategories ] = useState([]);

    useEffect(()=> {
        fetch(`${process.env.REACT_APP_BACK_END_API_DOMAIN}/product/category`)
        .then(response=>response.json())
        .then(json=>{
            setCategories(json.data)
        })
        .catch(err=> {
            console.log(`Error ${err}`)
        })
    },[])

    return (
        <section id="category-section">
            <h1 style={{textAlign: "center", marginTop: "25px"}}>Product Categories</h1>
            <div id="category-listing">
                <ul className="list-group list-group-horizontal">
                    {categories.map((cat) =>
                    <li className="list-group-item">
                        <Link to={`/product/${cat}`} style={{textDecoration: 'none'}}>{cat}</Link>
                    </li>)}
                </ul>
            </div>
        </section>
    )
}

export default AllCategories
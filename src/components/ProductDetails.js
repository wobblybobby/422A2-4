import React from 'react';

const ProductDetails = (props) => {

    return (
        <div>
            <div class="card mb-3" id="detailCard">
                <img class="card-img-top" src={props.image} alt="productPhoto"></img>
                <div class="card-body">
                    <h5 class="card-title">{props.name}</h5>
                    <p class="card-text">{props.description}</p>
                    <p class="card-text">{props.price}</p>
                    <p class="card-text"><small class="text-muted">{props.category}</small></p>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails

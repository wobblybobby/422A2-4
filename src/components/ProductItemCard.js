import React from 'react'

const ProductItemCard = (props) => {

    let bestSell;
    if (props.bestseller === true) {
        bestSell = "Yes"
    } else if (props.bestseller === false) {
        bestSell = "No"
    }


    return (
        <div className="card" id="normalCard">
            <img class="card-img-top" src={props.image} alt="Product card"></img>
                <div class="card-body">
                    <h5 class="card-title">{props.name}</h5>
                        <p class="card-text">Category: {props.category}</p>
                        <p class="card-text">Bestseller: {bestSell}</p>
                        <p class="card-text">Price: ${props.price}</p>
                        <a href={`http://localhost:3000/product/desc/${props.id}`} class="btn btn-primary">View Product</a>
  </div>
</div>
    )
}

export default ProductItemCard;
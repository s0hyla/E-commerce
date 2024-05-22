import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const [product, setProduct] = useState([]);
  let { productID } = useParams();
  useEffect(() => {
    fetch(`http://localhost:9000/products/${productID}`)
      .then((res) => res.json())
      .then((product) => setProduct(product))
      .catch((error)=>console.log('Error fetching data:',error))
  }, [productID]);
  return (
    <>
      {
        <ul style={{ listStyleType: "none" }}>
          {product &&
            <li key={product.id}>
              <h2> Product ID: {product.id} </h2>
              <h3>Title: {product.title}</h3>
              <p> Price: {product.price}$</p>
              <p> Category: {product.category}</p>
              <p> Description: {product.description}</p>
              <img src={product.image} alt={`product ${product.id}`} />
            </li>
          }
        </ul>
      }
    </>
  );
}

export default ProductDetails;

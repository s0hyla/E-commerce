import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const EditProduct = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({}); // To store the original product data
  const [editedProduct, setEditedProduct] = useState({
    title: '',
    price: '',
    category: '',
    description: '',
  });

  useEffect(() => {
    // Fetch product data from the API using Axios
    axios.get(`http://localhost:9000/products/${productId}`)
      .then((response) => {
        setProduct(response.data);
        setEditedProduct(response.data); // Initialize the edited product with the fetched data
      })
      .catch((error) => {
        console.error('Error fetching product data', error);
      });
  }, [productId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct({
      ...editedProduct,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    // Send updated product data to the API using Axios
    axios.put(`http://localhost:9000/products/${productId}`, editedProduct)
      .then(() => {
        // Handle success, e.g., redirect to the product detail page
      })
      .catch((error) => {
        console.error('Error updating product data', error);
      });
  };

  return (
    <div>
      <h2>Edit Product</h2>
      <form >
      <div className="form-group mt-2 me-4">
        <label htmlFor="productTitle">Title:</label>
        <input
          type="text"
          className="form-control mt-1"
          id="productTitle"
          name="title"
          value={editedProduct.title}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group mt-2 me-4">
        <label htmlFor="productPrice">Price:</label>
        <input
        className="form-control mt-1"
        id="productPrice"
          type="number"
          name="price"
          value={editedProduct.price}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group mt-2 me-4">
        <label htmlFor='productCategory'>Category:</label>
        <input
        className="form-control mt-1"
        id='productCategory'
          type="text"
          name="category"
          value={editedProduct.category}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group mt-2 me-4 mb-4">
        <label htmlFor='productDescription'>Description:</label>
        <textarea
        className="form-control mt-1 "
          name="description"
          id='productDescription'
          rows={3}
          value={editedProduct.description}
          onChange={handleInputChange}
        />
      </div>
      </form>
      <h3>Original Product Details:</h3>
      <p>Title: {product.title}</p>
      <p>Price: {product.price}</p>
      <p>Category: {product.category}</p>
      <p>Description: {product.description}</p>
      <button type="submit" className="btn btn-primary mt-3" onClick={handleSubmit}>Save Changes</button>
    </div>
  );
};

export default EditProduct;

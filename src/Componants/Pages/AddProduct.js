import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
function AddProduct() {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState('');
  const [description,setDescription]=useState('')
  let navigate = useNavigate();
  const formSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:9000/products', {
      title,
      price,
      category,
      description
    })
      .then((data) => {
        console.log(data);
        navigate('/products');
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <h2>Add New Product</h2>
      <form onSubmit={formSubmit}>
        <div className="form-group mt-2 me-4">
          <label htmlFor="productTitle">Title</label>
          <input
            type="text"
            className="form-control mt-1"
            id="productTitle"
            aria-describedby="Product title"
            placeholder="Enter title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group mt-2 me-4">
          <label htmlFor="productPrice">Price</label>
          <input
            type="number" step="0.01"
            className="form-control mt-1"
            id="productPrice"
            placeholder="Enter Price"
            onChange={(e) => setPrice(e.target.value)}
          />
          {/* <small id="emailHelp" className="form-text text-muted">Please enter price with $!</small> */}
        </div>
        <div className="form-group mt-2 me-4">
          <label htmlFor="ProductCategory">Category</label>
          <input
            type="text"
            className="form-control mt-1"
            id="ProductCategory"
            placeholder="Product Category"
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>{" "}
        <div className="form-group me-4">
          <label htmlFor="productDescription">Description</label>
          <textarea className="form-control mt-1" id="productDescription" rows="3" onChange={(e)=>setDescription(e.target.value)}></textarea>
        </div>{" "}
        <button type="submit" className="btn btn-primary mt-3">
          Add Product
        </button>
      </form>
    </>
  );
}

export default AddProduct;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function Products() {
  const [products, setProducts] = useState([""]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const url = "http://localhost:9000/products";
  useEffect(() => {
    get();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  async function get() {
    try {
      const response = await fetch(url);
      if (response.status !== 200) {
        throw new Error(`HTTP status code: ${response.status}`);
      }
      const data = await response.json();
      setProducts(data);
      setIsLoading(false);
    } catch (erorr) {
      console.error("Error : ", error);
      setError(error);
      setIsLoading(false);
    }
  }
  //--------------- Delete Product -----------------
  const DeleteProduct = (product) => {
    Swal.fire({
      title: `Confirm Deletion "${product.title}" product!`,
      showCancelButton: true,
    }).then((data) => {
      if (data.isConfirmed) {
        fetch(`${url}/${product.id}`, {
          method: "DELETE",
        })
          .then((res) => {
            res.json();
          })
          .then((data) => {
            get();
          });
      }
    });
  };
  //-----------------------------------------------
  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <div>
          <h1>All Products</h1>
          <Link to={"/products/add"} className="btn btn-success m-3">
            {" "}
            Add New Product{" "}
          </Link>

          <table className="table table-striped table-hover ">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Title</th>
                <th scope="col">Price</th>
                <th scope="col">Category</th>
                <th scope="col"> Operations</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={index}>
                  <th scope="row">{product.id}</th>
                  <td>{product.title}</td>
                  <td>{product.price}$</td>
                  <td>{product.category}</td>
                  <th>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => {
                        DeleteProduct(product);
                      }}
                    >
                      Delete
                    </button>{" "}
                    <Link
                      to={`/products/${product.id}`}
                      className="btn btn-info btn-sm"
                    >
                      View
                    </Link>{" "}
                    <Link
                      to={`/products/${product.id}/edit`}
                      className="btn btn-primary btn-sm"
                    >
                      {" "}
                      Edit{" "}
                    </Link>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}

export default Products;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    let response = await fetch("http://localhost:5000/products");
    response = await response.json();
    setProduct(response);
  };

  const deleteProduct = async (id) => {
    let response = await fetch(`http://localhost:5000/product/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    response = await response.json();
    if (response) {
      alert("Product deleted successfully");
      fetchProducts();
    } else {
      console.log("Failed to delete product");
    }
  };

  return (
    <div className="product-list">
      <h1>Product List</h1>
      <ul>
        <li>S.no</li>
        <li>Name</li>
        <li>Price</li>
        <li>Category</li>
        <li>Operation</li>
      </ul>

      {product.length > 0 ? (
        product.map((item, index) => {
          return (
            <ul>
              <li>{index + 1}</li>
              <li>{item.name}</li>
              <li>{item.price}</li>
              <li>{item.category}</li>
              <li>
                <button onClick={() => deleteProduct(item._id)}>Delete</button>
                <Link to={`/update/`+item._id}>Update</Link>
              </li>
            </ul>
          );
        })
      ) : (
        <div>No products found</div>
      )}
    </div>
  );
};

export default ProductList;

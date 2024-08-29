import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const params = useParams();

  useEffect(() => {
    getProductById();
  }, []);

  const getProductById = async () => {
    let result = await fetch(`http://localhost:5000/product/${params.id}`,

      {
        headers: {
          "Content-Type": "application/json",
           Authorization:`bearer ${JSON.parse(localStorage.getItem("token"))}`
        },
      }
    );
    result = await result.json();
    setName(result.name);
    setPrice(result.price);
    setCategory(result.category);
    setCompany(result.company);
  };

  const navigate = useNavigate();

  const triggerUpdate = async () => {
    let result = await fetch(`http://localhost:5000/product/${params.id}`, {
      method: "PUT",
      body: JSON.stringify({ name, price, category, company }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    });
    result = await result.json();
    if (result) {
      navigate(`/`);
      alert("Product Updated Successfully");
    } else {
      alert("Error updating product");
    }
  };

  return (
    <div className="login">
      <h1>Update Product</h1>
      <input
        className="inputBox"
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        placeholder="Enter Name"
      />

      <input
        className="inputBox"
        type="text"
        value={price}
        onChange={(e) => {
          setPrice(e.target.value);
        }}
        placeholder="Enter Price"
      />

      <input
        className="inputBox"
        type="text"
        value={category}
        onChange={(e) => {
          setCategory(e.target.value);
        }}
        placeholder="Enter Category"
      />

      <input
        className="inputBox"
        type="text"
        value={company}
        onChange={(e) => {
          setCompany(e.target.value);
        }}
        placeholder="Enter Company"
      />

      <button className="registerButton" onClick={triggerUpdate}>
        Update Product
      </button>
    </div>
  );
};

export default UpdateProduct;

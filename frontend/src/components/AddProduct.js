import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const triggerProductCreation = async () => {
    if (!name || !price || !category || !company) {
      setError(true);
      return false;
    }

    const userId = JSON.parse(localStorage.getItem("user"))._id;
    console.log("userId: " + userId);
    let result = await fetch("http://localhost:5000/add-product", {
      method: "POST",
      body: JSON.stringify({ name, price, category, userId, company }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log(result);
  };

  return (
    <div className="login">
      <h1>Add Product</h1>
      <input
        className="inputBox"
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        placeholder="Enter Name"
      />
      {error && !name && <span className="invalid-input">Enter valid name</span>}
      <input
        className="inputBox"
        type="text"
        value={price}
        onChange={(e) => {
          setPrice(e.target.value);
        }}
        placeholder="Enter Price"
      />
      {error && !price && <span className="invalid-input">Enter valid price</span>}
      <input
        className="inputBox"
        type="text"
        value={category}
        onChange={(e) => {
          setCategory(e.target.value);
        }}
        placeholder="Enter Category"
      />
      {error && !category && <span className="invalid-input">Enter valid category</span>}
      <input
        className="inputBox"
        type="text"
        value={company}
        onChange={(e) => {
          setCompany(e.target.value);
        }}
        placeholder="Enter Company"
      />
      {error && !company && <span className="invalid-input">Enter valid company</span>}

      <button className="registerButton" onClick={triggerProductCreation}>
        Add Product
      </button>
    </div>
  );
};

export default AddProduct;

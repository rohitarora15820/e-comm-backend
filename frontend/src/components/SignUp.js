import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(()=>{
    const auth=localStorage.getItem("user");
    if(auth){
      navigate("/");
    }
  },[]);

  const triggerSignUp = async () => {
    console.log(name, email, password);
    let result = await fetch("http://localhost:5000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });

    result = await result.json();
    console.log(result);
    if (result) {
    
        localStorage.setItem("user", JSON.stringify(result.result));
        localStorage.setItem("token", JSON.stringify(result.token));
      alert("Registration Successful");
      setName("");
      setEmail("");
      setPassword("");
      navigate("/");
    }
  };

  return (
    <div className="register">
      <h1>Register</h1>
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
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        placeholder="Enter Email"
      />
      <input
        className="inputBox"
        type="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        placeholder="Enter Password"
      />
      <button className="registerButton" onClick={triggerSignUp}>
        Sign Up
      </button>
    </div>
  );
};
export default SignUp;

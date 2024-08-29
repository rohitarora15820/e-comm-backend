import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(()=>{
    const auth=localStorage.getItem("user");
    if(auth){
      navigate("/");
    }
  },[])

  const triggerLogin = async() => {
    console.log( email, password);
    let result = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({email, password }),
    });

    result = await result.json();
    console.log(result);
    if (result.token) {
        localStorage.setItem("user", JSON.stringify(result.result));
        localStorage.setItem("token", JSON.stringify(result.token));
      alert("Login Successfully");
      setEmail("");
      setPassword("");
      navigate("/");
    }
    else{
        alert("Invalid Email or Password");
  
    }
  };

  return (
    <div className="login">
      <h1>Login</h1>
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
      <button className="registerButton" onClick={triggerLogin}>
        Login
      </button>
    </div>
  );
};

export default Login;

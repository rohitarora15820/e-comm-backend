import React from "react";
import { Link ,useNavigate} from "react-router-dom";

const Nav = () => {
  const auth = localStorage.getItem("user");
  const navigate=useNavigate();
  const triggerLogout=()=>{
    localStorage.clear();
    navigate('/register');
  }
  return (
    <div>
      <img className="logo" alt="logo" src="https://imgs.search.brave.com/3s62TQnB8XHcVwVnh_FRqYt4AyELLrpWxXrEXPYKxSs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9k/L2Q5L05vZGUuanNf/bG9nby5zdmc"/>
      {auth?  <ul className="nav-ul">
        <li>
          <Link to="/">Product</Link>
        </li>
        <li>
          <Link to="/add">Add Product</Link>
        </li>

        <li>
          <Link to="/update">Update Product</Link>
        </li>
    
        <li> <Link onClick={triggerLogout} to="/register">Logout ({JSON.parse(auth).name})</Link></li> 
   
      </ul>:
      
      <ul className="nav-ul nav-right">
        <li> <Link to="/register">Register</Link> </li>
      <li>  <Link to="/login">Login</Link> </li>
      </ul>
      }
      
    </div>
  );
};

export default Nav;

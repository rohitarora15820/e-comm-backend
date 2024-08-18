import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div>
            <ul className="nav-ul">
                <li><Link to="/">Product</Link></li>
                <li><Link to="/add">Add Product</Link></li>

                <li><Link to="/update">Update Product</Link></li>
                <li><Link to="/delete">Delete Product</Link></li>

                <li><Link to="/logout">Logout</Link></li>
                <li><Link to="/register">Register</Link></li>


            </ul>

        </div>
    );
}

export default Nav;
import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Sidebar = () => {
  const { logout } = useContext(AuthContext);

  return (
    <div className="sidebar">
      <h3>Employee Management</h3>
      <Link to="/">Home</Link>
      <Link to="/add-employee">Add Employee</Link>
      <Link to="/employee-list">Employee List</Link>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Sidebar;

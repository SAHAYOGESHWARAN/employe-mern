import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import AddEmployee from "./components/AddEmployee";
import EditEmployee from "./components/EditEmployee";
import EmployeeList from "./components/EmployeeList";
import Sidebar from "./components/Sidebar";
import PrivateRoute from "./components/PrivateRoute";
import { AuthContext } from "./context/AuthContext";

const App = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <Router>
      <div className="app">
        {isAuthenticated && <Sidebar />}
        <Routes>
          <Route path="/" element={<PrivateRoute element={<Home />} />} />
          <Route path="/add-employee" element={<PrivateRoute element={<AddEmployee />} />} />
          <Route path="/employee-list" element={<PrivateRoute element={<EmployeeList />} />} />
          <Route path="/edit-employee/:id" element={<PrivateRoute element={<EditEmployee />} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

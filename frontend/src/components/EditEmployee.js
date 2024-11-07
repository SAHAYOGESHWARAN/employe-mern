import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditEmployee = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    mobile: "",
    designation: "",
    gender: "",
    course: [],
    img: ""
  });

  useEffect(() => {
    const fetchEmployee = async () => {
      const res = await fetch(`/api/employees/${id}`);
      const data = await res.json();
      setEmployee(data);
    };
    fetchEmployee();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleEditEmployee = async (e) => {
    e.preventDefault();
    await fetch(`/api/employees/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`
      },
      body: JSON.stringify(employee),
    });
    alert("Employee updated successfully!");
    navigate("/employee-list"); // Redirect to employee list
  };

  return (
    <form onSubmit={handleEditEmployee}>
      <input type="text" name="name" value={employee.name} onChange={handleChange} placeholder="Name" />
      <input type="email" name="email" value={employee.email} onChange={handleChange} placeholder="Email" />
      <input type="text" name="mobile" value={employee.mobile} onChange={handleChange} placeholder="Mobile" />
      <input type="text" name="designation" value={employee.designation} onChange={handleChange} placeholder="Designation" />
      <input type="text" name="gender" value={employee.gender} onChange={handleChange} placeholder="Gender" />
      <input type="text" name="course" value={employee.course} onChange={(e) => setEmployee({ ...employee, course: e.target.value.split(",") })} placeholder="Courses (comma-separated)" />
      <input type="text" name="img" value={employee.img} onChange={handleChange} placeholder="Image URL" />
      <button type="submit">Update Employee</button>
    </form>
  );
};

export default EditEmployee;

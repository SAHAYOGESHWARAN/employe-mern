import React, { useState } from "react";

const AddEmployee = () => {
  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    mobile: "",
    designation: "",
    gender: "",
    course: [],
    img: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleAddEmployee = async (e) => {
    e.preventDefault();
    await fetch("/api/employees/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`
      },
      body: JSON.stringify(employee),
    });
    alert("Employee added successfully!");
  };

  return (
    <form onSubmit={handleAddEmployee}>
      <input type="text" name="name" value={employee.name} onChange={handleChange} placeholder="Name" />
      <input type="email" name="email" value={employee.email} onChange={handleChange} placeholder="Email" />
      <input type="text" name="mobile" value={employee.mobile} onChange={handleChange} placeholder="Mobile" />
      <input type="text" name="designation" value={employee.designation} onChange={handleChange} placeholder="Designation" />
      <input type="text" name="gender" value={employee.gender} onChange={handleChange} placeholder="Gender" />
      <input type="text" name="course" value={employee.course} onChange={(e) => setEmployee({ ...employee, course: e.target.value.split(",") })} placeholder="Courses (comma-separated)" />
      <input type="text" name="img" value={employee.img} onChange={handleChange} placeholder="Image URL" />
      <button type="submit">Add Employee</button>
    </form>
  );
};

export default AddEmployee;

import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/HomePage";
import AddEmployeeForm from "../pages/addEmployee/AddEmployeeForm";
import AddEmployee from "../pages/addEmployee/AddEmployee";
import LoginPage from "../pages/employeeLogin/Login";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/addEmployee" element={<AddEmployeeForm />} />
      <Route path="/employee-list" element={<AddEmployee />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/HomePage";
import AddEmployeeForm from "./addEmployee/AddEmployeeForm";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/addEmployee" element={<AddEmployeeForm />} />

    </Routes>
  );
}

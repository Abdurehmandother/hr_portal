import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/HomePage";
import AddEmployeeForm from "../pages/addEmployee/AddEmployeeForm";
import AddEmployee from "../pages/addEmployee/AddEmployee";
import LoginPage from "../pages/employeeLogin/Login";
import EmployeePage from "../pages/employee/EmployeePage";
import ProtectedRoute from "./ProtectedRoute";
import CreateLeaveForm from "../pages/leave/CreateLeave";
import LeaveApplications from "../pages/leave/LeaveApplications";

export default function AppRoutes({ setUserRole }) {
  return (
    <Routes>
      <Route
        path="/"
        element={<ProtectedRoute element={<Home />} allowedRoles={["hr"]} />}
      />
      <Route
        path="/addEmployee"
        element={
          <ProtectedRoute element={<AddEmployeeForm />} allowedRoles={["hr"]} />
        }
      />
      <Route
        path="/employee-list"
        element={
          <ProtectedRoute element={<AddEmployee />} allowedRoles={["hr"]} />
        }
      />
      <Route
        path="/leave-application"
        element={
          <ProtectedRoute
            element={<LeaveApplications />}
            allowedRoles={["hr"]}
          />
        }
      />
      <Route path="/login" element={<LoginPage setUserRole={setUserRole} />} />
      <Route
        path="/employee/:id"
        element={
          <ProtectedRoute
            element={<EmployeePage />}
            allowedRoles={["employee"]}
          />
        }
      />
      <Route
        path="/create-leave"
        element={
          <ProtectedRoute
            element={<CreateLeaveForm />}
            allowedRoles={["employee"]}
          />
        }
      />
    </Routes>
  );
}

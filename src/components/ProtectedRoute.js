import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ element, allowedRoles }) => {
  const userRole = localStorage.getItem("userRole"); // Get role from localStorage

  if (!userRole) {
    return <Navigate to="/login" replace />; // Redirect to login if not authenticated
  }

  if (!allowedRoles.includes(userRole)) {
    return <Navigate to="/" replace />; // Redirect to home if unauthorized
  }

  return element;
};

export default ProtectedRoute;

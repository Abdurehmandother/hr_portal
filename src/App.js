import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import HrNavbar from "./pages/navbar/HrNavbar";
import EmployeeNavbar from "./pages/navbar/EmployeeNavbar";
import AppRoutes from "./components/AppRoutes";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [userRole, setUserRole] = useState(localStorage.getItem("userRole"));

  useEffect(() => {
    const handleStorageChange = () => {
      setUserRole(localStorage.getItem("userRole"));
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return (
    <Router>
      {userRole === "hr" && <HrNavbar />}
      {userRole === "employee" && <EmployeeNavbar />}

      {/* Pass setUserRole to AppRoutes */}
      <AppRoutes setUserRole={setUserRole} />
    </Router>
  );
}

export default App;

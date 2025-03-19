import React, { useState } from "react";
import { Link } from "react-router-dom";

const EmployeeNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const employee = JSON.parse(localStorage.getItem("employee"));

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <h1 className="navbar-brand">Employee Portal</h1>

        {/* Toggle button for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to={`/employee/:${employee._id}`}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/create-leave">
                Apply for Leave
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default EmployeeNavbar;

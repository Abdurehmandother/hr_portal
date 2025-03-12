import React from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <a className="navbar-brand" href="/">HR Portal</a>
        <div className="ml-auto">
          <button className="btn btn-light mx-2" onClick={() => navigate("/employee-list")}>
            Employee List
          </button>
          <button className="btn btn-light" onClick={() => navigate("/leave-application")}>
            Leave Application
          </button>
        </div>
      </div>
    </nav>
  );
}

import React from "react";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div>
      {/* Home Page Content */}
      <div className="container text-center mt-5">
        <h1>Welcome to the HR Portal</h1>
        <p>Manage employees and leave applications efficiently.</p>
      </div>
    </div>
  );
}

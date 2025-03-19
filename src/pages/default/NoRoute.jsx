import React from "react";
import { useNavigate } from "react-router-dom";

export default function NoRoute() {
  const { navigate } = useNavigate();

  return (
    <div>
      <h3>No route Exists</h3>
      <button className="btn-primary" onClick={() => navigate("/")}>
        back to home
      </button>
    </div>
  );
}

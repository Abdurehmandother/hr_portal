import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { getEmployeeData } from "../../services/employeeServices";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await getEmployeeData(data);
      localStorage.setItem("employeeId", response.data.employeeId);
      alert("Login successful!");
      navigate("/dashboard"); // Redirect to dashboard or homepage
    } catch (error) {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Employee Login</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-50 mx-auto p-4 border rounded"
      >
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && (
            <small className="text-danger">{errors.email.message}</small>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            {...register("password", { required: "Password is required" })}
          />
          {errors.password && (
            <small className="text-danger">{errors.password.message}</small>
          )}
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;

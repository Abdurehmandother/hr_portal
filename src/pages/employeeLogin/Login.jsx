import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { getEmployeeData } from "../../services/employeeServices";

const LoginPage = ({ setUserRole }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await getEmployeeData(data);

      // ✅ Check correct success key
      if (response.data) {
        console.log('asd asdasds asda')
        const employeeData = response.data.employee;

        // ✅ Store data in localStorage
        localStorage.setItem("employee", JSON.stringify(employeeData));
        localStorage.setItem("userRole", employeeData.role);

        // ✅ Update the user role state in App.js
        setUserRole(employeeData.role);

        // ✅ Redirect based on role
        if (employeeData.role === "employee") {
          navigate(`/employee/${employeeData._id}`);
        } else {
          navigate("/");
        }
      } else {
        alert("Invalid email or password");
      }
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

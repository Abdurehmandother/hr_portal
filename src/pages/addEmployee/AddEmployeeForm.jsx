import React from "react";
import { useForm } from "react-hook-form";
import { addEmployee } from "../../services/hrServices";
import { useNavigate } from "react-router-dom";
export default function AddEmployeeForm() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    const newEmployee = await addEmployee(data);
    if (newEmployee) {
      alert("Employee added successfully!");
      reset();
      navigate("/employee-list");
    } else {
      alert("Failed to add employee.");
    }
  };

  return (
    <div className="container mt-4">
      <h2>Add New Employee</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && (
            <small className="text-danger">{errors.name.message}</small>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Invalid email format",
              },
            })}
          />
          {errors.email && (
            <small className="text-danger">{errors.email.message}</small>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label">Address</label>
          <input
            type="text"
            className="form-control"
            {...register("address", { required: "Address is required" })}
          />
          {errors.address && (
            <small className="text-danger">{errors.address.message}</small>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label">Designation</label>
          <input
            type="text"
            className="form-control"
            {...register("designation", {
              required: "Designation is required",
            })}
          />
          {errors.designation && (
            <small className="text-danger">{errors.designation.message}</small>
          )}
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Adding..." : "Add Employee"}
        </button>
      </form>
    </div>
  );
}

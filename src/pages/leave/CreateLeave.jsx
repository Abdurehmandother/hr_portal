import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateLeaveForm = () => {
  const [id, setId] = useState(null);
  const employee = JSON.parse(localStorage.getItem("employee"));
  useEffect(() => {
    setId(employee._id);
  }, []);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/employee/create-leave",
        data
      );
      alert("Leave application submitted successfully!");
      reset();
      navigate(`/employee/${id}`);
    } catch (error) {
      alert("Failed to submit leave application");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="text-center mb-4">Apply for Leave</h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="border p-4 rounded shadow"
          >
            {/* Name */}
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                className="form-control"
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && (
                <small className="text-danger">{errors.name.message}</small>
              )}
            </div>

            {/* Email */}
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

            {/* Leave Description */}
            <div className="mb-3">
              <label className="form-label">Leave Reason</label>
              <textarea
                className="form-control"
                rows="4"
                {...register("description", {
                  required: "Description is required",
                })}
              ></textarea>
              {errors.description && (
                <small className="text-danger">
                  {errors.description.message}
                </small>
              )}
            </div>

            {/* Status (Hidden) */}
            <input type="hidden" value="pending" {...register("status")} />

            {/* Submit Button */}
            <button type="submit" className="btn btn-primary w-100">
              Submit Leave Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateLeaveForm;

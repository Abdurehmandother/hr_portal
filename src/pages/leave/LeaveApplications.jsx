import React, { useEffect, useState } from "react";
import {
  applicationList,
  updateApplicationStatus,
} from "../../services/hrServices"; // Import update function
import "bootstrap/dist/css/bootstrap.min.css";

export default function LeaveApplications() {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const res = await applicationList();
        setApplications(res.data.applications || []);
      } catch (error) {
        console.error("Error fetching applications:", error);
      }
    }

    getData();
  }, []);

  const handleStatusChange = async (id, newStatus) => {
    try {
      // Call API to update status
      const res = await updateApplicationStatus(id, newStatus);

      if (res.data.success) {
        console.log("object is done");
        // Update UI after successful API call
        setApplications((prev) =>
          prev.map((app) =>
            app._id === id ? { ...app, status: newStatus } : app
          )
        );
      } else {
        console.error("Failed to update status");
      }
    } catch (error) {
      console.error("Error updating application status:", error);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Leave Applications</h2>

      {applications.length === 0 ? (
        <p className="text-center">No applications found.</p>
      ) : (
        <div className="table-responsive">
          <table className="table table-striped table-bordered table-hover">
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Description</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((app, index) => (
                <tr key={app._id || index}>
                  <td>{index + 1}</td>
                  <td>{app.name}</td>
                  <td>{app.email}</td>
                  <td>{app.description}</td>
                  <td>
                    <select
                      className="form-select"
                      value={app.status}
                      onChange={(e) =>
                        handleStatusChange(app._id, e.target.value)
                      }
                    >
                      <option value="pending">Pending</option>
                      <option value="approve">Approve</option>
                      <option value="reject">Reject</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

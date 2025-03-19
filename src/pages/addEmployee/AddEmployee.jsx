import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deleteEmployee, getEmployeeList } from "../../services/hrServices";
import { useNavigate } from "react-router-dom";

const AddEmployee = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    async function getList() {
      try {
        const list = await getEmployeeList();
        setEmployees(list);
      } catch (error) {
        console.log(error);
      }
    }

    getList();
  }, [employees]);

  const handleDelete = async (id) => {
    try {
      const employee = await deleteEmployee(id);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Employee List</h2>

      {/* Add Employee Button */}
      <div className="d-flex justify-content-end">
        <Link to="/addEmployee" className="btn btn-primary mb-3">
          Add New Employee
        </Link>
      </div>

      {/* Employee Table */}
      <table className="table table-bordered table-hover">
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Designation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees?.length > 0 ? (
            employees.map((emp, index) => (
              <tr key={emp._id}>
                <td>{index + 1}</td>
                <td>{emp.name}</td>
                <td>{emp.email}</td>
                <td>{emp.designation}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(emp._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center">
                No employees found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AddEmployee;

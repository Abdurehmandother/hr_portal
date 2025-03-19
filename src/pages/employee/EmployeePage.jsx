import React, { useEffect, useState } from "react";

const EmployeePage = () => {
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    // Retrieve employee data from localStorage
    const storedEmployee = localStorage.getItem("employee");
    if (storedEmployee) {
      setEmployee(JSON.parse(storedEmployee));
    }
  }, []);

  if (!employee) {
    return <h2 className="text-center mt-5">No Employee Data Found</h2>;
  }

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Employee Details</h2>
      <div className="card p-4 shadow">
        <h4>
          <strong>Name:</strong> {employee.name}
        </h4>
        <p>
          <strong>Email:</strong> {employee.email}
        </p>
        <p>
          <strong>Address:</strong> {employee.address}
        </p>
        <p>
          <strong>Designation:</strong> {employee.designation}
        </p>
      </div>
    </div>
  );
};

export default EmployeePage;

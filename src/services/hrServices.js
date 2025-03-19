import axios from "axios";

export const getEmployeeList = async () => {
  try {
    const list = await axios.get("http://localhost:5000/api/hr/employeeList");
    return list.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const addEmployee = async (employeeData) => {
  try {
    const response = await axios.post(
      `http://localhost:5000/api/hr/addEmployee`,
      employeeData
    );
    return response.data;
  } catch (error) {
    console.error(
      "Error adding employee:",
      error.response?.data || error.message
    );
    return null;
  }
};

export const deleteEmployee = async (id) => {
  try {
    const response = await axios.delete(
      `http://localhost:5000/api/hr/deleteEmployee/${id}`
    );
    return response.data;
  } catch (error) {
    console.error(
      "Error deleting employee:",
      error.response?.data || error.message
    );
    return null;
  }
};

export const loginUser = async (email, password) => {
  try {
    const response = await axios.post("http://localhost:5000/api/hr/login", {
      email,
      password,
    });

    console.log("Login Successful:", response.data);
  } catch (error) {
    console.error("Login Failed:", error.response.data);
  }
};

export const applicationList = async () => {
  try {
    const response = await axios.get(
      "http://localhost:5000/api/hr/leaveApplications"
    );
    return response;
  } catch (error) {
    console.error("error");
  }
};

export const updateApplicationStatus = async (id, status) => {
  try {
    const response = await axios.put(
      `http://localhost:5000/api/hr//change-application-status/${id}`,
      { status }
    );
    return response;
  } catch (error) {
    console.error("error");
  }
};

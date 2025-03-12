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

import axios from "axios";

export const getEmployeeData = async (data) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/api/employee/login",
      data
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

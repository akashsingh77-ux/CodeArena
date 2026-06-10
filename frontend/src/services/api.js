import axios from "axios";

const API =
  "https://online-compiler-backend-ae1t.onrender.com/api";

export const executeCode = async (payload) => {
  const response = await axios.post(
    `${API}/run`,
    payload
  );

  return response.data;
};
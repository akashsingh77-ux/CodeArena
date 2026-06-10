import axios from "axios";
const API =
  "https://codearena-backend-kbw2.onrender.com/api";

export const executeCode = async (payload) => {
  const response = await axios.post(
    `${API}/run`,
    payload
  );

  return response.data;
};
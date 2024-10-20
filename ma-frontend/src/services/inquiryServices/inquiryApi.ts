import { postRequest } from "../axiosInstance";

export const postInitChatBot = async (body: any) => {
  try {
    // url will be changed
    const res = await postRequest(
        "http://localhost:3000/",
        body
    );
    return res.data;
  } catch (error) {
    console.error("Error initializing model:", error);
    throw error;
  }
};
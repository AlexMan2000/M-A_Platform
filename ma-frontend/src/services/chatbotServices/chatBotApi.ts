import { postRequest } from "../axiosInstanc";

export const postInitChatBot = async (body: any) => {
  try {
    // url will be changed
    const res = await postRequest(
      "https://chatbot-node-server-tcemhu4p3q-uc.a.run.app/webhook",
      body
    );
    return res.data;
  } catch (error) {
    console.error("Error initializing model:", error);
    throw error;
  }
};
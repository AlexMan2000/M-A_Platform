import { postRequest } from "../axiosInstance";

export const submitBuyerInquiry = async (body: any) => {
  try {
    // url will be changed
    const res = await postRequest(
        "/inquiry/submitBuyer",
        body
    );
    return res.data;
  } catch (error) {
    console.error("Error initializing model:", error);
    throw error;
  }
};


export const submitSellerInquiry = async (body: any) => {
    try {
        console.log(body);
      // url will be changed
      const res = await postRequest(
          "/inquiry/submitSeller",
          body
      );
      return res.data;
    } catch (error) {
      console.error("Error initializing model:", error);
      throw error;
    }
  };
  
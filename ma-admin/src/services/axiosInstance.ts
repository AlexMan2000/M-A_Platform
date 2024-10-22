// axiosInstance.ts

import axios from "axios";
import FASTAPI_ENDPOINT from "./config";
// import { handleResetUserInfo } from "@/store/slices/userSlice";

// 创建一个 axios 实例
const axiosInstance = axios.create({
  baseURL: FASTAPI_ENDPOINT,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json", // 使用复杂请求 for PUT, PATCH, DELETE, POST
  },
});

// axiosInstance.interceptors.response.use(
//   (response) => {
//     // 如果响应正常，则直接返回数据
//     return response;
//   },
//   (error) => {
//     // 检查是否是未授权的错误
//     if (error.response && error.response.status === 401) {
//       // 跳转到登录页面
//       if (window.location.pathname !== "/") {
//         // 跳转到登录页面
//         handleResetUserInfo();
//         window.location.href = "/login";
//       }
//     }
//     // 返回错误以供后续处理
//     return Promise.reject(error);
//   }
// );

// GET 方法封装
export const getRequest = (url: string, params = {}, config = {}) => {
  return axiosInstance.get(url, {
    params,
    ...config,
  });
};

// POST 方法封装
export const postRequest = (url: string, data = {}, config = {}) => {
  return axiosInstance.post(url, data, {
    ...config,
  });
};

export default axiosInstance;

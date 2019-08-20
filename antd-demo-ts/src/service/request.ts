/*
 * @Author: linjianx 
 * @Date: 2019-08-14 17:16:17 
 * @Last Modified by: linjianx
 * @Last Modified time: 2019-08-15 17:24:57
 */
import { message } from 'antd'
import axios from 'axios'
const request = axios.create({
  baseURL: '/',
  headers: {
    'Content-Type': 'application/json; charset=UTF-8'
  }
})
// 添加请求拦截器
axios.interceptors.request.use((config) => {
  
  return config
}, (error) => {
  // 请求错误
  return Promise.reject(error)
})
// 添加响应拦截器
request.interceptors.response.use((response) => {
    
  const res: any = response.data;
  
  if (res.error_code) {
    message.warn(res.msg);
    throw new Error(res.msg);
  }
  // 当 error_code 为 0 时，继续返回请求
  return response.data;
})
export default request;
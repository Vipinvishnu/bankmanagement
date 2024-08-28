import { BASE_URL } from "./baseUrl";
import { commonApi } from "./commonApi";
//Login
export const loginApi = async (body)=>{
    return await commonApi('post',`${BASE_URL}/user/login`,body,"")
}


// Register 
export const registerApi = async(body) => {
    return await commonApi('POST',`${BASE_URL}/user/register`,body,"")
  }
  //Admin
  export const adminApi = async (body) => {
    return await commonApi('post',`${BASE_URL}/admin`,body,"")
  }

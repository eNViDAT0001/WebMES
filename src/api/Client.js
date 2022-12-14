import axios from 'axios'
import { stringify } from "qs";
const API_BASE_URL = "http://localhost:8082/api/v1"
const headerLogic = (token) =>{
  
  var obj = {
    "Content-Type": 'application/json',
  }
  if(token!==undefined)   obj = {...obj, "Authorization":"Bearer " + localStorage.getItem("AccessToken")}
  return obj
}
const axiosClient = axios.create({  
    baseURL: API_BASE_URL,
    headers: headerLogic(localStorage.getItem("AccessToken")),
    paramsSerializer: {
      serialize: stringify // or (params) => Qs.stringify(params, {arrayFormat: 'brackets'})
    }})

export default axiosClient


import { crudBuilder } from "./Client";
import { baseUrl } from "./Client";

const base = "http://localhost:8082/api/v1"
export const AuthApi = {
    LoginUser:(body) =>{
        return fetch(`${base}/app/login`, {
            method: "POST",
            body: body,
          });
    },
    RegisterUser:(body) =>{
        return fetch(`${base}/app/register`, {
            method: "POST",
            body: body,
          });
    }
}
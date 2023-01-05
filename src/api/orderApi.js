import { transformFilters } from "../stogare_function/listActions";
import axiosClient from "./Client";
export const OrderApi = {
  AddNewOrder: (body) => {
    const url = `/orders`;
    return axiosClient.post(url,body);
  },
  GetFullOrder: () => {
    const url = ``;
    return axiosClient.get(url);
  },
  GetOrderFromUser: (id,filter) =>{
    const url = `/orders/user/${id}?${transformFilters(filter)}`
    return axiosClient.get(url)
  }


};

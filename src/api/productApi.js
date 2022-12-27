import axiosClient from "./Client";
export const ProductApi = {
    GetComment:(id,filters) =>{
        const url = (filters) ? `/comments/product/${id}?${filters}` : `/comments/product/${id}`
        console.log(url)
        return axiosClient.get(url)
    },

}
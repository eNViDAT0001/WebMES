import axiosClient from "./Client";
export const ProductApi = {
    GetComment:(id,filters) =>{
        const url = `/comments/product/${id}?${filters}`
        return axiosClient.get(url)
    },
    AddNewComment:(idProduct,idUser,body)=>{
        const url=`/comments/product/${idProduct}/user/${idUser}`
        return axiosClient.post(url,body)
    }

}
import axiosClient from "./Client";
export const ProductApi = {
    GetComment:(id,filters) =>{
        const url = (filters) ? `/comments/product/${id}?${filters}` : `/comments/product/${id}`
        return axiosClient.get(url)
    },
    AddNewComment:(idProduct,idUser,body)=>{
        const url=`/comments/product/${idProduct}/user/${idUser}`
        console.log(body)
        return axiosClient.post(url,body)
    }

}
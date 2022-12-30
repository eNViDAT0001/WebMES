import axiosClient from "./Client";
export const ProductApi = {
    GetComment:(id,filters) =>{
        const url = `/comments/product/${id}?${filters}`
        return axiosClient.get(url)
    },
    AddNewComment:(idProduct,idUser,body)=>{
        const url=`/comments/product/${idProduct}/user/${idUser}`
        return axiosClient.post(url,body)
    },
    GetBanners:()=>{
        const url='/banners'
        return axiosClient.get(url)
    },
    GetDetailBanner:(id)=>{
        const url=`/banners/${id}/products`
        return axiosClient.get(url)
    },
    GetCategories:()=>{
        const url=`/categories/roof`
        return axiosClient.get(url)
    }

}
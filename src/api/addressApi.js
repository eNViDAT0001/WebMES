import axiosClient from "./Client"


//const province = crudBuilder(`${baseUrl}/provinces`)


export const AddressApi = {   
    ReadAllProvince: () =>{
      const url = "/provinces"
      return axiosClient.get(url)
    },
    ReadAllDistrict: (id) =>{
      const url = `/province/${id}`
      return axiosClient.get(url)
    },
    ReadAllWard: (id) =>{
      const url = `/district/${id}`
      return axiosClient.get(url)
    },
    AddressById: (id) =>{
      const url = `/user/${id}`
      return axiosClient.get(url)
    },
    AddressList: ()=>{
      const url = "/addresses"
      return axiosClient.get(url)
    },
    DetailById: (idAddress,idUser)=>{
      const url = `/addresses/${idAddress}/user/${idUser}`
      return axiosClient.get(url)
    }
}
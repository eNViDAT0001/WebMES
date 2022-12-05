import { crudBuilder } from "./Client";
import { baseUrl } from "./Client";

//const province = crudBuilder(`${baseUrl}/provinces`)


export const AddressApi = {
    
    ReadAllProvince: () =>{
        return fetch(`${baseUrl}/users?type=cursor&marker=1&limit=6`,{
            method:'GET',
            headers:{
              "Authorization": "Bearer " + localStorage.getItem("AccessToken")
              
            },
          })
        /*
        return fetch(`${baseUrl}/provinces`,{
            method:'GET',
            headers:{
              "Authorization": "Bearer" + localStorage.getItem("AccessToken")
            },
          })*/
        //return province.list(filters)
    }
}
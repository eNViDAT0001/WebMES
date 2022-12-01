import { crudBuilder } from "./fetchClient";
import { baseUrl } from "./fetchClient";

const orders = crudBuilder(`${baseUrl}/order`)

export const OrderApi = {
    ReadAllOrder:() => {
        return orders.show()
    },
    ReadOneProduct:(id)=>{
        return orders.show(id)
    },
    CreateNewProduct:(body) => {
        return orders.create(body)
    },
    UpdateOneProduct:(body) =>{
        return orders.update(body)
    },
    DeleteOneProduct:(id)=>{
        return orders.delete(id)
    }
    
}
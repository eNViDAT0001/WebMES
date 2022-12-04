import { crudBuilder } from "./Client";
import { baseUrl } from "./Client";

const products = crudBuilder(`${baseUrl}/product`)

export const ProductApi = {
    ReadFullProduct: (filters)=>{
        return products.list(filters)
    },
    ReadOneProduct:(id)=>{
        return products.show(id)
    },
    CreateNewProduct:(body) => {
        return products.create(body)
    },
    UpdateOneProduct:(body) =>{
        return products.update(body)
    },
    DeleteOneProduct:(id)=>{
        return products.delete(id)
    }
    
}

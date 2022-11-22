import { crudBuilder } from "./fetchClient";
import { baseUrl } from "./fetchClient";

const products = crudBuilder(`${baseUrl}/product`)

export const ProductApi = {
    ReadAllProduct:() => {
        return products.show()
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

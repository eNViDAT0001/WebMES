import { CATEGORY_DUMMY_DATABASE } from "../../../dummy_database/CategoryDummyDatabase"
const ProductBrand = () => {
    
    return(
        <div>
            <h1 className=" font-normal text-xl text-purple-text underline underline-offset-4 mb-4 ">Product Brand</h1>
            <div>
                {CATEGORY_DUMMY_DATABASE.branch.map(type =>(
                    <div key={type.id} className="flex flex-row items-center mb-2">
                    <input type="checkbox" className=" w-4 h-4 mr-9px accent-purple-check-product-brand"/> 
                    <h1 className=" font-normal text-base text-gray-text-product-brand ">{type.name}</h1>
                </div>))}
            </div>
        </div>)
}
export default ProductBrand
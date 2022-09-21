import { product } from "../../dummy_database/Category" 

const ListOfProducts = () => {
    return(
        <div className='flex flex-col '>
                    {product.map(data =>(
                        <div key={data.id} className = "flex flex-row justify-start w-921px h-230px my-4">
                            <img src={data.image} alt="anh san pham" className='my-4 ml-4 mr-7'></img>
                            <div className='flex flex-col mt-46px'>
                                <h1 className='flex justify-start font-normal text-lg text-purple-name-product mb-3'>{data.name}</h1>
                                <div className= "flex flex-row">
                                    <h1 className='font-normal text-purple-name-product text-sm mr-9px'>${data.priceSale}</h1>
                                    <h1 className='font-normal text-pink-price-sale text-sm line-through mb-10px'>${data.price}</h1>
                                </div>
                                <div className='text-left'>
                                    <h1 className=' text-base text-gray-text-product-content'>{data.content}</h1>
                                </div>
                            </div>
                            
                        </div>
                    ))} 
                </div>)
}

export default ListOfProducts

import {productBandCheckBox, ratingItem,product} from '../../dummy_database/category'

const HeaderBarContainer = "w-full h-47px bg-gray-header"
const HeaderFontContainer = "flex justify-start items-center flex-row flex-nowrap py-14px px-183px font-medium text-base"
const FullContainerOption = "w-1171px h-11 mt-6 flex justify-start flex-nowrap whitespace-nowrap	" //include option anh label
const ContainerOnlyOption = "ml-200px pt-2 flex items-center"
const ContainerBothFilterAndProduct = "flex flex-row justify-around mt-100px w-1171px "


const convertStar = () =>{
    return
}

const CategoryPage = () =>{
    
    return (
    <div className=" flex-auto" >
            <div className={HeaderBarContainer}>
                <div className={HeaderFontContainer}>
                    <h1>Home.Product</h1>
                    <h1 className="text-pink-500 ">.Ecommerce Acceories & Fashion item</h1>
                </div>
  
        </div>
            <div className="flex justify-center flex-row">
                <div className={FullContainerOption}>
                    <div className="flex flex-col">
                        <h1 className=" font-normal text-2xl text-purple-text">Ecommerce Acceories & Fashion item</h1>
                        <h1 className= "font-normal text-xs self-start mt-2"> About 9,620 results (0.62 seconds)</h1>
                    </div>
                <div className={ContainerOnlyOption}>
                    <h1 className="font-normal text-purple-text-2 mr-2 ">Perpage:</h1>
                    <input type = "text" className=" w-55px h-25px border " ></input>
                    <h1 className="font-normal text-purple-text-2 ml-27px"> Sort by:</h1>
                    <select className=" w-24 h-7 ml-2 border text-center text-xs text-gray-text-in-select" >
                        <option value = "0" >Best match</option>
                    </select>
                    <h1 className="font-normal text-purple-text-2 pl-6">View:</h1>
                    <input type = "text" className=" ml-60px w-40 border"></input>
                </div>
            </div>
        </div>
        <div className="flex justify-center ">
            <div className={ContainerBothFilterAndProduct}>
                <div className="flex flex-col justify-start items-start w-52 ">
                    <h1 className=" font-normal text-xl text-purple-text underline underline-offset-4 mb-4 ">Product Brand</h1>
                    <div>
                        {productBandCheckBox.map(type =>(
                            <div key = {type.id} className= "flex flex-row items-center mb-2">
                                <input type="checkbox" className=" w-4 h-4 mr-9px accent-purple-check-product-brand"/> 
                                <h1 className=" font-normal text-base text-gray-text-product-brand ">
                                    {type.name}
                                </h1>
                            </div>
                        ))}
                    </div>
                    <h1 className=" font-normal text-xl text-purple-text underline underline-offset-4 mt-27px mb-17px">Rating item</h1>
                    <div>
                        {ratingItem.map(rating =>(
                            <div key={rating.id} className= "flex flex-row items-center mb-2">
                                 <input type="checkbox" className=" w-4 h-4 mr-9px accent-yellow-check-rating-item"/>
                                 <div>{convertStar(5)}</div>
                                 <h1 className=" font-normal text-base text-black ">
                                    ({rating.amount})
                                 </h1> 
                            </div>
                        ))}
                    </div>
                </div>
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
                    
                </div>
            </div>
            
        </div>
    </div>
    
    )
    
};

export default CategoryPage;
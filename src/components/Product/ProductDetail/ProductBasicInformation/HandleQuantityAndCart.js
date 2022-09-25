import symbolIncrease from '../../../../assets/+.png'
import symbolDecrease from '../../../../assets/-.png'
import { useState } from 'react'
const HandleQuantityAndCart = () => {
    const [quantity,setQuantity] = useState(1)

    const IncreaseQuantity = () =>{
        setQuantity(quantity+1)
    }

    const DecreaseQuantity = () =>{
        if(quantity>1){
            setQuantity(quantity-1)
        }
    }
    return(<div>
        <div className="flex flex-row ">
                    <div className=" w-51px h-4 border mt-14 flex flex-row bg-gray-button-amount-product">
                        <button className="flex justify-start items-center w-3 h-4 border " onClick={DecreaseQuantity}>
                            <img src={symbolDecrease} alt="Dau -"></img>
                        </button>
                        <input className="w-6 h-4 bg-gray-button-amount-product flex justify-start items-center 
                                        text-xs text-center text-gray-text-amount-product pointer-events-none" type="text" value={quantity} ></input>
                        <button className="flex justify-start items-center w-3 h-4  border">
                            <img src={symbolIncrease} alt="Dau +" onClick={IncreaseQuantity}></img>
                        </button>
                    </div>
                    <h1 className=" mt-52px ml-14px text-base font-normal text-purple-text hover:underline"> Add to cart</h1>
                    <svg className="mt-14 ml-26 ml-7 hover:stroke-purple-check-product-brand" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.1202 3.45748C14.3239 2.66099 13.2682 2.17673 12.1451 2.09277C11.022 2.00881 9.90605 2.33073 9.00021 2.99998C8.04595 2.29021 6.8582 1.96837 5.67615 2.09926C4.49409 2.23016 3.40554 2.80407 2.62969 3.70542C1.85384 4.60678 1.44832 5.76862 1.49481 6.95699C1.54129 8.14536 2.03632 9.27198 2.88021 10.11L8.46771 15.6975C8.53743 15.7678 8.62038 15.8236 8.71177 15.8617C8.80317 15.8997 8.9012 15.9193 9.00021 15.9193C9.09922 15.9193 9.19725 15.8997 9.28864 15.8617C9.38003 15.8236 9.46299 15.7678 9.53271 15.6975L15.1202 10.11C15.5572 9.67327 15.9039 9.15474 16.1404 8.58401C16.3769 8.01327 16.4986 7.40153 16.4986 6.78373C16.4986 6.16593 16.3769 5.55419 16.1404 4.98346C15.9039 4.41272 15.5572 3.89419 15.1202 3.45748ZM14.0627 9.05248L9.00021 14.1075L3.93771 9.05248C3.49159 8.60451 3.18769 8.03477 3.06413 7.41474C2.94057 6.79471 3.00285 6.152 3.24317 5.56723C3.48349 4.98246 3.89113 4.48168 4.41497 4.1277C4.9388 3.77372 5.5555 3.58231 6.18771 3.57748C7.03229 3.57955 7.84153 3.91673 8.43771 4.51498C8.50743 4.58528 8.59038 4.64107 8.68177 4.67915C8.77317 4.71723 8.8712 4.73683 8.97021 4.73683C9.06922 4.73683 9.16725 4.71723 9.25864 4.67915C9.35003 4.64107 9.43299 4.58528 9.50271 4.51498C10.1165 3.98314 10.9093 3.70434 11.7209 3.735C12.5324 3.76566 13.302 4.10349 13.8738 4.68012C14.4457 5.25675 14.7771 6.02911 14.8011 6.84087C14.825 7.65264 14.5396 8.44317 14.0027 9.05248H14.0627Z" fill="#535399"/>
                    </svg>
                </div>
    </div>)

}
export default HandleQuantityAndCart
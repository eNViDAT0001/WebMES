import symbolIncrease from '../../assets/+.png'
import symbolDecrease from '../../assets/-.png'
import { CART_DUMMY_DATABASE } from '../../dummy_database/CartDummyDatabase'


const ListCart = () => {
    return(<div className=" w-[65%]">  
                <div>

                {CART_DUMMY_DATABASE.map(data=>(
                    <div key={data.id} className="mb-8 shadow-lg">
                        <h1 className= "text-[#101075] text-3xl  mb-4 font-['Josefin_Sans']">ShopName: {data.providerName}</h1>
                        <div className="flex flex-row justify-between items-center h-[52px] px-[10%] font-['Poppins_Bold'] text-sm font-bold border" >
                            <h1>PRODUCT</h1>
                            <h1 className=" ml-[180px]">PRICE</h1>
                            <h1 className="ml-4">QUANTITY</h1>
                            <h1 className="mr-[-10px]">TOTAL</h1>
                        </div>
                        {data.cartItems.map(item=>(
                            <div key = {item.id} className="flex flex-row justify-between items-center h-[185px] px-[10%] border">
                            <img src={item.images} alt="anh san pham" className="h-[60px] w-[80px] "></img>
                            <h1>{item.name}</h1>
                            <price>{item.price}$</price>
                        <div className="flex justify-start">
                            <button className="flex justify-center items-center w-[45px] h-[45px] border ">
                                <img src={symbolDecrease} alt="Dau -"></img>
                            </button>
                            <input className="w-[45px] h-[45px] bg-[#f7f7f7] flex justify-start items-center 
                                        text-xs text-center pointer-events-none" type="text" value="1" ></input>
                            <button className="flex justify-center items-center w-[45px] h-[45px]  border">
                                <img src={symbolIncrease} alt="Dau +"></img>
                            </button>
                        </div>
                        <h1>{item.price}$</h1>
                    </div>
                    
                    ))}
                    <div className='h-[100px] border flex justify-between items-center px-[10%] '>
                        <input type="text" className='w-[35%] h-[55px] min-w-[100px] border rounded-3xl text-center' placeholder='Coupon code'></input>
                        <button className="w-[25%] min-w-[100px] border h-[45px] rounded-3xl bg-[#e6e6e6] hover:bg-[#717fe0] hover:text-white">
                            APPLY COUPON
                        </button>
                        <button className="w-[25%] min-w-[100px] border h-[45px] rounded-3xl bg-[#e6e6e6] hover:bg-[#717fe0] hover:text-white">
                            UPDATE CART
                        </button>
                        </div>
                    </div>
                ))}    
            </div>
                
    </div>)
}

export default ListCart
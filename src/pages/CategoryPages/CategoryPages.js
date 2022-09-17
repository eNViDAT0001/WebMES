

const CategoryPage = () =>{
    return (
    <div className=" flex-auto" >
        <div className="w-full h-47px bg-gray-header ">
            <div className="py-14px px-375px ">
                <div className = "font-medium text-base">
                    <div className="flex justify-start items-center flex-row flex-nowrap "> 
                        <h1>Home.Product</h1>
                        <h1 className="font-medium text-pink-500">.Ecommerce Acceories & Fashion item</h1>
                    </div>
                </div>
            </div>
        </div>
        <div className="w-full h-11 px-375px py-6">
            <div className="flex justify-start flex-nowrap">
                <div className="flex flex-col">
                    <h1 className=" font-normal text-2xl text-purple-text">Ecommerce Acceories & Fashion item</h1>
                    <h1 className= "font-normal text-xs self-start pt-2"> About 9,620 results (0.62 seconds)</h1>
                </div>
                <div className=" pl-200px flex items-center">
                    <h1 className="font-normal text-purple-text-2 pr-2 ">Perpage</h1>
                    <input type = "text" className=" w-55px h-25px border " ></input>
                    <h1 className="font-normal text-purple-text-2  "> Sort by:</h1>
                </div>
            </div>
        </div>
        <div className="w-full px-375px py-20">
            <h1>Khanh</h1>
        </div>
    </div>
    )
    
};

export default CategoryPage;
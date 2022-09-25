const PriceAndType = () => {
    return(
        <div>
            <div className="flex flex-row mt-14px text-base">
                    <h1 className="mr-18px text-purple-text ">$32.00</h1>
                    <h1 className=" text-pink-price-sale line-through">$32.00</h1>
                </div>
                <h1 className="mt-3 text-base text-purple-type-product-detail">Type</h1>
                <div className="flex flex-row mt-4 ">
                    <button type="button" className="border-2 border-black  w-55px h-5 flex justify-center items-center mr-2 rounded hover:bg-pink-price-sale " >
                        <h1>A</h1>
                    </button>
                    <button type="button" className="border-2 border-black w-55px h-5 flex justify-center items-center rounded hover:bg-pink-price-sale" >
                        <h1>B</h1>
                    </button>
                </div>
        </div>
    )
}
export default PriceAndType
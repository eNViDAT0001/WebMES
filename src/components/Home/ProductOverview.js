

const ListProductOverview = [
    {
        id: 0,
        img: "https://preview.colorlib.com/theme/cozastore/images/xproduct-01.jpg.pagespeed.ic.6WHvZRJRuO.webp",
        title: "Esprit Ruffle Shirt",
        price: 16.64,
    },
    {
        id: 1,
        img: "https://preview.colorlib.com/theme/cozastore/images/xproduct-01.jpg.pagespeed.ic.6WHvZRJRuO.webp",
        title: "Esprit Ruffle Shirt",
        price: 16.64,
    },
    {
        id: 2,
        img: "https://preview.colorlib.com/theme/cozastore/images/xproduct-01.jpg.pagespeed.ic.6WHvZRJRuO.webp",
        title: "Esprit Ruffle Shirt",
        price: 16.64,
    },
    {
        id: 3,
        img: "https://preview.colorlib.com/theme/cozastore/images/xproduct-01.jpg.pagespeed.ic.6WHvZRJRuO.webp",
        title: "Esprit Ruffle Shirt",
        price: 16.64,
    },
    {
        id: 4,
        img: "https://preview.colorlib.com/theme/cozastore/images/xproduct-01.jpg.pagespeed.ic.6WHvZRJRuO.webp",
        title: "Esprit Ruffle Shirt",
        price: 16.64,
    }
]



const ProductOverview = () =>{
    return(
        <div className="flex justify-center">
            <div className="mt-20 w-[80%] ">
                <h1 className=" text-4xl font-['Poppins_Bold'] font-extrabold">PRODUCT OVERVIEW</h1>

                <div className="flex flex-row justify-between flex-wrap mt-[100px] ">
                    {ListProductOverview.map(data => (
                        <div key = {data.id} className = "w-[21%] mb-10 hover:scale-110 ">
                            <img 
                                src = {data.img}
                                alt="anh san pham"
                            />
                            <div className="flex flex-row mt-2">
                                <h1 className=" text-sm font-['Poppins_Regular'] text-gray-400 hover:text-blue-400">{data.title}</h1>
                            </div>
                            <h1 className="mt-2 text-sm font-['Poppins_Regular']">${data.price}</h1>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        
    )
}

export default ProductOverview
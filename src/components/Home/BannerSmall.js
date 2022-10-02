import bannerSmall1 from '../../assets/bannerSmall1.webp'
import bannerSmall2 from '../../assets/bannerSmall2.webp'
import bannerSmall3 from '../../assets/bannerSmall3.webp'

const ListBannerSmall = [
    {
        id: 1,
        title: "Women",
        content: "Spring 2018",
        img: bannerSmall1,
    },
    {
        id: 2,
        title: "Men",
        content: "Spring 2018",
        img: bannerSmall2,
    },
    {
        id: 3,
        title: "Accessories",
        content: "New Trend",
        img: bannerSmall3,
    },
]


const BannerSmall = () => {
    return(
        <div className="flex justify-center mt-20">
            <div className="w-[80%] h-[250px]  flex flex-row justify-between">
                {ListBannerSmall.map(data =>(
                    <div key = {data.id} className = "w-[30%] border">
                        <img src = {data.img} alt= "anh banner nho"></img>
                    </div>
                ))}
            </div>
        
        </div>
    )
}

export default BannerSmall
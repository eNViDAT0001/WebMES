import Fashion1 from '../../assets/fashion1.jpg'
import Fashion2 from '../../assets/fashion2.jpg'
import Fashion3 from '../../assets/fashion3.jpg'
import Fashion4 from '../../assets/fashion4.jpg'
import { useState } from 'react'
import { AiOutlineVerticalLeft, AiOutlineVerticalRight } from "react-icons/ai";
const BannerList = [
    {
        id: 0,
        title: "Welcome Collection 2018",
        content: "New Seasons",
        img: Fashion1,
    },
    {
        id: 1,
        title: "Men new Season",
        content: "Jackets & Coats",
        img: Fashion2,
    },
    {
        id: 2,
        title: "Men Collection 2018",
        content: "New Arrivals",
        img: Fashion3,
    },
    {
        id: 3,
        title: "Welcome Man 2019",
        content: "New Arrivals",
        img: Fashion4,
    }

]

const Banner = () => {
    const [indexBanner,setIndexBanner] = useState(0)

    const onPrevClickHandler = () => {
        if(indexBanner===0){ setIndexBanner(BannerList.length-1);}
        else setIndexBanner(indexBanner-1);
    }

    const onNextClickHandler = () => {
        if(indexBanner===BannerList.length-1) {setIndexBanner(0);}
        else setIndexBanner(indexBanner+1);
    }
    return(
        <div className="flex justify-center px-[15%] bg-red-100">
            <div className="w-[90%] h-[500px]">
                <img src={BannerList[indexBanner].img} alt="Anh banner" className="w-full h-full"></img>
                
            </div>
            <div className="w-full flex absolute top-1/2 transform -translate-y-1/2 py-2 px-3 justify-between">
                    <button onClick={onPrevClickHandler}><AiOutlineVerticalRight size={30} className="bg-black text-white rounded-full bg-opacity-50 hover:bg-opacity-100 transition"/></button>
                    <button onClick={onNextClickHandler}><AiOutlineVerticalLeft size={30} className="bg-black text-white rounded-full bg-opacity-50 hover:bg-opacity-100 transition"/></button>
            </div>
        </div>
    )
}

export default Banner
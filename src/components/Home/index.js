import Banner from "./Banner"
import BannerSmall from "./BannerSmall"
import ProductOverview from './ProductOverview'
const Home = () =>{
    return(
    <div className="flex flex-col">
        <Banner />
        <BannerSmall />
        <ProductOverview />
    </div>)
}

export default Home
import HomeOffer from "../../components/HomeOffer";
import HomeBrand from "../../components/Product/HomeBrand";
import HomeFeaturedProduct from "../../components/Product/HomeFeaturedProduct";
import HomeLatestProduct from "../../components/Product/HomeLatestProduct";
import ImageSlider from "../../components/Slider/ImageSlider";
import { BANNER_DUMMY } from "../../dummy_database/BannerDummyDatabase";
const containerStyles = {
  padding: "10px",
  width: "1000px",
  height: "500px",
  margin: "0 auto",
};
const HomePage = () => {
  return (
    <div className="justify-center">
      <div style={containerStyles}>
        <ImageSlider slides={BANNER_DUMMY} />
      </div>
      <div className="text-center my-5 text-3xl">
        <button className="hover:text-gray-700 duration-300">
          Latest Products
        </button>
        <HomeLatestProduct/>
      </div>
      <div className="text-center my-5 text-3xl">
        <button className="hover:text-gray-700 duration-300">
          Featured Products
        </button>
        <HomeFeaturedProduct/>
      </div>
      <div className="text-center my-5 text-3xl">
        <button className="hover:text-gray-700 duration-300">
          What MES Offer!
        </button>
        <HomeOffer/>
      </div>
      <div className="text-center my-5 text-3xl">
        <button className="hover:text-gray-700 duration-300">Top Brand</button>
        <HomeBrand/>
      </div>
      <div className="md:flex justify-center">
        <div className="mr-5">Discount 1</div>
        <div className="mr-5">Discount 2</div>
        <div className="mr-5">Discount Column</div>
      </div>
    </div>
  );
};

export default HomePage;

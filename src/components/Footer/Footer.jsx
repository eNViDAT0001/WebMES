import { ICONS } from "../../dummy_database/FooterDummyDatabase";
import "./Footer.css";
import { InfoContainer } from "./FooterInfo";
import SocialIcons from "./SocialIcons";

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white">
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19] pt-3">
        <h1 className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5">
          <span className="text-teal-400">MES</span> always with you
        </h1>
        <div>
          <input
            type="text"
            placeholder="Enter..."
            className="text-gray-800 sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none"
          ></input>
          <button className="bg-teal-400 hover:bg-teal-500 duration-300 px-5 py-2.5 rounded-md text-white">
            Register News
          </button>
        </div>
      </div>
      <div className="md:flex sm:px-12 px-4 bg-[#ffffff19] py-2">
        <h1 className="">Contact Info:</h1>
      </div>
      <InfoContainer />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center pt-2 text-gray-400 text-sm pb-8">
        <span>© 2022 Apply. All rights reserved.</span>
        <span>Terms · Privacy Policy</span>
        <SocialIcons Icons={ICONS} />
      </div>
    </div>
  );
};

export default Footer;

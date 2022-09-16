import { Fragment } from "react";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import "./Header.css";
const Header = (props) => {
  return (
    <Fragment>
      <div className="header">
        <AiOutlineMail className="icon-mail"/>
        <div className="header-font"> mhhasanul@gmail.com </div>
        <AiOutlinePhone className="icon-phone"/>
        <div className="header-font"> (012345)6789 </div>
        <div className="header-font" style={{ marginLeft: 434 }}>
          English{" "}
        </div>
      </div>
    </Fragment>
  );
};

export default Header;

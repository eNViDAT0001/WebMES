import { useEffect } from "react";
import { HeaderMain } from "./HeaderMain";
import { HeaderUser } from "./HeaderUser";
import { AuthApi } from "../../api/AuthApi";
const Header = (props) => {
  
  return (
    <div>
      <HeaderMain />
      <HeaderUser />
    </div>
  );
};

export default Header;

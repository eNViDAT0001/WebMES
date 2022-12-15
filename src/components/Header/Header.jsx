import { useEffect } from "react";
import { HeaderMain } from "./HeaderMain";
import { HeaderUser } from "./HeaderUser";
import { AuthApi } from "../../api/AuthApi";
const Header = (props) => {
  useEffect(() => {
    const UseRefreshToken = async (body) => {
      await AuthApi.RefreshToken(body).then((response) => {
        if (response.status === 200) {
          localStorage.setItem(
            "AccessToken",
            response.data.data.access_token
          );
          localStorage.setItem(
            "AccessTokenExpiry",
            response.data.data.access_token_expiry
          );
          localStorage.setItem(
            "RefreshToken",
            response.data.data.refresh_token
          );
          localStorage.setItem(
            "RefreshTokenExpiry",
            response.data.data.refresh_token_expiry
          );
        }
      });
    };
    if (localStorage.getItem("RefreshToken") !== undefined) {
      const body = {
        refresh_token: localStorage.getItem("RefreshToken"),
      };
      UseRefreshToken(body);
    }
    else localStorage.clear()
    
  });
  return (
    <div>
      <HeaderMain />
      <HeaderUser />
    </div>
  );
};

export default Header;

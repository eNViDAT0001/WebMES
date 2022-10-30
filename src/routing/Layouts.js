import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

export const LoginLayOut = () => {
  return(
    <div>
      <Outlet></Outlet>
    </div>
  )
}
export const UserLayout = () => {
  return (
    <div>
      <Header />
        <Outlet></Outlet>
      <Footer />
    </div>
    
  );
};
export const AdminLayOut = () => {
    return (
      <div>
        <Outlet></Outlet>
      </div>
    );
  };

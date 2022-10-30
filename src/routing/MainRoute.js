import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/AuthPages/LoginPage/LoginPage";
import AddressPage from "../pages/AccountPages/AddressPage";
import AddressDetailPage from "../pages/AccountPages/AddressDetailPage";
import AccountDetailPage from "../pages/AccountPages/AccountDetailPage";
import AccountOrderPage from "../pages/AccountPages/AccountOrderPage";
import RegisterPage from "../pages/AuthPages/RegisterPage/RegisterPage";
import CartPage from "../pages/CartPages/CartPage";
import CategoryPage from "../pages/CategoryPages/CategoryPages";
import HomePage from "../pages/HomePages/HomePages";
import OrderPage from "../pages/OrderPages/OrderPage";
import ProductPage from "../pages/Product/ProductPage";
import ContactPage from "../pages/StorePages/ContactPage";
import FAQPage from "../pages/StorePages/FAQPage";
import NotFoundPage from "../pages/StorePages/NotFoundPage";
import OrderCompletedPage from "../pages/StorePages/OrderCompletedPage";
//test git
import { UserLayout } from "./Layouts";
function MainRoute() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        
        <Route element={<UserLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/category" element={<CategoryPage />} />
          <Route path="/product" element={<ProductPage />} />


          <Route path="/order" element={<OrderPage />} />
          <Route path="/shopping-cart" element={<CartPage />} />
    
          <Route path="/account-order" element={<AccountOrderPage />} /> 
          <Route path="/address" element={<AddressPage />} />
          <Route path="/detail" element={<AccountDetailPage />} />
          <Route path="/address-detail" element={<AddressDetailPage />} />
          
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/notfound" element={<NotFoundPage />} />
          <Route path="/completed" element={<OrderCompletedPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default MainRoute;

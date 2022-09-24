import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/AuthPages/LoginPage/LoginPage";
import AddressPage from "../pages/AccountPages/AddressPage";
import AddressDetailPage from "../pages/AccountPages/AddressDetailPage";
import AccountDetailPage from "../pages/AccountPages/AccountDetailPage";
import AccountOrderPage from "../pages/AccountPages/AccountOrderPage";
import RegisterPage from "../pages/AuthPages/RegisterPage/RegisterPage";
import CartPage from "../pages/CartPages/CartPage";
import CategoryPage from "../pages/CategoryPages/CategoryPages";
import HomePage from "../pages/HomePages/HomePage";
import OrderPage from "../pages/OrderPages/OrderPage";
import ProductPage from "../pages/Product/ProductPage";
import ContactPage from "../pages/StorePages/ContactPage";
import FAQPage from "../pages/StorePages/FAQPage";
import NotFoundPage from "../pages/StorePages/NotFoundPage";
import { PathLayout, TitleWithPathLayout } from "./Layouts";

//test git
function MainRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        
       {/*<Route element={PathLayout}>
          <Route path="/category" element={<CategoryPage />} />
          <Route path="/product" element={<ProductPage />} />
          </Route>*/}
          <Route path="/category" element={<CategoryPage />} />
          <Route path="/product" element={<ProductPage />} />
        <Route element={TitleWithPathLayout}>
          <Route path="/order" element={<OrderPage />} />
          {/* <Route path="/payment" element={<Payment />} /> */}
          <Route path="/shopping-cart" element={<CartPage />} />
        </Route>
        {/*<Route path="/account" element={PathLayout}>
          <Route path="/address" element={<AddressPage />} />
          <Route path="/detail" element={<AccountDetailPage />} />
          <Route path="/address-detail" element={<AddressDetailPage />} />
          <Route path="/order" element={<AccountOrderPage />} /> 
        </Route>*/}

          <Route path="/address" element={<AddressPage />} />
          <Route path="/detail" element={<AccountDetailPage />} />
          <Route path="/address-detail" element={<AddressDetailPage />} />
          <Route path="/order" element={<AccountOrderPage />} /> 


        <Route element={TitleWithPathLayout}>
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/notfound" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default MainRoute;

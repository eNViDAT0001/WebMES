import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/AuthPages/LoginPage/LoginPage";
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
        <Route path="/account" element={PathLayout}>
          {/* <Route path="/address" element={<Address />} />
          <Route path="/detail" element={<AccountDetail />} />
          <Route path="/address-detail" element={<AddressDetail />} />
          <Route path="/order" element={<AccountOrder />} /> */}
        </Route>
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

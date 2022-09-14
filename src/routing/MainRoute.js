import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../screens/home/Home";
import AccountDetail from "../screens/account/accountDetail/Detail";
import AccountOrder from "../screens/account/accountOrder/AccountOrder";
import Address from "../screens/account/address/Address";
import AddressDetail from "../screens/account/addressDetail/AddressDetail";
import Login from "../screens/auth/login/Login";
import Register from "../screens/auth/register/Register";
import Category from "../screens/category/Category";
import Contact from "../screens/contact/Contact";
import Order from "../screens/order/Order";
import Payment from "../screens/payment/Payment";
import Product from "../screens/product/Product";
import ShoppingCart from "../screens/shoppingCart/ShoppingCart";
function MainRoute() {
  return (
    <BrowserRouter>
      <Routes >
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/product" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/order" element={<Order />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/shopping-cart" element={<ShoppingCart />} />
        <Route path="/account/address" element={<Address />} />
        <Route path="/account/detail" element={<AccountDetail />} />
        <Route path="/account/address-detail" element={<AddressDetail />} />
        <Route path="/account/order" element={<AccountOrder />} />
      </Routes>
    </BrowserRouter>
  );
}

export default MainRoute;

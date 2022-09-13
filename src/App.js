import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './screens/Home/home';
import AccountDetail from './screens/Account/AccountDetail/detail';
import AccountOrder from './screens/Account/AccountOrder/accountOrder';
import Address from './screens/Account/Address/address';
import AddressDetail from './screens/Account/AddressDetail/addressDetail';
import Login from './screens/auth/Login/login';
import Register from './screens/auth/Register/register';
import Category from './screens/Category/category';
import Contact from './screens/Contact/contact';
import Order from './screens/Order/order';
import Payment from './screens/Payment/payment';
import Product from './screens/Product/product';
import ShoppingCart from './screens/ShoppingCart/shoppingCart';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />

        <Route path='/' element={<Home />} />
        <Route path='/category' element={<Category />} />
        <Route path='/product' element={<Product />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/order' element={<Order />} />
        <Route path='/payment' element={<Payment />} />
        <Route path='/shopping-cart' element={<ShoppingCart />} />

      
        <Route path='/account/address' element={<Address />} />
        <Route path='/account/detail' element={<AccountDetail />} />
        <Route path='/account/address-detail' element={<AddressDetail />} />
        <Route path='/account/order' element={<AccountOrder />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;

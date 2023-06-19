import Home from './components/Home';
import HomeHeader from './components/HomeHeader';
import Brands from './components/Brands'
import PageFooter from './components/PageFooter';
import Copyright from './components/Copyright';
import myAccount from './pages/MyAccount';
import shopCatalog from './pages/ShopCatalog';
import ProductDetails from './pages/ProductDetails';
import Wishlist from './pages/WishList';
import ShoppingCart from './pages/ShoppingCart';
import Checkout from './pages/Checkout';
import OrderCompleted from './pages/OrderCompleted';
import MyOrders from './pages/MyOrders';
import { ConfigProvider } from 'antd';
import { Switch, Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <div>
      <ConfigProvider theme={{token: {colorPrimary: '#e628a6', colorLink: '#e628a6', colorLinkHover:'#ecb0d8'}}}>
        <HomeHeader/>
        <Switch>
          <Route path="/home" component={Home}/>
          <Route path="/myAccount" component={myAccount}/>
          <Route path="/shopCatalog" component={shopCatalog}/>
          <Route path="/productDetails" component={ProductDetails}/>
          <Route path="/wishlist" component={Wishlist}/>
          <Route path="/shoppingCart" component={ShoppingCart}/>
          <Route path="/checkout" component={Checkout}/>
          <Route path="/orderCompleted" component={OrderCompleted}/>
          <Route path="/myOrders" component={MyOrders}/>
          <Redirect to="/home"/>
        </Switch>
        <Brands/>
        <PageFooter/>
        <Copyright/>
      </ConfigProvider>
    </div>
  );
}

export default App;

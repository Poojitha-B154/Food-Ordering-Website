import "./App.css";
import Home from "./Components/Home";
import Footer from "./Components/layout/Footer";
import Header from "./Components/layout/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Menu from "./Components/Menu";
import Cart from "./Components/Cart/Cart";
import Delivery from "./Components/Cart/Delivery";
import Login from "./Components/user/Login";
import Register from "./Components/user/Register";
import { useEffect, useState } from "react";
import { loadUser } from "./actions/userActions";
import store from "./store";
import Profile from "./Components/user/Profile";
import UpdateProfile from "./Components/user/UpdateProfile";
import ForgotPassword from "./Components/user/ForgotPassword";
import NewPassword from "./Components/user/NewPassword";
import ConfirmOrder from "./Components/Cart/ConfirmOrder";
import Payment from "./Components/Cart/Payment";

//Payment
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import OrderSuccess from "./Components/Cart/OrderSuccess";
import ListOrders from "./Components/order/ListOrders";
import OrderDetails from "./Components/order/OrderDetails";

function App() {
  const [stripeApiKey, setStripeApiKey] = useState("");
  const { isAuthenticated } = useSelector((state) => state.auth);

  // dispatched exactly once when the component is first rendered , and check if user is Authenticated
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  // this useEffect will trigger when isAuthenticated variable changes
  useEffect(() => {
    async function getStripeApiKey() {
      try {
        const { data } = await axios.get("/api/v1/stripeapi");
        setStripeApiKey(data.stripeApiKey);
      } catch (error) {
        console.error("Error fetching Stripe API key:", error);
      }
    }
    if (isAuthenticated) {
      getStripeApiKey();
    }
  }, [isAuthenticated]);

  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container container-fluid">
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route
              path="/eats/stores/search/:keyword"
              element={<Home />}
              exact
            />
            <Route path="/eats/stores/:id/menus" element={<Menu />} exact />
            <Route path="/cart" element={<Cart />} exact />
            <Route path="/delivery" element={<Delivery />} exact />

            {/* User  */}
            <Route path="/users/login" element={<Login />} />
            <Route path="/users/signup" element={<Register />} />
            <Route path="/users/me" element={<Profile />} />
            <Route path="/users/me/update" element={<UpdateProfile />} exact />
            <Route
              path="/users/forgetPassword"
              element={<ForgotPassword />}
              exact
            />
            <Route
              path="/users/resetPassword/:token"
              element={<NewPassword />}
              exact
            />
            <Route path="/confirm" element={<ConfirmOrder />} />

            {/* //payment */}
            {stripeApiKey && (
              <Route
                path="/payment"
                element={
                  <Elements stripe={loadStripe(stripeApiKey)}>
                    <Payment />
                  </Elements>
                }
              />
            )}

            {/* OrderSuccess */}
            <Route path="/success" element={<OrderSuccess />} />
            {/* OrderList */}
            <Route path="/eats/orders/me/myOrders" element={<ListOrders />} />
            <Route path="/eats/orders/:id" element={<OrderDetails />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

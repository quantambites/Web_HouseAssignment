// App.jsx
import { Route, Routes, Navigate } from "react-router-dom";
import AuthLayout from "@/component/authComponent/Layout";
import AuthLogin from "./pages/authPages/login";
import AuthRegister from "./pages/authPages/signup";
import ShoppingLayout from "@/component/pageComponent/Layout";
import Home from "./pages/home";
import Buy from "./pages/buy";
import Sell from "./pages/sell";
import Rent from "./pages/rent";
import About from "./pages/about";
import Contact from "./pages/contact";
import UnauthPage from "./pages/others/unauth";
import NotFound from "./pages/others/notFound";
import { useAuth } from "./services/authContext";

const App = () => {
  const { userLoggedIn } = useAuth();

  return (
    <Routes>
      {/* ROOT: decide explicitly, don't wrap in CheckAuth with no children */}
      <Route
        path="/"
        element={
          <Navigate to="/shop/home" replace />
        }
      />

      {/* AUTH: guest-only guard (do not use CheckAuth here) */}
      <Route
        path="/auth"
        element={
          !userLoggedIn
            ? <AuthLayout />
            : <Navigate to="/shop/home" replace />
        }
      >
        <Route path="login" element={<AuthLogin />} />
        <Route path="register" element={<AuthRegister />} />
      </Route>

      {/* SHOP: require-auth guard (this is what CheckAuth is for) */}
      <Route
        path="/shop"
        element={
            <ShoppingLayout />
        }
      >
        <Route path="home" element={<Home />} />
        <Route path="buy" element={<Buy />} />
        <Route path="rent" element={<Rent />} />
        <Route path="sell" element={<Sell />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>

      <Route path="/unauth-page" element={<UnauthPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;

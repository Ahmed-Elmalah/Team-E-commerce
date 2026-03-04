import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import MainLayout from "./Layouts/MainLayout";
import FavoritePage from "./Pages/FavoritePage";
import ProductDetailsPage from "./Pages/ProductDetailsPage";
import CartPage from "./Pages/CartPage";
import LoginPage from "./Pages/LoginPage";
import SignUpPage from "./Pages/SignUpPage"

export default function App() {
  return (
    <div className="w-full">
      <BrowserRouter>
        <Routes>
          {/* login & sinup routing */}
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/signup" element={<SignUpPage/>} />

          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="cart" element={<CartPage/>} />
            <Route path="favorite" element={<FavoritePage/>} />
            <Route path="product/:id" element={<ProductDetailsPage />} />
          </Route>

          {/* 404 Error */}
          <Route path="*" element={<h1>Error 404 | Page Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

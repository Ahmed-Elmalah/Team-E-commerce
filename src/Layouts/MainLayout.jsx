import { Outlet } from "react-router-dom";
import Footer from "../Components/HomeComponents/Footer";
import Header from "../Components/HomeComponents/Header";

export default function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

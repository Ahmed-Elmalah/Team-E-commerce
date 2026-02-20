// src/Pages/ProductDetailsPage.jsx
import { Link } from "react-router-dom";
import ImageGallery from "../Components/ProductDetailsComponents/ImageGallery";
import ProductInfo from "../Components/ProductDetailsComponents/ProductInfo";

export default function ProductDetailsPage() {
  return (
    <div className="grow w-full max-w-360 mx-auto px-4 sm:px-6 lg:px-10 py-8 md:py-12 bg-white antialiased">
      {/* Breadcrumbs */}
      <nav className="flex mb-8 text-sm font-medium text-slate-500 dark:text-slate-400">
        <Link to="/" className="hover:text-primary transition-colors">
          Home
        </Link>
        <span className="mx-2">/</span>
        <a href="#" className="hover:text-primary transition-colors">
          Audio
        </a>
        <span className="mx-2">/</span>
        <span className="text-[#0d121c] dark:text-slate-100">Headphones</span>
      </nav>

      {/* Main Content Grid */}
      <div className="lg:grid lg:grid-cols-2 lg:gap-12 xl:gap-16">
        {/* Left Column: Image Gallery */}
        <ImageGallery />

        {/* Right Column: Product Details */}
        <ProductInfo />
      </div>
    </div>
  );
}
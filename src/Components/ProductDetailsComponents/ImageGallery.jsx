// src/Components/ProductDetailsComponents/ImageGallery.jsx
import { useState } from "react";
import { FiHeart } from "react-icons/fi";

export default function ImageGallery() {
  // Mock images array
  const images = [
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000",
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=400", 
    "https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=400",    
    "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=400",  
  ];

  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div className="flex flex-col gap-4">
      {/* Main Image */}
      <div className="aspect-square w-full bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-700 shadow-sm relative group">
        <img
          alt="Product Main"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          src={mainImage}
        />
        <div className="absolute top-4 right-4">
          <button className="flex items-center justify-center size-10 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-full shadow-sm hover:text-red-500 transition-colors text-slate-400 cursor-pointer border-none">
            <FiHeart size={20} />
          </button>
        </div>
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-3 gap-4">
        {images.slice(1).map((img, index) => (
          <button
            key={index}
            onClick={() => setMainImage(img)}
            className={`aspect-square rounded-lg overflow-hidden border-2 cursor-pointer transition-colors ${
              mainImage === img
                ? "border-primary ring-2 ring-primary/20 ring-offset-2 dark:ring-offset-background-dark"
                : "border-slate-200 dark:border-slate-700 hover:border-primary/50 opacity-70 hover:opacity-100"
            }`}
          >
            <img
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
              src={img}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
// src/Components/ProductDetailsComponents/ProductInfo.jsx
import { useState } from "react";
import { MdStar, MdStarBorder } from "react-icons/md";
import {
  FiMinus,
  FiPlus,
  FiShoppingBag,
  FiTruck,
  FiShield,
} from "react-icons/fi";

export default function ProductInfo() {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("Midnight Blue");
  const [selectedModel, setSelectedModel] = useState("Standard");

  // Handlers for quantity
  const handleIncrease = () => setQuantity((prev) => prev + 1);
  const handleDecrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="mt-10 lg:mt-0 flex flex-col text-left">
      {/* Title & Price Section */}
      <div className="mb-6 border-b border-slate-100 pb-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900  tracking-tight mb-2">
          Ultra-Fidelity Wireless Over-Ear Headphones
        </h1>

        {/* Rating */}
        <div className="flex items-center gap-4 mt-3 mb-5">
          <div className="flex items-center text-yellow-400 text-sm">
            <MdStar size={20} />
            <MdStar size={20} />
            <MdStar size={20} />
            <MdStar size={20} />
            <MdStarBorder
              size={20}
              className="text-slate-300 "
            />
          </div>
          <span className="text-sm font-medium text-primary hover:underline cursor-pointer">
            124 Reviews
          </span>
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-3">
          <span className="text-3xl font-bold text-slate-900 ">
            $299.00
          </span>
          <span className="text-lg text-slate-400 line-through">$349.00</span>
          <span className="px-2.5 py-0.5 rounded-full bg-green-100 text-green-700 text-xs font-bold uppercase tracking-wide">
            Save 15%
          </span>
        </div>
      </div>

      <div className="space-y-8">
        {/* Description */}
        <p className="text-base text-slate-600  leading-relaxed">
          Experience immersive sound with active noise cancellation and a
          30-hour battery life. Designed for audiophiles, these headphones
          feature memory foam ear cups for all-day comfort and seamless
          Bluetooth 5.2 connectivity.
        </p>

        {/* Color Selection */}
        <div>
          <h3 className="text-sm font-medium text-slate-900  mb-4">
            Color:{" "}
            <span className="text-slate-500 font-normal">{selectedColor}</span>
          </h3>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSelectedColor("Midnight Blue")}
              className={`w-10 h-10 cursor-pointer rounded-full bg-surface-dark focus:outline-none transition-all ${selectedColor === "Midnight Blue" ? "ring-2 ring-primary ring-offset-2" : "hover:ring-2 hover:ring-slate-300"}`}
            ></button>
            <button
              onClick={() => setSelectedColor("Silver")}
              className={`w-10 h-10 cursor-pointer rounded-full bg-[#e2e8f0] focus:outline-none transition-all ${selectedColor === "Silver" ? "ring-2 ring-primary ring-offset-2" : "hover:ring-2 hover:ring-slate-300"}`}
            ></button>
            <button
              onClick={() => setSelectedColor("Matte Black")}
              className={`w-10 h-10 cursor-pointer rounded-full bg-[#111827] focus:outline-none transition-all ${selectedColor === "Matte Black" ? "ring-2 ring-primary ring-offset-2" : "hover:ring-2 hover:ring-slate-300"}`}
            ></button>
          </div>
        </div>

        {/* Model Selection */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-sm font-medium text-slate-900 ">
              Model
            </h3>
            <a className="text-sm text-primary hover:underline" href="#">
              Compare models
            </a>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <button
              onClick={() => setSelectedModel("Standard")}
              className={`py-3 px-4 cursor-pointer text-sm font-medium rounded-lg transition-all focus:outline-none ${selectedModel === "Standard" ? "border-2 border-primary bg-primary/5 text-primary shadow-sm" : "border border-slate-200  text-slate-900  bg-white hover:border-primary/50 hover:text-primary"}`}
            >
              Standard
            </button>
            <button
              onClick={() => setSelectedModel("Pro")}
              className={`py-3 px-4 cursor-pointer text-sm font-medium rounded-lg transition-all focus:outline-none ${selectedModel === "Pro" ? "border-2 border-primary bg-primary/5 text-primary shadow-sm" : "border border-slate-200  text-slate-900  hover:border-primary/50 hover:text-primary"}`}
            >
              Pro
            </button>
            <button
              disabled
              className="py-3 px-4 text-sm font-medium border border-slate-200 text-slate-400 bg-slate-50  rounded-lg cursor-not-allowed"
            >
              Max (Sold Out)
            </button>
          </div>
        </div>

        {/* Actions Row */}
        <div className="pt-6 border-t border-slate-100  flex flex-col sm:flex-row gap-4">
          {/* Quantity Selector */}
          <div className="flex items-center border border-slate-200  rounded-lg bg-white  h-12 w-32 sm:w-auto overflow-hidden">
            <button
              onClick={handleDecrease}
              className="w-10 h-full flex items-center cursor-pointer justify-center text-slate-500 hover:text-primary hover:bg-slate-50 border-none bg-transparent transition-colors"
            >
              <FiMinus size={18} />
            </button>
            <input
              type="text"
              readOnly
              value={quantity}
              className="w-12 h-full text-center border-none p-0 text-slate-900  font-medium bg-transparent focus:ring-0 outline-none"
            />
            <button
              onClick={handleIncrease}
              className="w-10 h-full flex items-center cursor-pointer justify-center text-slate-500 hover:text-primary hover:bg-slate-50 border-none bg-transparent transition-colors"
            >
              <FiPlus size={18} />
            </button>
          </div>

          {/* Add to Cart Button */}
          <button className="flex-1 bg-primary cursor-pointer hover:bg-primary-hover text-white font-bold rounded-lg h-12 px-8 flex items-center justify-center gap-2 transition-all shadow-lg shadow-primary/20 border-none">
            <FiShoppingBag size={20} />
            Add to Cart
          </button>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-2 gap-4 pt-4">
          <div className="flex items-center gap-3 p-3 rounded-lg bg-white border border-slate-100 ">
            <div className="p-2 bg-blue-50  text-primary rounded-full">
              <FiTruck size={20} />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-900 ">
                Free Shipping
              </p>
              <p className="text-xs text-slate-500">On orders over $50</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-lg bg-white border-slate-100 ">
            <div className="p-2 bg-blue-50  text-primary rounded-full">
              <FiShield size={20} />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-900 ">
                2 Year Warranty
              </p>
              <p className="text-xs text-slate-500">Full coverage included</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import {
  FiShoppingBag,
  FiSearch,
  FiHeart,
  FiShoppingCart,
  FiArrowRight,
  FiFacebook,
  FiInstagram,
  FiTwitter,
  FiMail,
} from "react-icons/fi";

export default function ProductCard({
  title,
  category,
  price,
  img,
  badge,
  oldPrice,
  soldOut,
}) {
  return (
    <div className="group relative flex flex-col gap-3 text-left">
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-gray-100">
        {badge && (
          <span
            className={`absolute left-3 top-3 z-10 rounded-md px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-sm ${badge === "Sale" ? "bg-red-500" : badge === "New" ? "bg-[#0b50da]" : "bg-gray-900"}`}
          >
            {badge}
          </span>
        )}
        <div className="absolute right-3 top-3 z-10">
          <button className="flex cursor-pointer size-8 items-center justify-center rounded-full bg-white text-gray-400 shadow-sm transition-all hover:text-red-500 hover:shadow-md">
            <FiHeart size={18} />
          </button>
        </div>
        <div
          className={`h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105 ${soldOut ? "grayscale" : ""}`}
          style={{ backgroundImage: `url(${img})` }}
        ></div>
        {!soldOut && (
          <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <button className="flex cursor-pointer h-10 w-full items-center justify-center gap-2 rounded-lg bg-white/90 text-sm font-bold text-[#0d121c] shadow-lg backdrop-blur-sm transition-colors hover:bg-[#0b50da] hover:text-white">
              <FiShoppingBag size={16} /> Add to Cart
            </button>
          </div>
        )}
      </div>
      <div className="flex flex-col">
        <h3 className="cursor-pointer text-base font-medium text-[#0d121c] hover:text-[#0b50da]">
          {title}
        </h3>
        <p className="text-sm text-[#49659c]">{category}</p>
        <div className="mt-1 flex items-center gap-2">
          <span
            className={`text-base font-bold ${badge === "Sale" ? "text-red-500" : "text-[#0d121c]"}`}
          >
            {price}
          </span>
          {oldPrice && (
            <span className="text-sm text-[#49659c] line-through">
              {oldPrice}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

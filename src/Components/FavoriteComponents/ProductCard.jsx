import { FiShoppingBag, FiTrash2 } from "react-icons/fi";
import { AiFillHeart } from "react-icons/ai";

export default function ProductCard({ title, category, price, img }) {
    return (
        <div className="group flex flex-col h-full bg-white rounded-xl transition-all duration-300">
            <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-[#f3f4f6]">
                <img
                    src={img}
                    alt={title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <button className="absolute top-3 right-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-sm transition-transform hover:scale-110 cursor-pointer border-none">
                    <AiFillHeart className="text-[#ef4444]" size={16} />
                </button>
            </div>
            <div className="mt-3 flex flex-1 flex-col px-1 text-left">
                <div className="flex justify-between items-start">
                    <h3 className="text-[15px] font-bold text-[#111827] leading-tight">
                        {title}
                    </h3>
                    <p className="text-[15px] font-bold text-[#0b50da] ml-2">
                        ${price}
                    </p>
                </div>
                <p className="text-[13px] text-[#64748b] mt-1 mb-4">
                    {category}
                </p>
                <div className="mt-auto space-y-2">
                    <button className="flex w-full cursor-pointer items-center justify-center rounded-md bg-[#0b50da] py-2 text-[13px] font-bold text-white hover:bg-[#0842b5] transition-colors gap-2 shadow-sm border-none">
                        <FiShoppingBag size={16} />
                        Add to Cart
                    </button>

                    <button className="flex w-full cursor-pointer items-center justify-center text-[11px] font-medium text-[#94a3b8] hover:text-[#ef4444] transition-colors gap-1 py-1 uppercase tracking-tight border-none bg-transparent">
                        <FiTrash2 size={12} />
                        Remove from favorites
                    </button>
                </div>
            </div>
        </div>
    );
}
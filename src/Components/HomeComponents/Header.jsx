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

export default function Header() {
  return (
    <header className="z-50 w-full border-b border-gray-100 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-6 lg:px-10">
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-[#0b50da] text-white shadow-lg shadow-[#0b50da]/20">
            <FiShoppingBag size={22} />
          </div>
          <span className="text-xl font-bold tracking-tight text-[#0d121c]">
            MINIMAL
          </span>
        </div>
        <div className="hidden max-w-md flex-1 px-8 md:flex">
          <div className="group flex h-12 w-full items-center rounded-full bg-[#f8f9fc] px-4 ring-1 ring-transparent transition-all focus-within:bg-white focus-within:ring-2 focus-within:ring-[#0b50da]/50">
            <FiSearch className="text-[#49659c] group-focus-within:text-[#0b50da]" />
            <input
              className="h-full w-full border-none bg-transparent px-3 text-sm font-medium text-[#0d121c] placeholder-[#49659c] focus:ring-0"
              placeholder="Search for essentials..."
              type="text"
            />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="flex size-10 cursor-pointer items-center justify-center rounded-full hover:bg-[#f8f9fc] text-[#0d121c] hover:text-[#0b50da] transition-colors">
            <FiHeart size={20} />
          </button>
          <button className="relative flex size-10 items-center justify-center rounded-full hover:bg-[#f8f9fc] text-[#0d121c] hover:text-[#0b50da] transition-colors">
            <FiShoppingCart size={20} className="cursor-pointer" />
            <span className="absolute -right-1 -top-1 flex size-5 items-center justify-center rounded-full bg-[#0b50da] text-[10px] font-bold text-white ring-2 ring-white">
              3
            </span>
          </button>
          <div className="ml-2 flex justify-center items-center size-10 overflow-hidden rounded-full ring-2 ring-gray-100 cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100"
              alt="profile"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

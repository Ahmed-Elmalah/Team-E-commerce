import { FiSearch, FiShoppingCart, FiUser } from 'react-icons/fi';

const Header = () => {
    return (
        <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 bg-white/80 backdrop-blur-md px-10 py-3">
            <div className="flex items-center gap-8">
                <div className="flex items-center gap-4 text-slate-900">
                    <div className="size-8 text-primary">
                        <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                            <path clipRule="evenodd" d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z" fill="currentColor" fillRule="evenodd"></path>
                        </svg>
                    </div>
                    <h2 className="text-xl font-bold leading-tight tracking-tight">Lumina</h2>
                </div>
                <nav className="hidden md:flex items-center gap-9">
                    <a className="text-slate-600 hover:text-primary transition-colors text-sm font-medium leading-normal" href="#">Shop</a>
                    <a className="text-slate-600 hover:text-primary transition-colors text-sm font-medium leading-normal" href="#">New Arrivals</a>
                    <a className="text-slate-600 hover:text-primary transition-colors text-sm font-medium leading-normal" href="#">Brands</a>
                    <a className="text-slate-600 hover:text-primary transition-colors text-sm font-medium leading-normal" href="#">Sale</a>
                </nav>
            </div>

            <div className="flex flex-1 justify-end gap-6">
                <div className="hidden lg:flex w-full max-w-xs">
                    <div className="relative w-full">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-400">
                           
                            <FiSearch className="text-[20px]" />
                        </div>
                        <input
                            className="block w-full rounded-lg border-0 bg-slate-100 py-2.5 pl-10 pr-4 text-sm text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-primary focus:bg-white transition-all"
                            placeholder="Search products..."
                            type="text"
                        />
                    </div>
                </div>

                <div className="flex gap-3 items-center">
                    <button className="relative flex items-center justify-center p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors group">
                      
                        <FiShoppingCart className="group-hover:text-primary transition-colors text-xl" />
                        <span className="absolute top-1.5 right-1.5 flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                    </button>
                    <button className="flex items-center justify-center p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors group">
                     
                        <FiUser className="group-hover:text-primary transition-colors text-xl" />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
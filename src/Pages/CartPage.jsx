import React, { useState } from 'react';
import CartItem from '../Components/CartComponents/CartItem';
import CartSummary from '../Components/CartComponents/CartSummary';
import { FiArrowLeft } from 'react-icons/fi';

const initialCartItems = [
    {
        id: 1,
        name: 'Minimalist Leather Backpack',
        color: 'Midnight Black',
        price: 120.00,
        quantity: 1,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAHhvwATli54JZgJpODbB9pYz8kG1xtW7k-dArwEuSFX-J6UZVLF_QlJ8O5YP8CppqXOnKmqxmYybLI7ZX7IBnKbt4hIZkTJ3auTBRcGQ10yUIUCk4M9KpOgP7eZaZqAHitL-myxPTSAaj6KagAxei-B_gKqfCExj3YvcjkHRkx2VJgzpOHV9EWUZmhgkiUbsE6o1ut75H13LWDqLiY4CSQO-IfEKn0WlTp47PzYQPVpaoUu60XSr9y5DnP1uaRjtsxx03Kd3QhmWI',
        stockStatus: 'In Stock',
        stockClass: 'emerald',
        stockIcon: 'check_circle',
    },
    {
        id: 2,
        name: 'Wireless Noise-Canceling Headphones',
        color: 'Silver',
        price: 299.00,
        quantity: 1,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBF215WrlNnqupoQpw5yR-LHAbpYWQuHeUd0yWBmIxfym79UHPSTnp3IsAVhsr5ZufkEeRpGr4u9AOqp6TwKX8x_bzlLCamWD_9bpiFWT3zQLJjKCVoP4KV5kJfmkldLm08BqkdzfTMU2XDvcIiZFBBVqiWTimA0ls8k7s1RK32NwtLu4wAFMZ2dCd8tF5ZjoT--y4bdzbTL8NiyKl8mbDcdMkTSGaYEpxavroaOOebj3Hw7bmEKX2eMIp4FPCaNPPTEUFl1Ka-fhE',
        stockStatus: 'Low Stock',
        stockClass: 'amber',
        stockIcon: 'schedule',
    },
    {
        id: 3,
        name: 'Ceramic Coffee Tumbler',
        color: 'Matte White',
        price: 45.00,
        quantity: 2,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB6NuCj5mMfp0wD6dEajkvyDrNziPjuoNY5ZclBw8htkMbxA4meSg6wG7p3KYuOQPjmeD5OXzYQdbx1IQFBn3gD_-hF57Xd3x0_nTkfvZq-R0r9_cFiQTGkq5-UTKvd9PTbrM0frwU2vCWcX-nK7WuLqeKeW5-Ri6fu1P0VqRVU4cFQpgb80XpE2HXGnk7BoVvBgdeBPDKRGw2x9-uKNSIeZwV4pXVjs4SpDhCniGl3lmXr7u5bRd4khd8s8AKDwR7UElanOmYSd0A',
        stockStatus: 'In Stock',
        stockClass: 'emerald',
        stockIcon: 'check_circle',
    }
];

const CartPage = () => {
    const [cartItems, setCartItems] = useState(initialCartItems);

    const calculateSubtotal = () => {
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    return (
        <div className="bg-background-light text-slate-900 font-display antialiased min-h-screen flex flex-col">

            <main className="flex-grow container mx-auto px-4 md:px-10 py-12 max-w-7xl">
                <div className="mb-10">
                    <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2 tracking-tight">Shopping Cart</h1>
                    <p className="text-slate-500">You have {cartItems.length} items in your cart</p>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 items-start relative">
                    <div className="w-full lg:w-[65%] xl:w-[70%] flex flex-col gap-6">
                        <div className="hidden sm:grid grid-cols-12 gap-4 pb-4 border-b border-slate-200 text-sm font-medium text-slate-500 uppercase tracking-wider">
                            <div className="col-span-6">Product</div>
                            <div className="col-span-2 text-center">Quantity</div>
                            <div className="col-span-2 text-right">Price</div>
                            <div className="col-span-2 text-right">Total</div>
                        </div>

                        {cartItems.map(item => (
                            <CartItem key={item.id} item={item} />
                        ))}

                        <div className="mt-8 flex justify-between items-center">
                            <button 
                                onClick={() => window.history.back()} 
                                className="flex items-center gap-2 text-primary font-medium hover:underline text-sm group cursor-pointer"
                            >
                                <FiArrowLeft className="text-[18px] transform group-hover:-translate-x-1 transition-transform" />
                                Continue Shopping
                            </button>
                        </div>
                    </div>

                    <div className="w-full lg:w-[35%] xl:w-[30%]">
                        <CartSummary subtotal={calculateSubtotal()} />
                    </div>
                </div>
            </main>
        </div>
    );
};

export default CartPage;
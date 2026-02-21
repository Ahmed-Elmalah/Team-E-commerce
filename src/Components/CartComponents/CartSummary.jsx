import { FiArrowRight, FiLock } from 'react-icons/fi';

const CartSummary = ({ subtotal }) => {

    const shipping = 0; 
    const tax = 32.00;
    const orderTotal = subtotal + shipping + tax;

    return (
        <div className="sticky top-28 bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100">
            <h2 className="text-xl font-bold text-slate-900 mb-6">Order Summary</h2>
            <div className="flex flex-col gap-4">
                
                <div className="flex justify-between text-slate-600 text-sm">
                    <span>Subtotal</span>
                    <span className="font-medium text-slate-900">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-slate-600 text-sm">
                    <span>Shipping estimate</span>
                    <span className="font-medium text-emerald-600">Free</span>
                </div>
                <div className="flex justify-between text-slate-600 text-sm">
                    <span>Tax estimate</span>
                    <span className="font-medium text-slate-900">${tax.toFixed(2)}</span>
                </div>

                <div className="mt-2 mb-2">
                    <label className="block text-xs font-medium text-slate-500 mb-2 uppercase tracking-wide" htmlFor="promo">
                        Promo Code
                    </label>
                    <div className="flex gap-2">
                        <input
                            className="flex-1 rounded-lg border-slate-200 bg-slate-50 text-sm focus:ring-2 focus:ring-primary focus:border-transparent placeholder:text-slate-400"
                            id="promo"
                            placeholder="Enter code"
                            type="text"
                        />
                        <button className="px-4 py-2 bg-slate-200 text-slate-700 font-medium rounded-lg text-sm hover:bg-slate-300 transition-colors">
                            Apply
                        </button>
                    </div>
                </div>

                <div className="h-px bg-slate-100 my-2"></div>

                <div className="flex justify-between items-baseline mb-2">
                    <span className="text-base font-semibold text-slate-900">Order Total</span>
                    <span className="text-2xl font-bold text-slate-900">${orderTotal.toFixed(2)}</span>
                </div>
                <button className="w-full bg-primary hover:bg-blue-700 text-white font-bold py-3.5 px-4 rounded-xl shadow-lg shadow-primary/30 hover:shadow-primary/40 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 mt-2">
                    Proceed to Checkout
                    <FiArrowRight className="text-[18px]" />
                </button>


                <div className="flex items-center justify-center gap-2 mt-4 text-slate-400 text-xs">
                    <FiLock className="text-[14px]" /> Secure Checkout
                </div>
            </div>
        </div>
    );
};

export default CartSummary;

import { FiTrash2, FiMinus, FiPlus, FiCheckCircle, FiClock } from 'react-icons/fi';


const CartItem = ({ item }) => {
    const renderStockIcon = () => {
        if (item.stockIcon === 'check_circle') {
            return <FiCheckCircle className="text-[14px]" />;
        } else if (item.stockIcon === 'schedule') {
            return <FiClock className="text-[14px]" />;
        }
        return null;
    };

    return (
        <div className="group flex flex-col sm:grid sm:grid-cols-12 gap-6 items-center py-6 border-b border-slate-100 hover:bg-white sm:hover:bg-transparent rounded-xl sm:rounded-none p-4 sm:p-0 bg-white sm:bg-transparent shadow-sm sm:shadow-none transition-colors">
            
            <div className="col-span-6 flex gap-5 w-full">
                <div className="w-24 h-24 shrink-0 rounded-xl overflow-hidden bg-slate-100 relative">
                    <img
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        src={item.image}
                    />
                </div>
                <div className="flex flex-col justify-center gap-1">
                    <h3 className="text-base font-semibold text-slate-900 leading-tight">{item.name}</h3>
                    <p className="text-sm text-slate-500">Color: {item.color}</p>
                    <p className={`text-xs font-medium text-${item.stockClass}-600 mt-1 flex items-center gap-1`}>
                        {renderStockIcon()} {item.stockStatus}
                    </p>
                </div>
            </div>

            <div className="col-span-2 flex items-center justify-center w-full sm:w-auto mt-4 sm:mt-0">
                <div className="flex items-center border border-slate-200 rounded-lg bg-white shadow-sm">
                    <button className="w-8 h-8 flex items-center justify-center text-slate-500 hover:text-primary hover:bg-slate-50 rounded-l-lg transition-colors">
                        <FiMinus className="text-[16px]" />
                    </button>
                    <input
                        className="w-8 p-0 text-center border-0 bg-transparent text-sm font-medium focus:ring-0 text-slate-900"
                        readOnly
                        type="text"
                        value={item.quantity}
                    />
                    <button className="w-8 h-8 flex items-center justify-center text-slate-500 hover:text-primary hover:bg-slate-50 rounded-r-lg transition-colors">
                        <FiPlus className="text-[16px]" />
                    </button>
                </div>
            </div>

            <div className="col-span-2 flex items-center justify-between sm:justify-end w-full sm:w-auto text-sm font-medium text-slate-500">
                <span className="sm:hidden">Price:</span>
                ${item.price.toFixed(2)}
            </div>
            <div className="col-span-2 flex items-center justify-between sm:justify-end w-full sm:w-auto gap-4">
                <span className="sm:hidden text-sm font-medium text-slate-900">Total:</span>
                <span className="text-base font-bold text-slate-900">${(item.price * item.quantity).toFixed(2)}</span>
                <button className="text-slate-400 hover:text-red-500 transition-colors p-1 rounded-full hover:bg-red-50 sm:ml-2">
                    <FiTrash2 className="text-[20px]" />
                </button>
            </div>
        </div>
    );
};

export default CartItem;
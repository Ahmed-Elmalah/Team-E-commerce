import React, { useState } from 'react';
import { MdOutlineVisibility, MdOutlineVisibilityOff, MdPersonOutline, MdMailOutline, MdLockOutline } from "react-icons/md";
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SignUpPage = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="min-h-screen w-full flex overflow-hidden font-display bg-[#f5f6f8] text-slate-900">


            <div className="hidden lg:flex lg:w-1/2 relative bg-slate-200">
                <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-1000"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80')" }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="relative z-10 flex flex-col justify-end p-12 w-full text-white">
                    <h2 className="text-4xl font-extrabold leading-tight">Elevate Your Style</h2>
                    <p className="mt-3 text-lg text-slate-100 opacity-90 max-w-md">Discover the latest trends in luxury fashion.</p>
                </div>
            </div>

            <div className="w-full lg:w-1/2 flex flex-col h-full overflow-y-auto bg-white">
                <div className="flex-1 flex flex-col justify-center px-8 sm:px-12 md:px-20 py-12 max-w-[640px] mx-auto w-full">

                    <div className="mb-10">
                        <h1 className="text-slate-900 text-3xl font-bold tracking-tight mb-2">Create Account</h1>
                        <p className="text-slate-500 text-base font-normal">Join us for exclusive access to the latest trends.</p>
                    </div>

                    <div className="space-y-5">
                        <div className="space-y-2">
                            <label className="block text-sm font-semibold text-slate-700" htmlFor="fullname">Full Name</label>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400 group-focus-within:text-[#0b50da] transition-colors">
                                    <MdPersonOutline size={22} />
                                </div>
                                <input
                                    id="fullname"
                                    type="text"
                                    className="block w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0b50da]/40 focus:border-[#0b50da] transition-all placeholder:text-slate-400 text-sm"
                                    placeholder="Enter your full name"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="block text-sm font-semibold text-slate-700" htmlFor="email">Email Address</label>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400 group-focus-within:text-[#0b50da] transition-colors">
                                    <MdMailOutline size={22} />
                                </div>
                                <input
                                    id="email"
                                    type="email"
                                    className="block w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0b50da]/40 focus:border-[#0b50da] transition-all placeholder:text-slate-400 text-sm"
                                    placeholder="Enter your email address"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="block text-sm font-semibold text-slate-700" htmlFor="password">Create Password</label>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400 group-focus-within:text-[#0b50da] transition-colors">
                                    <MdLockOutline size={22} />
                                </div>
                                <input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    className="block w-full pl-11 pr-12 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0b50da]/40 focus:border-[#0b50da] transition-all placeholder:text-slate-400 text-sm"
                                    placeholder="Create a password"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-slate-400 hover:text-[#0b50da] transition-colors"
                                >
                                    {showPassword ? <MdOutlineVisibilityOff size={22} /> : <MdOutlineVisibility size={22} />}
                                </button>
                            </div>
                        </div>

                        <div className="flex items-start pt-2">
                            <div className="flex h-5 items-center">
                                <input className="h-4 w-4 rounded border-slate-300 text-[#0b50da] focus:ring-[#0b50da]" id="terms" type="checkbox" />
                            </div>
                            <div className="ml-3 text-sm">
                                <label className="font-medium text-slate-600" htmlFor="terms">
                                    I agree to the <a className="text-[#0b50da] hover:underline" href="#">Terms & Conditions</a>
                                </label>
                            </div>
                        </div>

                        <button className="w-full flex justify-center py-3.5 px-4 bg-[#0b50da] hover:bg-blue-700 text-white font-bold rounded-lg shadow-lg shadow-blue-600/20 transition-all transform active:scale-[0.98]">
                            Create Account
                        </button>

                        <p className="text-center text-sm text-slate-600 pt-2">
                            Already have an account? <a className="font-bold text-[#0b50da] hover:underline" href="/login">Log In</a>
                        </p>
                    </div>

                    <div className="relative my-8">
                        <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-200"></div></div>
                        <div className="relative flex justify-center text-sm">
                            <span className="bg-white px-3 text-slate-500 font-medium">Or continue with</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <button className="flex items-center justify-center gap-3 rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-all shadow-sm">
                            <FcGoogle size={20} /> <span>Google</span>
                        </button>
                        <button className="flex items-center justify-center gap-3 rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-all shadow-sm">
                            <FaApple size={20} className="text-slate-900" /> <span>Apple</span>
                        </button>
                    </div>

                </div>

                <div className="py-6 text-center mt-auto">
                    <p className="text-xs text-slate-400">© 2026 FashionCo. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default SignUpPage;
import React, { useState } from 'react';
import { MdMailOutline, MdLockOutline, MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const LoginPage = () => {
  
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen w-full flex overflow-hidden font-display bg-[#f5f6f8] text-slate-900">
      
      {/* Left Side: Image (Desktop Only) */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-slate-200">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000" 
          style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAEdCMNdEu-8DyzyjY7KUBNONVkHe9nSuUFOfG6tUYHpNh1HlF7fGYfnSxKoneupo1dEX_ODkVi7PUNZmuGpWAvQswZn76lUOwQD5lXWb-AVm9iJ9HQzUw4O8WUtCnE02xI6zliaf4DxNeIUghzjzSsh-Zp9Ax_R2i6lFnyucfoxJjGMWdMN2PYep5oGq9CYL-JKQEOclka-kRbgAjMy70fAQ1Uf0Nd6n1RL9HtIaHRqtR5PTJGfJ8MYmKiddIA1qSvY_lVoiIPB3Q')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col justify-end p-12 w-full text-white">
          <h2 className="text-4xl font-extrabold leading-tight">Elevate Your Style</h2>
          <p className="mt-3 text-lg text-slate-100 opacity-90 max-w-md">Discover the latest trends in luxury fashion.</p>
        </div>
      </div>

      {/* Right Side: Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 md:p-12 bg-white">
        <div className="w-full max-w-md flex flex-col gap-8">
          
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">Welcome Back!</h1>
            <p className="text-slate-500">Please enter your details to access your account.</p>
          </div>

          <div className="flex flex-col gap-5">
            {/* Email Field */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">Email</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400 group-focus-within:text-[#0b50da] transition-colors">
                  <MdMailOutline size={22} />
                </div>
                <input 
                  type="email" 
                  className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0b50da]/40 focus:border-[#0b50da] transition-all placeholder:text-slate-400" 
                  placeholder="name@example.com" 
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">Password</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400 group-focus-within:text-[#0b50da] transition-colors">
                  <MdLockOutline size={22} />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full pl-11 pr-12 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0b50da]/40 focus:border-[#0b50da] transition-all placeholder:text-slate-400"
                  placeholder="Enter your password"
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-slate-400 hover:text-[#0b50da] transition-colors"
                >
                  {showPassword ? <MdOutlineVisibilityOff size={22} /> : <MdOutlineVisibility size={22} />}
                </button>
              </div>
              <div className="flex justify-end">
                <a className="text-sm font-bold text-[#0b50da] hover:underline" href="#">Forgot Password?</a>
              </div>
            </div>

            {/* Login Button */}
            <button className="w-full py-3.5 px-4 bg-[#0b50da] hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-600/20 transition-all transform active:scale-[0.98]">
              Log In
            </button>
          </div>

          {/* Social Divider */}
          <div className="relative flex items-center py-2">
            <div className="flex-grow border-t border-slate-200"></div>
            <span className="mx-4 text-slate-400 text-sm">Or continue with</span>
            <div className="flex-grow border-t border-slate-200"></div>
          </div>

          {/* Social Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex-1 flex items-center justify-center gap-3 py-3 border border-slate-200 rounded-xl hover:bg-slate-50 transition-all font-semibold">
              <FcGoogle size={22} /> <span>Google</span>
            </button>
            <button className="flex-1 flex items-center justify-center gap-3 py-3 border border-slate-200 rounded-xl hover:bg-slate-50 transition-all font-semibold">
              <FaApple size={22} /> <span>Apple</span>
            </button>
          </div>

          {/* Footer Link */}
          <p className="text-center text-slate-500 text-sm">
            Don't have an account? <a className="font-bold text-[#0b50da] hover:underline" href="/signup">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
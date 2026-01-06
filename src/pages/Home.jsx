import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Logo from "../assets/logo-caffe.png";
import Bg from "../assets/bg-image.jpeg";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div
      className="relative min-h-[100svh] flex items-center justify-center bg-cover bg-center bg-fixed overflow-hidden"
      style={{
        backgroundImage: `url(${Bg})`,
        fontFamily: "Recoleta Alt, serif",
      }}
    >
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#322119]/80 via-[#322119]/75 to-[#1a120d]/85" />
      
      {/* Subtle animated particles effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-2 h-2 bg-[#A27B5C] rounded-full animate-pulse" style={{ animationDelay: '0s', animationDuration: '3s' }} />
        <div className="absolute top-40 right-20 w-1.5 h-1.5 bg-[#A27B5C] rounded-full animate-pulse" style={{ animationDelay: '1s', animationDuration: '4s' }} />
        <div className="absolute bottom-32 left-1/4 w-2.5 h-2.5 bg-[#A27B5C] rounded-full animate-pulse" style={{ animationDelay: '2s', animationDuration: '3.5s' }} />
        <div className="absolute bottom-20 right-1/3 w-1 h-1 bg-[#A27B5C] rounded-full animate-pulse" style={{ animationDelay: '0.5s', animationDuration: '4.5s' }} />
      </div>

      {/* Content */}
      <div className={`relative z-10 flex flex-col items-center px-6 w-full transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {/* Logo with enhanced animation */}
        <div className={`mb-12 transition-all duration-1000 ${isLoaded ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`} style={{ transitionDelay: '200ms' }}>
          <img
            src={Logo}
            alt="Logo"
            className="w-full max-w-md drop-shadow-2xl hover:drop-shadow-[0_0_30px_rgba(162,123,92,0.5)] transition-all duration-500"
          />
        </div>

        {/* Buttons with enhanced design */}
        <div className={`flex flex-col gap-6 w-full max-w-sm transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '400ms' }}>
          <Link
            to="/drink"
            className="group relative py-5 px-8 text-center text-xl font-bold rounded-2xl shadow-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-[0_10px_40px_rgba(162,123,92,0.4)] active:scale-95 overflow-hidden"
            style={{ 
              backgroundColor: "#A27B5C", 
              color: "#322119",
            }}
          >
            {/* Shine effect on hover */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            
            {/* Button text */}
            <span className="relative z-10 flex items-center justify-center gap-2">
              <span>☕</span>
              <span>DRINK MENU</span>
              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
            </span>
          </Link>

          <Link
            to="/food"
            className="group relative py-5 px-8 text-center text-xl font-bold rounded-2xl shadow-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-[0_10px_40px_rgba(162,123,92,0.4)] active:scale-95 overflow-hidden"
            style={{ 
              backgroundColor: "#A27B5C", 
              color: "#322119",
            }}
          >
            {/* Shine effect on hover */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            
            {/* Button text */}
            <span className="relative z-10 flex items-center justify-center gap-2">
              <span>🍰</span>
              <span>FOOD MENU</span>
              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
            </span>
          </Link>
        </div>

        {/* Decorative bottom text */}
        <div className={`mt-16 text-center transition-all duration-1000 ${isLoaded ? 'opacity-60' : 'opacity-0'}`} style={{ transitionDelay: '600ms' }}>
          <p className="text-sm text-[#F5E9E0] tracking-wider">Welcome to Our Café</p>
        </div>
      </div>
    </div>
  );
}

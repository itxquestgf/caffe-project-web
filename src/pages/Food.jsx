import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Logo from "../assets/logo-caffe.png";
import Bg from "../assets/bg-image.jpeg";

export default function Food() {
  const [isLoaded, setIsLoaded] = useState(false);
  
  const palette = {
    textLight: "#F5E9E0",
    cardBg: "rgba(73,52,36,0.85)",
    border: "#5d4633",
    buttonBg: "#A27B5C",
    buttonText: "#322119",
  };

  const sweetMenu = [
    { name: "Dark Chocolatos Lava", price: 16000, icon: "🍫" },
    { name: "Chocolatos Caramel Cake", price: 20000, icon: "🍰" },
    { name: "Chocolatos Tiramisu", price: 22000, icon: "🍮" },
    { name: "Chocolatos Nougat Croissant", price: 16000, icon: "🥐" },
    { name: "Matcha Chocolatos Dubai Croissant", price: 18000, icon: "🥐" },
  ];

  const savoryMenu = [
    { name: "Ham n Cheese Croissant", price: 18000, icon: "🥐" },
    { name: "Picnic Roll Croissant", price: 18000, icon: "🥖" },
    { name: "Mushroom Cheese Quiche", price: 13000, icon: "🥧" },
    { name: "BBQ Beef Sandwich", price: 27000, icon: "🥪" },
  ];

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const renderMenu = (items, delay = 0) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
      {items.map((it, index) => (
        <div
          key={it.name}
          className={`group relative p-6 lg:p-8 rounded-3xl border backdrop-blur-md shadow-xl transition-all duration-500 transform hover:scale-[1.03] hover:shadow-2xl cursor-pointer ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{
            backgroundColor: palette.cardBg,
            borderColor: palette.border,
            transitionDelay: `${delay + index * 100}ms`,
            boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
          }}
        >
          {/* Decorative gradient on hover */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#A27B5C]/0 to-[#A27B5C]/0 group-hover:from-[#A27B5C]/10 group-hover:to-transparent transition-all duration-500" />
          
          {/* Icon */}
          <div className="text-4xl mb-4 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
            {it.icon}
          </div>

          {/* Price badge */}
          <div className="absolute top-5 right-5 font-bold flex items-center gap-1 px-3 py-1.5 rounded-full bg-gradient-to-r from-[#A27B5C] to-[#8B6A4F] text-[#322119] shadow-md group-hover:scale-110 transition-transform duration-300">
            <span className="text-xs opacity-90">Rp</span>
            <span>{it.price.toLocaleString("id-ID")}</span>
          </div>

          {/* Name */}
          <div className="pr-28 font-bold text-xl lg:text-2xl leading-tight group-hover:text-[#A27B5C] transition-colors duration-300">
            {it.name}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div
      className="min-h-screen p-6 md:p-12 bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: `url(${Bg})`,
        fontFamily: "Recoleta Alt, serif",
        color: palette.textLight,
      }}
    >
      {/* Enhanced overlay */}
      <div className="fixed inset-0 bg-gradient-to-br from-[#322119]/85 via-[#322119]/80 to-[#1a120d]/90 pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header with animation */}
        <header className={`flex flex-col items-center mb-12 gap-6 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
          <div className="relative">
            <img
              src={Logo}
              alt="Café Logo"
              className="w-full max-w-md drop-shadow-2xl hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Enhanced Back Button */}
          <Link
            to="/"
            className="group px-8 py-3 rounded-full text-sm font-bold shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl active:scale-95 flex items-center gap-2"
            style={{
              backgroundColor: palette.buttonBg,
              color: palette.buttonText,
            }}
          >
            <span className="group-hover:-translate-x-1 transition-transform duration-300">←</span>
            <span>BACK TO MENU</span>
          </Link>
        </header>

        {/* SWEET Section */}
        <div className={`mb-16 transition-all duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '200ms' }}>
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="text-5xl">🍰</span>
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#F5E9E0] via-[#A27B5C] to-[#F5E9E0] bg-clip-text text-transparent">
              SWEET
            </h2>
            <span className="text-5xl">🍰</span>
          </div>
          {renderMenu(sweetMenu, 300)}
        </div>

        {/* SAVORY Section */}
        <div className={`transition-all duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '600ms' }}>
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="text-5xl">🥪</span>
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#F5E9E0] via-[#A27B5C] to-[#F5E9E0] bg-clip-text text-transparent">
              SAVORY
            </h2>
            <span className="text-5xl">🥪</span>
          </div>
          {renderMenu(savoryMenu, 900)}
        </div>
      </div>
    </div>
  );
}

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Logo from "../assets/logo-caffe.png";
import Bg from "../assets/bg-image.jpeg";

export default function Drink() {
  const [isLoaded, setIsLoaded] = useState(false);
  
  const palette = {
    textLight: "#F5E9E0",
  };

  const menu = [
    {
      section: "COFFEE MOCKTAIL",
      icon: "☕",
      items: [
        { name: "Chocolatos Coffee", desc: "chocolatos, vanilla, caramel, espresso, milk", price: 20000 },
        { name: "Raspberry Chocolatte", desc: "chocolatos, raspberry, espresso, milk", price: 20000 },
        { name: "Caramel Chocolatte", desc: "chocolatos, caramel sauce, espresso, milk", price: 20000 },
        { name: "Godzillatos", desc: "chocolatos, caramel sauce, espresso, milk, whipped cream", price: 20000 },
      ],
    },
    {
      section: "NON-COFFEE MOCKTAIL",
      icon: "🥤",
      items: [
        { name: "Seasalt Chocolatos", desc: "chocolatos, vanilla, caramel sauce, milk, seasalt cream", price: 20000 },
        { name: "Honey Rose Chocolatos", desc: "chocolatos, fruit tea, honey, milk", price: 20000 },
      ],
    },
    {
      section: "MATCHA SERIES",
      icon: "🍵",
      items: [
        { name: "Matcha Seasalt Latte", desc: "matcha chocolatos, vanilla, seasalt cream", price: 20000 },
        { name: "Strawberry Matcha Latte", desc: "matcha chocolatos, strawberry puree, milk", price: 20000 },
      ],
    },
    {
      section: "COFFEE SPECIALTY",
      icon: "☕",
      items: [
        { name: "Ice / Hot Americano", desc: "espresso, water", price: 18000 },
        { name: "Ice / Hot Latte", desc: "espresso, milk", price: 20000 },
        { name: "Ice / Hot Cappuccino", desc: "espresso, milk", price: 20000 },
      ],
    },
    {
      section: "MINERAL WATER",
      icon: "💧",
      items: [
        { name: "Mineral Water", desc: "bottled drinking water", price: 10000 },
      ],
    },
  ];

  useEffect(() => {
    setIsLoaded(true);
  }, []);

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
      
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header with animation */}
        <header className={`flex flex-col items-center mb-10 gap-6 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
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
              backgroundColor: "#A27B5C", 
              color: "#322119",
            }}
          >
            <span className="group-hover:-translate-x-1 transition-transform duration-300">←</span>
            <span>BACK TO MENU</span>
          </Link>
        </header>

        {/* Menu with staggered animations */}
        <main className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {menu.map((section, sectionIndex) => (
            <section
              key={section.section}
              className={`group rounded-3xl p-6 lg:p-8 border backdrop-blur-md shadow-xl transition-all duration-500 transform hover:scale-[1.02] hover:shadow-2xl ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{
                backgroundColor: "rgba(50,33,25,0.85)",
                borderColor: "#5d4633",
                transitionDelay: `${sectionIndex * 100}ms`,
                boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
              }}
            >
              {/* Section header with icon */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b" style={{ borderColor: "#5d4633" }}>
                <span className="text-3xl">{section.icon}</span>
                <h2 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-[#F5E9E0] to-[#A27B5C] bg-clip-text text-transparent">
                  {section.section}
                </h2>
              </div>

              <ul className="flex flex-col gap-4">
                {section.items.map((it, itemIndex) => (
                  <li
                    key={it.name}
                    className="group/item relative p-5 rounded-xl border backdrop-blur-sm transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg cursor-pointer"
                    style={{
                      backgroundColor: "rgba(73,52,36,0.8)",
                      borderColor: "#5d4633",
                    }}
                  >
                    {/* Price badge with enhanced design */}
                    <div className="absolute top-3 right-3 font-bold flex items-center gap-1 px-3 py-1.5 rounded-full bg-gradient-to-r from-[#A27B5C] to-[#8B6A4F] text-[#322119] shadow-md group-hover/item:scale-110 transition-transform duration-300">
                      <span className="text-xs opacity-90">Rp</span>
                      <span>{it.price.toLocaleString("id-ID")}</span>
                    </div>

                    <div className="pr-24">
                      <div className="font-bold text-lg lg:text-xl mb-1.5 group-hover/item:text-[#A27B5C] transition-colors duration-300">
                        {it.name}
                      </div>
                      <div className="text-sm opacity-80 leading-relaxed">
                        {it.desc}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </main>
      </div>
    </div>
  );
}

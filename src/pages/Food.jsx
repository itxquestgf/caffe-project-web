import { Link } from "react-router-dom";
import Logo from "../assets/logo-caffe.png";
import Bg from "../assets/bg-image.jpeg";

export default function Food() {
  const palette = {
    textLight: "#F5E9E0",
  };

  const foodItems = [
    { name: "Dark Chocolatos Lava", price: 16000 },
    { name: "Chocolatos Caramel Cake", price: 20000 },
    { name: "Chocolatos Tiramisu", price: 22000 },
    { name: "Chocolatos Nougat Croissant", price: 16000 },
    { name: "Matcha Chocolatos Dubai Croissant", price: 18000 },
    { name: "Ham n Cheese Croissant", price: 18000 },
    { name: "Picnic Roll Croissant", price: 18000 },
    { name: "Mushroom Cheese Quiche", price: 13000 },
    { name: "BBQ Beef Sandwich", price: 27000 },
  ];

  return (
    <div
      className="min-h-screen p-6 md:p-12 bg-cover bg-center"
      style={{
        backgroundImage: `url(${Bg})`,
        fontFamily: "Recoleta Alt, serif",
        color: palette.textLight,
      }}
    >
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <header className="flex flex-col items-center mb-10 gap-4">
          <img src={Logo} className="w-full max-w-md drop-shadow-2xl" />

          {/* Back Button */}
          <Link
            to="/"
            className="px-6 py-2 rounded-full text-sm font-bold"
            style={{ backgroundColor: "#A27B5C", color: "#322119" }}
          >
            ← BACK TO MENU
          </Link>
        </header>

        <h2 className="text-3xl font-bold mb-6 text-center">
          FOOD MENU
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {foodItems.map((it) => (
            <div
              key={it.name}
              className="relative p-6 rounded-2xl border backdrop-blur-sm"
              style={{
                backgroundColor: "rgba(73,52,36,0.75)",
                borderColor: "#5d4633",
              }}
            >
              {/* Price */}
              <div className="absolute top-4 right-5 font-bold flex items-center gap-1">
                <span className="text-xs opacity-80">Rp</span>
                {it.price.toLocaleString("id-ID")}
              </div>

              <div className="pr-24 font-bold text-xl">
                {it.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

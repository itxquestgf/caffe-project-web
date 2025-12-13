import { Link } from "react-router-dom";
import Bg from "../assets/bg-image.jpeg";
import Logo from "../assets/logo-caffe.png";

export default function Food() {
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
      className="min-h-screen"
      style={{
        backgroundColor: "#322119",
        backgroundImage: `url(${Bg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center top",
        backgroundSize: "contain",
        fontFamily: "Recoleta Alt, serif",
        color: "#F5E9E0",
      }}
    >
      <div className="p-6 md:p-12 max-w-5xl mx-auto">
        {/* Back */}
        <Link to="/" className="inline-block mb-6 text-sm opacity-80">
          ← Kembali ke Menu Awal
        </Link>

        <header className="flex justify-center mb-10">
          <img src={Logo} className="w-full max-w-md drop-shadow-2xl" />
        </header>

        <h2 className="text-3xl font-bold mb-6 text-center">FOOD MENU</h2>

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
              <div className="absolute top-4 right-5 font-bold flex gap-1">
                <span className="text-xs opacity-80">Rp</span>
                {it.price.toLocaleString("id-ID")}
              </div>

              <div className="pr-20 font-bold text-xl">
                {it.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

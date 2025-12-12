import Logo from "../assets/logo-caffe.png";
import Bg from "../assets/bg-image.jpeg";

export default function Food() {
  const palette = {
    textLight: "#F5E9E0",
  };

  const foodItems = [
    { name: "Dark Chocolatos Lava", desc: "warm chocolatos lava cake", price: 16000 },
    { name: "Chocolatos Caramel Cake", desc: "soft cake with caramel sauce", price: 20000 },
    { name: "Chocolatos Tiramisu", desc: "creamy tiramisu dessert", price: 22000 },
    { name: "Chocolatos Nougat Croissant", desc: "croissant filled with nougat cream", price: 16000 },
    { name: "Matcha Chocolatos Dubai Croissant", desc: "croissant with matcha chocolatos", price: 18000 },
    { name: "Ham n Cheese Croissant", desc: "croissant with ham & cheese", price: 18000 },
    { name: "Picnic Roll Croissant", desc: "savory picnic roll filling", price: 18000 },
    { name: "Mushroom Cheese Quiche", desc: "savory mini quiche", price: 13000 },
    { name: "BBQ Beef Sandwich", desc: "grilled beef BBQ sandwich", price: 27000 },
  ];

  return (
    <div
      className="min-h-screen p-6 md:p-12 bg-cover bg-center"
      style={{
        backgroundImage: `url(${Bg})`,
        fontFamily: "Recoleta Alt, serif",
      }}
    >
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <header className="flex items-center justify-center mb-10">
          <img
            src={Logo}
            className="w-full max-w-md drop-shadow-2xl"
          />
        </header>

        {/* Title */}
        <h2
          className="text-3xl font-bold mb-6 text-center"
          style={{ color: palette.textLight }}
        >
          FOOD MENU
        </h2>

        {/* GRID 2 kolom */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">

          {foodItems.map((it) => (
            <div
              key={it.name}
              className="relative p-6 rounded-2xl border backdrop-blur-sm shadow-lg"
              style={{
                backgroundColor: "rgba(73,52,36,0.75)",
                borderColor: "#5d4633",
                color: palette.textLight,
              }}
            >
              {/* Price */}
              <div className="absolute top-4 right-5 text-lg font-bold flex items-center gap-1">
                <span className="text-xs opacity-80">Rp</span>
                {it.price.toLocaleString("id-ID")}
              </div>

              {/* Text only (No icon) */}
              <div className="pr-20 leading-relaxed">
                <div className="font-bold text-xl mb-1">{it.name}</div>
                <div className="text-sm opacity-80">{it.desc}</div>
              </div>
            </div>
          ))}

        </div>

      </div>
    </div>
  );
}

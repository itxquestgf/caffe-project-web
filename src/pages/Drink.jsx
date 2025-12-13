import { Link } from "react-router-dom";
import Logo from "../assets/logo-caffe.png";
import Bg from "../assets/bg-image.jpeg";

export default function Drink() {
  const palette = {
    textLight: "#F5E9E0",
  };

  const menu = [
    {
      section: "COFFEE MOCKTAIL",
      items: [
        { name: "Chocolatos Coffee", desc: "chocolatos, vanilla, caramel, espresso, milk", price: 20000 },
        { name: "Raspberry Chocolatte", desc: "chocolatos, raspberry, espresso, milk", price: 20000 },
        { name: "Caramel Chocolatte", desc: "chocolatos, caramel sauce, espresso, milk", price: 20000 },
        { name: "Godzillatos", desc: "chocolatos, caramel sauce, espresso, milk, whipped cream", price: 20000 },
      ],
    },
    {
      section: "NON-COFFEE MOCKTAIL",
      items: [
        { name: "Seasalt Chocolatos", desc: "chocolatos, vanilla, caramel sauce, milk, seasalt cream", price: 20000 },
        { name: "Honey Rose Chocolatos", desc: "chocolatos, fruit tea, honey, milk", price: 20000 },
      ],
    },
    {
      section: "MATCHA SERIES",
      items: [
        { name: "Matcha Seasalt Latte", desc: "matcha chocolatos, vanilla, seasalt cream", price: 20000 },
        { name: "Strawberry Matcha Latte", desc: "matcha chocolatos, strawberry puree, milk", price: 20000 },
      ],
    },
    {
      section: "COFFEE SPECIALTY",
      items: [
        { name: "Ice / Hot Americano", desc: "espresso, water", price: 18000 },
        { name: "Ice / Hot Latte", desc: "espresso, milk", price: 20000 },
        { name: "Ice / Hot Cappuccino", desc: "espresso, milk", price: 20000 },
      ],
    },
    {
      section: "MINERAL WATER",
      items: [
        { name: "Mineral Water", desc: "bottled drinking water", price: 8000 },
      ],
    },
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
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <header className="flex flex-col items-center mb-8 gap-4">
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

        {/* Menu */}
        <main className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {menu.map((section) => (
            <section
              key={section.section}
              className="rounded-2xl p-6 border backdrop-blur-sm"
              style={{
                backgroundColor: "rgba(50,33,25,0.75)",
                borderColor: "#5d4633",
              }}
            >
              <h2 className="text-2xl font-bold mb-4">
                {section.section}
              </h2>

              <ul className="flex flex-col gap-3">
                {section.items.map((it) => (
                  <li
                    key={it.name}
                    className="relative p-4 rounded-lg border"
                    style={{
                      backgroundColor: "rgba(73,52,36,0.75)",
                      borderColor: "#5d4633",
                    }}
                  >
                    {/* Price */}
                    <div className="absolute top-2 right-3 font-bold flex items-center gap-1">
                      <span className="text-xs opacity-80">Rp</span>
                      {it.price.toLocaleString("id-ID")}
                    </div>

                    <div className="pr-20">
                      <div className="font-bold text-lg">{it.name}</div>
                      <div className="text-sm opacity-80">{it.desc}</div>
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

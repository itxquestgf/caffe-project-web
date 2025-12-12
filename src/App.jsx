import Logo from "./assets/logo-caffe.png"

export default function App() {
  const palette = {
    darkBrown: "#6A4E3A", // deep chocolate
    brown: "#A27B5C", // milk-chocolate
    lightMilk: "#F5E9E0", // milky cream
    accent: "#C89A6B", // caramel-like
  };

  const menu = [
    {
      section: "COFFEE MOCKTAIL",
      items: [
        {
          name: "Chocolatos Coffee",
          desc: "chocolatos, vanilla, caramel, espresso, milk",
          price: 20000,
        },
        {
          name: "Raspberry Chocolatte",
          desc: "chocolatos, raspberry, espresso, milk",
          price: 20000,
        },
        {
          name: "Caramel Chocolatte",
          desc: "chocolatos, caramel sauce, espresso, milk",
          price: 20000,
        },
      ],
    },
    {
      section: "NON-COFFEE MOCKTAIL",
      items: [
        {
          name: "Seasalt Chocolatos",
          desc: "chocolatos, vanila, caramel sauce, milk, homemade seasalt cream",
          price: 20000,
        },
        {
          name: "Honey Rose Chocolatos",
          desc: "chocolatos, fruit tea, honey, milk",
          price: 20000,
        },
      ],
    },
    {
      section: "MATCHA SERIES",
      items: [
        {
          name: "Matcha Seasalt Latte",
          desc: "matcha chocolatos, vanilla, sousalt cream",
          price: 20000,
        },
        {
          name: "Strawberry Matcha Latte",
          desc: "matcha chocolatos, strawberry purse, milic",
          price: 20000,
        },
      ],
    },
    {
      section: "COFFEE SPECIALTY",
      items: [
        { name: "Ice/Hot Americano", desc: "espresso, water", price: 18000 },
        { name: "Ice/Hot Latte", desc: "espresso, milk", price: 20000 },
        { name: "Ice/Hot Cappuccino", desc: "espresso, milk", price: 20000 },
      ],
    },
  ];


  return (
    <div
      className="min-h-screen p-6 md:p-12"
      style={{ backgroundColor: palette.darkBrown }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="flex items-center justify-center mb-8">
          <img
            src={Logo}
            alt="Logo"
            className="w-full max-w-md object-contain"
          />
        </header>

        {/* Menu grid */}
        <main className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {menu.map((section) => (
            <section key={section.section} className="bg-white/80 rounded-2xl p-6 shadow-md">
              <h2
                className="text-xl font-bold mb-4"
                style={{ color: palette.darkBrown }}
              >
                {section.section}
              </h2>

              <ul className="flex flex-col gap-3">
                {section.items.map((it) => (
                  <li
                    key={it.name}
                    className="flex items-start gap-4 p-3 rounded-lg border border-transparent hover:shadow-sm transition"
                    style={{ backgroundColor: "rgba(250,244,241,0.8)" }}
                  >
                    <div
                      className="w-12 h-12 flex-shrink-0 rounded-lg flex items-center justify-center font-bold text-lg"
                      style={{ backgroundColor: palette.brown, color: "#3b1f13" }}
                    >
                      {it.name.split(" ")[0][0]}
                    </div>
                    <div>
                      <div className="font-semibold" style={{ color: palette.darkBrown }}>
                        {it.name}
                      </div>
                      <div className="text-sm text-[#6b4a3a]">{it.desc}</div>
                    </div>
                    <div className="ml-auto flex items-center">
                      <div
                        className="text-sm font-bold px-2 py-1 rounded-full border"
                        style={{ borderColor: palette.accent, color: palette.darkBrown }}
                      >
                        {Math.floor(it.price / 1000)}k
                      </div>
                    </div>


                  </li>
                ))}
              </ul>
            </section>
          ))}
        </main>

        {/* Footer */}
        <footer className="mt-8 text-center text-sm text-[#be957c]">
          <div>Made with ♥ — Coklat Susu Theme</div>
        </footer>
      </div>
    </div>
  );
}

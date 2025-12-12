import Logo from "./assets/logo-caffe.png";

export default function App() {
  const palette = {
    darkBrown: "#322119",
    brown: "#A27B5C",
    lightMilk: "#F5E9E0",
    accent: "#C89A6B",
    textLight: "#F5E9E0",
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
          desc: "matcha chocolatos, vanilla, seasalt cream",
          price: 20000,
        },
        {
          name: "Strawberry Matcha Latte",
          desc: "matcha chocolatos, strawberry purse, milk",
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
      style={{
        backgroundColor: palette.darkBrown,
        fontFamily: "Lusitana, serif",
        color: palette.textLight,
      }}
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
            <section
              key={section.section}
              className="rounded-2xl p-6 shadow-md border"
              style={{
                backgroundColor: "#3c2b1f",
                borderColor: "#5d4633",
                color: palette.textLight,
              }}
            >
              <h2
                className="text-2xl font-bold mb-4"
                style={{
                  color: palette.textLight,
                  fontFamily: "Lusitana, serif",
                }}
              >
                {section.section}
              </h2>

              <ul className="flex flex-col gap-3">
                {section.items.map((it) => (
                  <li
                    key={it.name}
                    className="relative flex items-start gap-4 p-3 rounded-lg border hover:shadow transition"
                    style={{
                      backgroundColor: "#493424",
                      borderColor: "#5d4633",
                    }}
                  >
                    {/* Harga Pojok Kanan Atas */}
                    <div
                      className="absolute top-2 right-3 text-base font-bold px-2 py-1 rounded border"
                      style={{
                        borderColor: palette.accent,
                        color: palette.textLight,
                      }}
                    >
                      {it.price.toLocaleString("id-ID")}
                    </div>

                    {/* Icon */}
                    <div
                      className="w-12 h-12 flex-shrink-0 rounded-lg flex items-center justify-center font-bold text-xl"
                      style={{
                        backgroundColor: palette.brown,
                        color: "#3b1f13",
                      }}
                    >
                      {it.name.split(" ")[0][0]}
                    </div>

                    {/* Text */}
                    <div className="pr-12">
                      <div
                        className="font-bold text-lg"
                        style={{ color: palette.textLight }}
                      >
                        {it.name}
                      </div>
                      <div className="text-sm opacity-80 leading-snug">
                        {it.desc}
                      </div>
                    </div>

                  </li>
                ))}
              </ul>
            </section>
          ))}
        </main>

        {/* Footer */}
        <footer
          className="mt-8 text-center text-sm opacity-80"
          style={{ color: palette.textLight }}
        >
          Made with ♥ — Coklat Susu Theme
        </footer>

      </div>
    </div>
  );
}

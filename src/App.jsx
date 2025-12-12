import Logo from "./assets/logo-caffe.png";
import Bg from "./assets/bg-image.jpeg";
import LogoMenu from "./assets/logo-menu.png"

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
        {
          name: "Godzillatos",
          desc: "chocolatos, caramel sauce, espresso, milk,whipped cream",
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
      className="min-h-screen p-6 md:p-12 bg-cover bg-center"
      style={{
        backgroundImage: `url(${Bg})`,
        fontFamily: "Recoleta Alt, serif",
        color: palette.textLight,
      }}
    >
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <header className="flex items-center justify-center mb-8">
          <img
            src={Logo}
            alt="Logo"
            className="w-full max-w-md object-contain drop-shadow-2xl"
          />
        </header>

        {/* Menu Grid */}
        <main className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {menu.map((section) => (
            <section
              key={section.section}
              className="rounded-2xl p-6 shadow-md border backdrop-blur-sm"
              style={{
                backgroundColor: "rgba(50, 33, 25, 0.70)",
                borderColor: "#5d4633",
                color: palette.textLight,
                fontFamily: "Recoleta Alt, serif",
              }}
            >
              {/* Section Title */}
              <h2
                className="text-2xl font-bold mb-4"
                style={{
                  color: palette.textLight,
                  fontFamily: "Recoleta Alt, serif",
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
                      backgroundColor: "rgba(73, 52, 36, 0.75)",
                      borderColor: "#5d4633",
                      fontFamily: "Recoleta Alt, serif",
                    }}
                  >
                    {/* Price — Top Right */}
                    <div
                      className="absolute top-2 right-3 text-base font-bold px-2 py-1 flex items-center gap-1"
                      style={{
                        borderColor: palette.accent,
                        color: palette.textLight,
                        fontFamily: "Recoleta Alt, serif",
                      }}
                    >
                      <span className="text-xs opacity-80">Rp</span>
                      {it.price.toLocaleString("id-ID")}
                    </div>

                    {/* Icon */}
                    {/* Avatar: pakai image logo */}
                    <div className="w-12 h-12 flex-shrink-0 rounded-lg overflow-hidden">
                      <img
                        src={LogoMenu}
                        alt="icon"
                        className="w-full h-full object-cover"
                      />
                    </div>


                    {/* Text */}
                    <div className="pr-12">

                      <div
                        className="font-bold text-lg"
                        style={{
                          color: palette.textLight,
                          fontFamily: "Recoleta Alt, serif",
                        }}
                      >
                        {it.name}
                      </div>

                      <div
                        className="text-sm opacity-80 leading-snug"
                        style={{ fontFamily: "Recoleta Alt, serif" }}
                      >
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
